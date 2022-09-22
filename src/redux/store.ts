import { configureStore } from '@reduxjs/toolkit';
import { UserInfo } from '../models/user';
import productSliceReducer, { CartAndProductInfo } from './states/product';
import userSliceReducer from './states/user';

export interface AppStore {
  product: CartAndProductInfo;
  user: UserInfo;
}

export default configureStore<AppStore>({
  reducer: {
    product: productSliceReducer,
    user: userSliceReducer,
  }
});