import { Box, Button, Pagination, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { mockData } from "../../data/mookCartData";
import { usePagination } from "../../hooks/usePagination";
import { AppStore } from "../../redux/store";
import { useState } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { decreaseCartItemAmount, increaseCartItemAmount, removeCartItem } from "../../redux/states/cart";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { CartInfo } from "../../models";
import Swal from "sweetalert2";

export const Checkout = () => {
  const dispatch = useDispatch();
  const cartState = useSelector( (store: AppStore) => store.cart);
  const [page, setPage] = useState<number>(1);
  const itemsPerPage:number  = 3;
  const { jumpToPage, currentData } = usePagination(cartState , itemsPerPage );
  const count = Math.ceil( Object.values(cartState).length/itemsPerPage )

  const handlePageJump = ( e:React.ChangeEvent<any> , page:number ) => {
    setPage( page );
    jumpToPage( page );
  };

  const handleRemoveItem = (id:number) => dispatch( removeCartItem(id) );
 
  const handleIncreaseItemQuantity = ( id:number) => dispatch( increaseCartItemAmount(id) )

  const handleDecreaseItemQuantity = ( id:number) => dispatch( decreaseCartItemAmount(id) )

  const getTotalItems = () => {
    let totalItems = 0;
    for( let cartItem of currentData()){
      totalItems += cartItem.amount
    }
    return totalItems.toFixed(0);
  }

  const getTotalPrice = () => {
    let totalPrice = 0;
    for( let cartItem of currentData()){
      totalPrice += (cartItem.amount * cartItem.item.price)
    }
    return totalPrice.toFixed(2);
  }

  const handleCheckout = () => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'This function is not implemented yet',
    })
  }
``
  return (
    <Box sx={{ width: '100vw', height: '100vh', display:'flex', alignItems:"center"}}>
      <Box 
        sx={{ width: '90%', minHeight: '80%', height: '80%', margin:'auto', mt:12, display:"flex", flexDirection:'', justifyContent:"space-between"}}
      >``
        <Box 
          sx={{ width: '75%', maxHeight:'100%', position: 'relative', display:"flex", flexDirection:'column', border:2, borderColor:'gray', background: '#fff', boxShadow:4}}
        >
        <Box sx={{ width:'100%', height:"30px", display:"grid", gridTemplateColumns: 'repeat(7, minmax(0, 1fr))', color:'rgb(55 65 81)', py:1, borderBottom:2, borderColor:'rgba(128,128,128,0.25)'}}>
          <Typography variant='body1' align='left' sx={{ gridColumn: 'span 3 / span 3', pl:1 }}> Product Details</Typography>
          <Typography variant='body1' align='center' > Quantity</Typography>
          <Typography variant='body1' align='center' >Price by unit</Typography>
          <Typography variant='body1' align='center' > Total Price </Typography>
          <Typography variant='body1' align='center' > Options </Typography>
        </Box>
        <Stack sx={{ height:"calc(100% - 62px)" }} spacing={1}>
          {
            currentData().map( ({item, amount, size}: CartInfo) => (
              <Box key={item.id} sx={{ height: '29%', width:'100%', display:"grid", gridTemplateColumns: 'repeat(7, minmax(0, 1fr))', color:'black', borderBottom:1, borderColor:'rgba(128,128,128,0.25)'}}>
                <Box sx={{ gridColumn: 'span 3 / span 3', display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                  <img src={item.image} alt={item.title} style={{ height:'125px',width:"auto", paddingLeft:"8px", objectFit:"cover", margin:"auto"}}/>
                  <Box sx={{ display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center", width:"40%"}}>
                    <Typography variant="subtitle2" align='center'> {item.title} </Typography>
                    <Typography variant="subtitle2" align='center' color="darkslategray"> Size: {size} </Typography>
                  </Box>
                </Box >
                <Box sx={{ display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <Button
                    onClick={ () => handleIncreaseItemQuantity(item.id) }
                  >
                    <AddIcon/>
                  </Button>
                  <Typography variant="subtitle1" > {amount} </Typography>
                  <Button
                    onClick={ () => handleDecreaseItemQuantity(item.id) }
                  > 
                    <RemoveIcon/>
                  </Button>
                </Box>
                <Typography variant="subtitle1"  sx={{ display:"flex", alignItems:"center", justifyContent:"center" }}> ${item.price} </Typography>
                <Typography variant="subtitle1" sx={{ display:"flex", alignItems:"center", justifyContent:"center" }}> ${item.price * amount} </Typography>
                <Button
                  onClick={ () => handleRemoveItem(item.id) } 
                  sx={{ display:"flex", alignItems:"center", justifyContent:"center", margin:"auto"}}>
                  <HighlightOffIcon />
                </Button>
              </Box>
            ))
          }
        </Stack>
        <Stack spacing={2} sx={{height:"32px", width:"100%", position:"absolute", bottom:10, display:"flex", justifyContent:"center", alignItems:"center",}}>
          <Pagination  
            count={count}
            color="primary" 
            size='large'
            shape="rounded"
            variant="outlined"
            page={ page }
            onChange={ handlePageJump }
          />
        </Stack>
      </Box>
      
        <Box 
          sx={{ width: '20%', height:'80%', display:"flex", alignItems:"center", margin:"auto", flexDirection:'column', position:"relative", border:2, borderColor:'gray', background:"#fff", boxShadow:3}}
        >
          <Typography variant="h5" fontFamily='Dosis' color='black' fontWeight={600} py={1.5} width={'100%'} borderBottom={2} borderColor={'rgba(176,176,176,0.40)'} align='center'>Order Summary</Typography>
          
          
          <Typography variant="h6" fontFamily='Dosis' color='black' fontWeight={600} py={1.5} >Total items:</Typography>
          <Typography variant="h6" fontFamily='Dosis' color='black' fontWeight={600} py={1.5} >
            {getTotalItems()}
            <i className="fa-solid fa-cubes" style={{ paddingLeft:"6px" }}></i>
          </Typography>

          <Typography variant="h6" fontFamily='Dosis' color='black' fontWeight={600} py={1.5} >Total unique items:</Typography>
          <Typography variant="h6" fontFamily='Dosis' color='black' fontWeight={600} py={1.5} >
            {currentData().length}
            <i className="fa-sharp fa-solid fa-cube" style={{ paddingLeft:"6px" }}></i>
          </Typography>
          
          <Typography variant="h6" fontFamily='Dosis' color='black' fontWeight={600} py={1.5} >Total amount to pay</Typography>
          <Typography variant="h6" fontFamily='Dosis' color='black' fontWeight={600} py={1.5} letterSpacing={2}>${getTotalPrice()}</Typography>

          <Button 
            id="checkoutBtn" 
            fullWidth
            variant="contained"  
            color='inherit'  
            sx={{ py:1.5, backgroundColor:'secondary.dark', position:'absolute', bottom:0 }}
            onClick={ handleCheckout }
            >
              CHECKOUT
            </Button>

          
        </Box>
      </Box>
      
    </Box>
  )
}

export default Checkout;