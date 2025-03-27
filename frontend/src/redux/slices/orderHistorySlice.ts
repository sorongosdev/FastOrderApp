import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../consts/Url';

// 주문 내역 아이템 인터페이스
interface OrderHistoryItem {
  id: number; // 주문 ID
  date: string; // 주문 날짜 (표시용 포맷)
  ordered_at: string; // 원래 주문 날짜 (ISO 형식)
  progress: string; // 진행 상태 (표시용)
  order_status: string; // 실제 주문 상태
  storeName: string; // 가게 이름
  menuName: string; // 메뉴 이름
  totalPrice: number; // 총 가격
  storeId: number; // 가게 ID
  menuIds: number[]; // 메뉴 ID 배열
  totalItems: number; // 전체 아이템 수
  isLiked: boolean; // 찜 상태
}

interface OrderHistoryState {
  items: OrderHistoryItem[];
  isLoading: boolean;
  error: string | null;
}

// 주문 내역 불러오기 - 비동기 액션
export const fetchOrderHistory = createAsyncThunk(
  'orderHistory/fetchOrderHistory',
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/user/orderHistory?token=${token}`);
      
      // API 응답을 우리 형식에 맞게 변환
      const formattedOrders = response.data.map((order: any) => ({
        id: order.order_id,
        date: new Date(order.ordered_at).toLocaleDateString('ko-KR', { month: 'numeric', day: 'numeric', weekday: 'short' }),
        ordered_at: order.ordered_at,
        progress: order.order_status === 'Completed' ? '픽업완료' : 
                 order.order_status === 'Confirmed' ? '조리중' : '접수대기',
        order_status: order.order_status,
        storeName: order.store_name,
        menuName: order.menu_name,
        totalPrice: order.cost_total,
        storeId: order.store_id,
        menuIds: order.menu_ids || [],
        totalItems: order.total_items || 1,
        isLiked: order.is_liked || false
      }));
      
      return formattedOrders;
    } catch (error) {
      return rejectWithValue('주문 내역을 불러오는데 실패했습니다.');
    }
  }
);

const initialState: OrderHistoryState = {
  items: [],
  isLoading: false,
  error: null,
};

const orderHistorySlice = createSlice({
  name: 'orderHistory',
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<number>) => {
      const orderId = action.payload;
      const orderIndex = state.items.findIndex(item => item.id === orderId);
      
      if (orderIndex !== -1) {
        state.items[orderIndex].isLiked = !state.items[orderIndex].isLiked;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      // 주문 내역 불러오기 상태 처리
      .addCase(fetchOrderHistory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchOrderHistory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchOrderHistory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { toggleLike } = orderHistorySlice.actions;
export default orderHistorySlice.reducer;