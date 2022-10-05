import { useSelector, useDispatch } from 'react-redux';
import { AppStore } from "../../redux/store";
import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import { useCounter } from "../../hooks/useCounter";
import { addCartItem } from "../../redux/states/cart";
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { amount, addOne, restOne } = useCounter(1);
  const [size, setSize] = useState('XS');
  const selectedItem  = useSelector( (store: AppStore) => store.product);
  const user = useSelector( (store: AppStore) => store.user);
  const { price, description, category, image, rating, title } =  selectedItem;

  const handleAddItemToCart = ( itemAmount:number, size:string) => {

    if( !user.username ){
      Swal.fire({
        title: 'You need to be Logged in',
        text: "Do you want to log into you account?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ff9800',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Take me to login page'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate( '/login')
        }
      })
    }

    Swal.fire(
      'Item added to cart!',
      'Added successfully',
      'success'
    )

    dispatch( addCartItem({
      item: selectedItem,
      amount: itemAmount,
      size
    }))
    
  }

  const handleSizeChange = ({ target }:React.ChangeEvent<HTMLInputElement>) => { setSize( target.value) }

    return (
    <Box sx={{ width: '100vw', height: '100vh', display:'flex', alignItems:"center"}}>
      <Box 
        className="productShadow"
        sx={{ width: '60%', minHeight: '80%', height: '80%', margin:'auto', borderRadius:2, mt:12, display:"flex", flexDirection:'row'}}
      >
        <Box sx={{ width: '50%', minHeight: '100%', background:'white', position:"relative"}}>
          <img src={image} alt={title} style={{ width:'80%', position:"absolute", top:0, bottom:0, left:0, right:0, margin: 'auto'}}  />
        </Box>

        <Box 
          className="gradientBg"
          sx={{ width: '50%', minHeight: '100%', background:'white', position:"relative", color:"inherit", display:"flex", flexDirection:"column", justifyContent:'space-evenly' }}
        >
          <Typography variant="h5" fontWeight={400} fontFamily={'Dosis'}  sx={{width:"80%", m:"0 auto", pt:2, pb:2}}> {title} </Typography>
          <Box sx={{ display:"flex", flexDirection:"row"}}>
            <Typography variant="h4" fontWeight={400} fontFamily={'Dosis'} sx={{width:"80%", m:"0 auto", ml:8, display:"flex", justifyContent:'center'}}> {rating?.rate} <StarIcon sx={{lineHeight:0, height:"auto", color:"warning.light"}}/> </Typography>
            <Typography variant="h4" fontWeight={400} fontFamily={'Dosis'} sx={{width:"80%", m:"0 auto", ml:8}}> {`$${price}`} </Typography>
          </Box>
          <Typography variant="subtitle1" fontWeight={400} fontFamily={'Dosis'} align='center' sx={{width:"80%", m:"0 auto"}}> {description} </Typography>

          {
            category === "women's clothing" && (
              <FormControl  sx={{ width:"80%", display:"flex", justifyContent:'center', alignContent:"center", margin:"0 auto" }}>
                <FormLabel id="row-radio-buttons-group-label" sx={{ color:"inherit", fontSize:18, textAlign:"center" }}>
                  Size
                </FormLabel>
                <RadioGroup 
                  onChange={(e) => handleSizeChange( e )}
                  row
                  aria-labelledby="row-radio-buttons-group-label"
                  name="radio-buttons-group"
                  sx={{ display:"flex", justifyContent:"center"}}
                  defaultValue='XS'
                >
                  <FormControlLabel value="XS" control={<Radio color='default' />} label="XS" />
                  <FormControlLabel value="S" control={<Radio color='default' />} label="S" />
                  <FormControlLabel value="M" control={<Radio color='default' />} label="M" />
                  <FormControlLabel value="L" control={<Radio color='default' />} label="L" />
                </RadioGroup>
              </FormControl>
            )
          }

          <Box sx={{ display:"flex", flexDirection:"row", justifyContent:'center' }}>
            <Button 
              variant="contained" 
              color="warning" 
              className="amountBtn" 
              sx={{boxShadow: 3}}
              onClick={ addOne }
            >
              <AddIcon fontSize="medium"/>
            </Button>

              <Box sx={{ boxShadow: 3}} className="amount">{amount}</Box>

            <Button 
              variant="contained" 
              color="warning" 
              className="amountBtn" 
              sx={{boxShadow: 3}}
              onClick={ restOne }
            >
              <RemoveIcon fontSize="medium"/>
            </Button>
          </Box>
          <Typography variant='subtitle2' fontWeight={300} fontFamily={'Dosis'} align='center' > 5 Items max</Typography>

          <Button
            color='inherit' 
            sx={{ fontFamily: 'Dosis', textTransform:"none", fontSize:"18px" }}
            onClick={ ()  => handleAddItemToCart(amount, size) }
          >
            Add to cart 
            <AddShoppingCartIcon sx={{ pl:1 }}/>
          </Button>         
        </Box>
      </Box>
    </Box>
  )


}
export default Product