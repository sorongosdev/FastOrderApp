import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../consts/Url';

// 메뉴 타입 정의
interface Menu {
  menu_name: string;
  menu_price: number;
  menu_image_url: string;
  menu_id: number;
}

// 찜 가게 타입 정의
interface WishlistStore {
  user_id: string;
  store_id: number;
  store_name: string;
  store_description: string | null;
  menus: Menu[];
}

interface WishlistState {
  stores: WishlistStore[];
  isLoading: boolean;
  error: string | null;
}

// 찜 목록 불러오기 - 비동기 액션
export const fetchWishlist = createAsyncThunk(
  'wishlist/fetchWishlist',
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/user/wishlist?token=${token}`);
      return response.data;
    } catch (error) {
      return rejectWithValue('찜 목록을 불러오는데 실패했습니다.');
    }
  }
);

// 찜 추가하기 - 비동기 액션
export const addToWishlist = createAsyncThunk(
  'wishlist/addToWishlist',
  async ({ token, storeId, menuId }: { token: string, storeId: number, menuId?: number }, { dispatch, rejectWithValue }) => {
    try {
      await axios.post(`${BASE_URL}/user/wish`, {
        token,
        type: menuId ? 'menu' : 'store',
        store_id: storeId,
        menu_id: menuId,
      });
      
      // 찜 목록 다시 불러오기
      dispatch(fetchWishlist(token));
      return { success: true };
    } catch (error) {
      return rejectWithValue('찜 추가에 실패했습니다.');
    }
  }
);

// 찜 제거하기 - 비동기 액션
export const removeFromWishlist = createAsyncThunk(
  'wishlist/removeFromWishlist',
  async ({ token, storeId, menuId }: { token: string, storeId: number, menuId?: number }, { dispatch, rejectWithValue }) => {
    try {
      await axios.delete(`${BASE_URL}/user/wish`, {
        data: {
          token,
          type: menuId ? 'menu' : 'store',
          store_id: storeId,
          menu_id: menuId,
        }
      });
      
      // 찜 목록 다시 불러오기
      dispatch(fetchWishlist(token));
      return { success: true };
    } catch (error) {
      return rejectWithValue('찜 제거에 실패했습니다.');
    }
  }
);

const initialState: WishlistState = {
  stores: [],
  isLoading: false,
  error: null,
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    // 메뉴 찜 제거 (로컬 상태 업데이트용)
    removeWishlistItem: (state, action: PayloadAction<{storeId: number, menuId: number}>) => {
      const { storeId, menuId } = action.payload;
      
      // 해당 가게 찾기
      const storeIndex = state.stores.findIndex(store => store.store_id === storeId);
      if (storeIndex !== -1) {
        // 해당 메뉴 제거
        state.stores[storeIndex].menus = state.stores[storeIndex].menus.filter(
          menu => menu.menu_id !== menuId
        );
        
        // 가게에 메뉴가 없으면 가게도 제거
        if (state.stores[storeIndex].menus.length === 0) {
          state.stores.splice(storeIndex, 1);
        }
      }
    },
    
    // 가게 찜 제거 (로컬 상태 업데이트용)
    removeWishlistStore: (state, action: PayloadAction<number>) => {
      const storeId = action.payload;
      state.stores = state.stores.filter(store => store.store_id !== storeId);
    }
  },
  extraReducers: (builder) => {
    builder
      // 찜 목록 불러오기 상태 처리
      .addCase(fetchWishlist.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.stores = action.payload;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { removeWishlistItem, removeWishlistStore } = wishlistSlice.actions;
export default wishlistSlice.reducer;