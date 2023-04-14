import { createSlice, Slice } from "@reduxjs/toolkit";
import { Product } from "../../models/products";
// import { getLocalStorage } from "../../utilities/localstorage";

export interface ProductProps {
  selectedProduct: Product | null;
}

export const EmptyProductState: ProductProps = {
  selectedProduct: null,
};

export const productSlice: Slice = createSlice({
  name: "product",
  initialState: EmptyProductState,
  reducers: {
    setSelectedProduct: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSelectedProduct } = productSlice.actions;

export default productSlice.reducer;
