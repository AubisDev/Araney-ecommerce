import { createSlice, Slice } from '@reduxjs/toolkit';
import { CartItemProps, ProductInfo } from '../../models/products';
// import { getLocalStorage } from "../../utilities/localstorage";


export interface CartAndProductInfo {
  selectedProduct: ProductInfo | null;
  cart: CartItemProps[];
}

export const EmptyProductState:CartAndProductInfo = {
  selectedProduct: null,
  cart: [],
};


export const productSlice:Slice = createSlice({
  name: 'product',
  initialState: EmptyProductState,
  reducers: {

    setSelectedProduct: (state, action) => {
      return {
        ...state,
        selectedProduct: action.payload
      }
    },

    addCartItem: (state, action) => {
      
      return {
        ...state,
        cart:  [...state.cart, action.payload ]
      }
    },

    removeCartItem: (state, action) => {
      let newCartState = state.cart.filter( ({item}:CartItemProps) => item.id !== action.payload );
      return {
        ...state,
        cart: newCartState

      }
    },

    increaseCartItemAmount: (state, action) => {
      let itemFound = state.cart.find( (cartItem:CartItemProps) => cartItem.item.id === action.payload );

      if( itemFound ){
          if (itemFound.amount < 5){
            itemFound.amount = itemFound.amount + 1;
          } 
      }
    },

    decreaseCartItemAmount: (state, action) => {
      let itemFound = state.cart.find( (cartItem:CartItemProps) => cartItem.item.id === action.payload );

      if( itemFound ){
          if (itemFound.amount > 1){
            itemFound.amount = itemFound.amount - 1;
          } 
      }
    },

    changeSize : (state, action) => {

    }

  }
});

export const { 
  setSelectedProduct, 
  addCartItem, 
  removeCartItem, 
  increaseCartItemAmount, 
  decreaseCartItemAmount 
} = productSlice.actions;

export default productSlice.reducer;