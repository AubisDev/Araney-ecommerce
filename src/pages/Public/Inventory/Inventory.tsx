import { useState } from 'react';
import { useFetch } from '../../../hooks';
import { ProductInfo } from '../../../models';
import { usePagination} from '../../../hooks/usePagination';
import { Box} from '@mui/material';
import FilteredProducts from './components/FilteredProducts';
import MenuListContainer from './components/MenuListContainer';
import PaginationComponent from '../../../components/PaginationComponent';



const Inventory = (category: string) => {
    
    const url = 'https://fakestoreapi.com/products';
    const { data: allProducts } = useFetch({url});
    const [page, setPage] = useState<number>(1);
    const itemsPerPage:number = 12;
    const { jumpToPage, currentData } = usePagination(allProducts , itemsPerPage );
    const count:number = Math.ceil( Object.values(allProducts).length/itemsPerPage )

    const [filteredProducts, setFilteredProducts] = useState(currentData());

    const filterProductsBy = (filter:string) => {
        const newFilteredProductState: ProductInfo[] = filteredProducts.filter( (product: ProductInfo) => product.category === filter)
        setFilteredProducts( newFilteredProductState );
    }
    
    //!Refactorizar ya que se usa aqui y en checkout
    const handlePageJump = ( e:React.ChangeEvent<any> , page:number ) => {
        setPage( page );
        jumpToPage( page );
    };

  return (
    <Box sx={{ width:'90vw', height:"auto", margin:"auto",mt:12, display:"flex", flexDirection:"row", position:"relative",py:12 }}>   
        <Box sx={{ width:'20%', height:"100%", bgcolor:"background.paper" }}>
            <MenuListContainer/>
        </Box>

        <Box sx={{ width:'80%', height:"100%", bgcolor:"rgba(255,255,255,.65)", display:"grid", gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap:3}}>
            <FilteredProducts products={filteredProducts}/>
        </Box>

       <PaginationComponent  count={count} page={page} handlePageJump={handlePageJump}/>
    </Box>
  )
}
export default Inventory