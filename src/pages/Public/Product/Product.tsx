import { useSelector, useDispatch } from 'react-redux';
import { AppStore } from "../../../redux/store";
import { Box } from "@mui/material";
import { useCounter } from "../../../hooks/useCounter";
import { addCartItem } from "../../../redux/states/cart";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isUserIsLoggedIn, askUserIfWantLogInAlert, sucessAlert } from '../../../utilities';
import { PublicRoutes } from '../../../models/routes';
import ProductOptions from './components/ProductOptions';
import ProductImage from './components/ProductImage';
import ProductDetails from './components/ProductDetails';
import SizeOptions from './components/SizeOptions';
import AddToCartButton from './components/AddToCartButton';


const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { amount, addOne, restOne } = useCounter(1);
  const [size, setSize] = useState('XS');
  const selectedItem = useSelector( (store: AppStore) => store.product);
  const user = useSelector( (store: AppStore) => store.user);
  const { category, image, title } =  selectedItem;
  const isClothesCategory = category === "women's clothing" || category === "men's clothing" ;

  const handleAddItemToCart = async( itemAmount:number, size:string) => {
    if ( !isUserIsLoggedIn( user.username )){
      let userResponse = await askUserIfWantLogInAlert();
      if (userResponse){
        navigate(`../${PublicRoutes.LOGIN}`,{ replace: true});
      }
    }  
    else{
      dispatch( addCartItem({
        item: selectedItem,
        amount: itemAmount,
        size
      }))
      sucessAlert();
    }
  }

  const handleSizeChange = ({ target }:React.ChangeEvent<HTMLInputElement>) => { setSize( target.value) };

    return (
    <Box sx={{ width: '100vw', height: '100vh', display:'flex', alignItems:"center"}}>
      <Box 
        className="productShadow"
        sx={{ width: '60%', minHeight: '80%', height: '80%', margin:'auto', borderRadius:2, mt:12, display:"flex", flexDirection:'row'}}
      >
        <ProductImage  title={title} image={image}/> 
        <Box className="gradientBg productDetails" >
          <ProductDetails product={selectedItem}/>
          {isClothesCategory && <SizeOptions handleSizeChange={handleSizeChange} /> }

          <ProductOptions amount={amount} addOne={addOne} restOne={restOne} />
          <AddToCartButton handleAddItemToCart={handleAddItemToCart} size={size} amount={amount}/>
        </Box>
      </Box>
    </Box>
  )


}
export default Product