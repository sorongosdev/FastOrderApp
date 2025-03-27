import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import userReducer from './slices/userSlice';
import cartReducer from './slices/cartSlice';
import orderReducer from './slices/orderSlice';
import wishlistReducer from './slices/wishlistSlice';
import orderHistoryReducer from './slices/orderHistorySlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user', 'cart', 'wishlist', 'orderHistory'], // orderHistory 추가
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  order: orderReducer,
  wishlist: wishlistReducer, // wishlist 리듀서 추가
  orderHistory: orderHistoryReducer, // orderHistory 리듀서 추가
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// 추가 및 수정된 부분: Redux 상태의 타입 정의를 명확히 함
export type RootState = ReturnType<typeof rootReducer> & {
  _persist: any; // Redux Persist 추가 속성
};
export type AppDispatch = typeof store.dispatch;