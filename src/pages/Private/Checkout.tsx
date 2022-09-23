import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { mockData } from "../../data/mookCartData";
import { usePagination } from "../../hooks/usePagination";
import { AppStore } from "../../redux/store";
import { useState } from 'react';

export const Checkout = () => {

  const cart = useSelector( (store: AppStore) => store.product.cart);
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 3;
  const { maxPage, jumpToPage, currentData, currentPage } = usePagination( mockData, itemsPerPage );
  const count = Math.ceil( mockData.length/itemsPerPage )

  const handlePageJump = ( e:React.ChangeEvent<any> , page:number ) => {
    setPage( page );
    jumpToPage( page );
  };

  return (
    <Box sx={{ width: '100vw', height: '100vh', display:'flex', alignItems:"center"}}>
      <Box 
        sx={{ width: '90%', minHeight: '80%', height: '80%', margin:'auto', mt:12, display:"flex", flexDirection:'', justifyContent:"space-between"}}
      >
        <Box 
          sx={{ width: '75%', maxHeight:'100%', position: 'relative', display:"flex", flexDirection:'column', border:2, borderColor:'gray', background: '#fff', boxShadow:4}}
        >
        <Box sx={{ width:'100%', height:"30px", display:"grid", gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', color:'rgb(55 65 81)', py:1, borderBottom:2, borderColor:'rgba(128,128,128,0.25)'}}>
          <Typography variant='body1' align='left' sx={{ gridColumn: 'span 2 / span 2', pl:2 }}> Product Details</Typography>
          <Typography variant='body1' align='center' sx={{ pl:2 }} > Quantity</Typography>
          <Typography variant='body1' align='center' sx={{ pl:2 }}>Price by unit</Typography>
          <Typography variant='body1' align='center' sx={{ pl:2 }}> Total Price </Typography>
        </Box>
        <Stack sx={{ height:"calc(100% - 62px)" }} spacing={1}>
          {
            // cart.map( cartItem => {
            //   console.log(cartItem);
            //   return (
            //     <p>a</p>
            //   )
            // })
            currentData().map( (cartItem: any) => 
              <Box key={cartItem.id} sx={{  height: '29%', width:'100%', display:"grid", gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', color:'black', borderBottom:1, borderColor:'rgba(128,128,128,0.25)'}}>
                <Box sx={{ gridColumn: 'span 2 / span 2', display:"flex", flexDirection:"row", alignItems:"center"}}>
                  <img src={cartItem.category.image} alt={cartItem.title} style={{ height:'145px', minWidth:'60%', paddingLeft:"8px", objectFit:"cover"}}/>
                  <Typography variant="subtitle1" align='center'  sx={{width:"40%"}}> {cartItem.title} </Typography>
                </Box>
                <Typography variant="subtitle1" sx={{ display:"flex", alignItems:"center", justifyContent:"center" }}> {cartItem.id} </Typography>
                <Typography variant="subtitle1"  sx={{ display:"flex", alignItems:"center", justifyContent:"center" }}> ${cartItem.price} </Typography>
                <Typography variant="subtitle1" sx={{ display:"flex", alignItems:"center", justifyContent:"center" }}> ${cartItem.price * cartItem.id} </Typography>
              </Box>
            )
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
          sx={{ width: '20%', height:'100%', display:"flex", flexDirection:'column', border:2, borderColor:'gray', background:"#fff", boxShadow:3}}
        >
          
        </Box>
      </Box>
      
    </Box>
  )
}

export default Checkout;