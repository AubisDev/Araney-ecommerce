import { createSlice, Slice } from '@reduxjs/toolkit';
import { CartInfo } from '../../models';


const EmptyCartState: CartInfo[] = [];
const maxItemAmount = 5; 
const minItemAmount = 1; 


const checkIfItemExist = (state:CartInfo[] , id:number) => {
  let itemFound = state.find( (cartItem:CartInfo) => cartItem.item.id === id );
  return itemFound
}

export const cartSlice:Slice = createSlice({
  name: 'cart',
  initialState: EmptyCartState,
  reducers: {
    
    addCartItem: (state, action) => {
      const foundItem = checkIfItemExist(state, action.payload.item.id);
      if( foundItem ){
        let amountSum = foundItem.amount + action.payload.amount;
        foundItem.amount = amountSum < maxItemAmount ? amountSum : maxItemAmount;
        return
      }
      return [...state, action.payload]
    },

    removeCartItem: (state, action) => {
      let newCartState = state.filter( ({item}:CartInfo) => item.id !== action.payload );
      return newCartState;
    },

    increaseCartItemAmount: (state, action) => {
      let itemFound = state.find( (cartItem:CartInfo) => cartItem.item.id === action.payload );

      if( itemFound ){
          if (itemFound.amount < maxItemAmount){
            itemFound.amount = itemFound.amount + 1;
          } 
      }
    },

    decreaseCartItemAmount: (state, action) => {
      let itemFound = state.find( (cartItem:CartInfo) => cartItem.item.id === action.payload );

      if( itemFound ){
          if (itemFound.amount > minItemAmount){
            itemFound.amount = itemFound.amount - 1;
          } 
      }
    },

    changeSize : (state, action) => {

    }

  }
});

export const { 
  addCartItem, 
  removeCartItem, 
  increaseCartItemAmount, 
  decreaseCartItemAmount 
} = cartSlice.actions;

export default cartSlice.reducer;