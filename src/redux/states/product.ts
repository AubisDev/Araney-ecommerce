import { createSlice, Slice } from '@reduxjs/toolkit';
import { ProductInfo } from '../../models/products';
// import { getLocalStorage } from "../../utilities/localstorage";


export interface ProductProps {
  selectedProduct: ProductInfo | null;
}

export const EmptyProductState:ProductProps = {
  selectedProduct: null,
};


export const productSlice:Slice = createSlice({
  name: 'product',
  initialState: EmptyProductState,
  reducers: {

    setSelectedProduct: (state, action) => {
      return action.payload;
    },

  }
});

export const { 
  setSelectedProduct, 
} = productSlice.actions;

export default productSlice.reducer;