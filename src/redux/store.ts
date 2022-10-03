import { configureStore } from '@reduxjs/toolkit';
import productSliceReducer from './states/product';
import userSliceReducer from './states/user';
import cartSliceReducer from './states/cart';
import { CartInfo } from '../models/cart';
import { ProductInfo } from '../models';
import { UserInfo } from '../models/user';

export interface AppStore {
  product: ProductInfo;
  user: UserInfo;
  cart: CartInfo;
}

export default configureStore<AppStore>({
  reducer: {
    product: productSliceReducer,
    user: userSliceReducer,
    cart: cartSliceReducer
  }
});