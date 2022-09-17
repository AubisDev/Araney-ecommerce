import { Box, Grid, Skeleton, Typography } from "@mui/material"
import { useFetch } from '../../../../hooks/useFetch';
import { ProductInfo } from '../../../../models/products';
import StarIcon from '@mui/icons-material/Star';

export const FeaturedProducts = () => {

    const { data: featuredProductsData } = useFetch('https://fakestoreapi.com/products')
    return (
    <Box sx={{ width: '100vw', minHeight:"90vh", height:"auto", mt:12, color:'warning.dark', background:'rgba(255,255,255,0.75)'}}>
        <Box sx={{ width: '80%', display:'flex', flexDirection:'column', margin:'auto' }}>
            <Typography variant='h4' align='left' component='h3' sx={{ py:2, borderBottom:'2px solid rgba(148,148,148,.25)' }}>
                Featured Products
            </Typography>
            <Grid container direction='row' spacing={3} sx={{p:3}} >
            {
                featuredProductsData.map(({id, image, price, rating, title }:ProductInfo) => (
                    <Grid key={id} item xs={4} lg={2.4}>
                        <Box className="featuredProduct">
                            { featuredProductsData ? <img  src={image} alt={title} style={{ objectFit:'cover', width:'100%',height:"200px", position: 'relative'}} /> : <Skeleton variant="rectangular" height='200px' width='200px' /> }
                            <Typography variant='subtitle2' align='left' component='p' sx={{ display:"flex", flexDirection:'column', pt:0.5, color:"black"}} >
                                {title}
                                <Typography variant='subtitle1' align='center' component='span' sx={{ display:"flex", flexDirection:'row', alignItems:'center',color:"warning.dark"}}>
                                    {rating.rate < 4 ? 4.2 : rating.rate} 
                                    <StarIcon fontSize="small"/>
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
