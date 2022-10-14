import { Typography, Box } from "@mui/material"
import { title } from "process"
import StarIcon from '@mui/icons-material/Star';
import { ProductInfo } from '../../../../models/products';

interface ProductDetailsProps{
    product: ProductInfo;
}

const ProductDetails = ({ product }:ProductDetailsProps) => {
    const { title, description, price, rating } = product;
    return (
        <>
         <Typography variant="h5" fontWeight={400} fontFamily={'Dosis'}  sx={{width:"80%", m:"0 auto", pt:2, pb:2}}> {title} </Typography>
          <Box sx={{ display:"flex", flexDirection:"row"}}>
            <Typography variant="h4" fontWeight={400} fontFamily={'Dosis'} sx={{width:"80%", m:"0 auto", ml:8, display:"flex", justifyContent:'center'}}> {rating?.rate} <StarIcon sx={{lineHeight:0, height:"auto", color:"warning.light"}}/> </Typography>
            <Typography variant="h4" fontWeight={400} fontFamily={'Dosis'} sx={{width:"80%", m:"0 auto", ml:8}}> {`$${price}`} </Typography>
          </Box>
          <Typography variant="subtitle1" fontWeight={400} fontFamily={'Dosis'} align='center' sx={{width:"80%", m:"0 auto"}}> {description} </Typography>

        </>
    )
}
export default ProductDetails