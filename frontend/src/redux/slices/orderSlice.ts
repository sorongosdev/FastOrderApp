import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OrderState {
  currentOrderId: number | null;
  orderHistory: any[]; // 필요에 따라 타입 정의 확장
}

const initialState: OrderState = {
  currentOrderId: null,
  orderHistory: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setCurrentOrderId: (state, action: PayloadAction<number>) => {
      state.currentOrderId = action.payload;
    },
    clearCurrentOrder: (state) => {
      state.currentOrderId = null;
    },
    // 필요에 따라 추가 리듀서 정의
  },
});

export const { setCurrentOrderId, clearCurrentOrder } = orderSlice.actions;
export default orderSlice.reducer;