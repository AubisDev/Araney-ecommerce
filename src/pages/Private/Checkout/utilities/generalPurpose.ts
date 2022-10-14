import Swal from "sweetalert2"
import { CartInfo } from "../../../../models";


export const NotImplementedAlert = () => {
    return  Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'This function is not implemented yet',
      })
}


export const getTotalItems = (products: CartInfo[]) => {
  let totalItems = 0;
  for( let cartItem of products){
    totalItems += cartItem.amount
  }
  return totalItems.toFixed(0);
}

export const getTotalPrice = (products: CartInfo[]) => {
  let totalPrice = 0;
  for( let cartItem of products){
    totalPrice += (cartItem.amount * cartItem.item.price)
  }
  return totalPrice.toFixed(2);
}