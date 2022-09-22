import { useSelector } from "react-redux";
import { AppStore } from "../../redux/store";

export const Checkout = () => {

  const cart = useSelector( (store: AppStore) => store.product);

  return (
    <div>Checkout</div>
  )
}

export default Checkout;