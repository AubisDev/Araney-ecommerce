import { createSlice } from "@reduxjs/toolkit";
import { ProductInfo } from "../../models/products";
import { getLocalStorage } from "../../utilities/localstorage";

export const EmptyProductState: ProductInfo = {
  id: 0,
  name: '',
  price: 0,
  image: '',
  category: '',
  discount: '',
  rating: {
    rate: 0
  }
};

export const UserKey = 'user';

export const productSlice = createSlice({
  name: 'user',
  initialState: getLocalStorage( 'product', EmptyProductState ),
  reducers: {
    
  }
});

export const { } = productSlice.actions;

export default productSlice.reducer;