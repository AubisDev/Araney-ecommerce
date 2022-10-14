import { ProductInfo } from '../../../../models/products';
import ProductCard from './ProductCard';


export interface FilteredProductsProps{
    products: ProductInfo[];

}

const FilteredProducts = ({ products }:FilteredProductsProps) => {
  return (
    <>
        {
            products.map((product:ProductInfo) => (
                <ProductCard key={ product.id } product={product} />
            ))
        }
    </>
  )
}
export default FilteredProducts