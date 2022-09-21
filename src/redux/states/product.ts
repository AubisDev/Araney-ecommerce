import { createSlice, Slice } from '@reduxjs/toolkit';
import { ProductInfo } from '../../models/products';
// import { getLocalStorage } from "../../utilities/localstorage";


interface ProductState {
  selectedProduct: ProductInfo | null
}

export const EmptyProductState:ProductState = {
  selectedProduct: null
};


export const productSlice:Slice = createSlice({
  name: 'product',
  initialState: EmptyProductState,
  reducers: {
    setSelectedProduct: (state, action) => {
      return action.payload
    },

  }
});

export const { setSelectedProduct } = productSlice.actions;

export default productSlice.reducer;