import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Option {
  Cost: number;
  Title: string;
  OptionNo: number;
}

interface Menu {
  Price: number;
  Title: string;
  no: number;
  image: string;
}

export interface CartItem {
  Menu: Menu;
  Count: number;
  Price: number;
  Option: Option[];
  store_id: number;
}

interface CartState {
  items: CartItem[];
  storeId: number | null;
}

const initialState: CartState = {
  items: [],
  storeId: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      
      // 다른 가게의 상품이면 장바구니 초기화
      if (state.storeId !== null && state.storeId !== newItem.store_id && state.items.length > 0) {
        return {
          items: [newItem],
          storeId: newItem.store_id
        };
      }
      
      state.items.push(newItem);
      state.storeId = newItem.store_id;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((_, index) => index !== action.payload);
      
      // 장바구니가 비었으면 storeId 초기화
      if (state.items.length === 0) {
        state.storeId = null;
      }
    },
    updateQuantity: (state, action: PayloadAction<{ index: number; count: number }>) => {
      const { index, count } = action.payload;
      if (state.items[index]) {
        const item = state.items[index];
        const pricePerUnit = item.Price / item.Count;
        
        state.items[index].Count = count;
        state.items[index].Price = pricePerUnit * count;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.storeId = null;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;