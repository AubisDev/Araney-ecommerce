import { configureStore } from '@reduxjs/toolkit';
import { ProductInfo } from '../models/products';
import { UserInfo } from '../models/user';
import productSliceReducer from './states/product';
import userSliceReducer from './states/user';

export interface AppStore {
  product: ProductInfo;
  user: UserInfo;
}

export default configureStore<AppStore>({
  reducer: {
    product: productSliceReducer,
    user: userSliceReducer,
  }
});