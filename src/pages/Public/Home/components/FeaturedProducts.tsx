import { Box, Grid, Skeleton, Typography } from "@mui/material"
import { ProductInfo } from '../../../../models/products';
import StarIcon from '@mui/icons-material/Star';
import { useFetch } from "../../../../hooks";
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from "../../../../models";
import { useDispatch } from 'react-redux';
import { setSelectedProduct } from "../../../../redux/states/product";



export const FeaturedProducts = () => {
    const url = 'https://fakestoreapi.com/products';
    const { data: featuredProductsData } = useFetch({url, itemsAmount:10});
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleProductClick = (featProduct:ProductInfo) => {
        const { title, id } = featProduct;
        dispatch( setSelectedProduct(featProduct));
        navigate(`/${PublicRoutes.PRODUCT}/${title?.replaceAll(' ','-')}/${id}`)
        
    }

    return (
    <Box sx={{ width: '100vw', minHeight:"90vh", height:"auto", mt:12, color:'warning.dark', background:'rgba(255,255,255,0.75)'}}>
        <Box sx={{ width: '80%', display:'flex', flexDirection:'column', margin:'auto' }}>
            <Typography variant='h4' align='left' component='h3' sx={{ py:2, borderBottom:'2px solid rgba(148,148,148,.25)' }}>
                Featured Products
            </Typography>
            <Grid container direction='row' spacing={3} sx={{p:3}} >
            {
                featuredProductsData.map((featProduct:ProductInfo) => (
                    <Grid key={featProduct.id} item xs={4} lg={2.4}>
                        <Box 
                            className="featuredProduct"
                            onClick={() => handleProductClick( featProduct ) }
                        >
                            { featuredProductsData ? <img  src={featProduct.image} alt={featProduct.title} style={{ objectFit:'cover', width:'100%',height:"200px", position: 'relative'}} /> : <Skeleton variant="rectangular" height='200px' width='200px' /> }
                            <Typography variant='subtitle2' align='left' component='p' sx={{ display:"flex", flexDirection:'column', pt:0.5, color:"black"}} >
                                {featProduct.title}
                                <Typography variant='subtitle1' align='center' component='span' sx={{ display:"flex", flexDirection:'row', alignItems:'center',color:"warning.dark", justifyContent:'space-between'}}>
                                    {`$${featProduct.price}`}
                                    <span style={{ display:'flex', alignItems:'center'}}>
                                        {featProduct.rating.rate < 4 ? 4.2 : featProduct.rating.rate} 
                                        <StarIcon fontSize="small"/>
                                    </span>
                                    
                                </Typography>
                            </Typography>
                        </Box>
                    </Grid>
                ))
            }
            </Grid>
        </Box>
    </Box>
  )
}
