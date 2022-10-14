import { Box } from '@mui/material';
import { ProductInfo } from '../../../../models/products';
import ProductCard from './ProductCard';


export interface FilteredProductsProps{
    products: ProductInfo[];

}

const FilteredProducts = ({ products }:FilteredProductsProps) => {
  return (
    <Box sx={{ width:'80%', height:"100%", bgcolor:"rgba(255,255,255,.65)", display:"grid", gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap:3}}>
      {
          products.map((product:ProductInfo) => (
              <ProductCard key={ product.id } product={product} />
          ))
      }
    </Box>
  )
}
export default FilteredProducts