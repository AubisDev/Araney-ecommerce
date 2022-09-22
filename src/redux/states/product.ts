import { createSlice, Slice } from '@reduxjs/toolkit';
import { CartProps, ProductInfo } from '../../models/products';
// import { getLocalStorage } from "../../utilities/localstorage";


export interface CartAndProductInfo {
  selectedProduct: ProductInfo | null;
  cart: CartProps[];
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
      let newCartState = state?.cart.items.filter( (item:ProductInfo) => item.id !== action.payload );
      return {
        ...state,
        cart: {
          items: newCartState
        }
      }
    },

    increaseCartItemAmount : (state) => {
      let increasedAmount = state.cart.amount;
        if( state.cart.amount < 5){
          increasedAmount++;
          return {
            ...state,
            cart:{
              amount: increasedAmount
            }
          }
      }
      return state        
    },

    decreaseCartItemAmount: (state) => {
      let decreasedAmount = state.cart.amount;
      if( state.cart.amount > 1){
        decreasedAmount++;
        return {
          ...state,
          cart:{
            amount: decreasedAmount
          }
        }
      }
      return state
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