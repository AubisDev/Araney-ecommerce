import { useState } from 'react';
import { useFetch } from '../../../hooks';
import { ProductInfo } from '../../../models';
import { usePagination} from '../../../hooks/usePagination';
import { Box} from '@mui/material';
import FilteredProducts from './components/FilteredProducts';
import MenuList from './components/MenuList';
import PaginationComponent from '../../../components/PaginationComponent';
import { getCount, inventoryItemsPerPage, inventoryUrl as url } from './utilities/paginationUtils';
import { handlePageJump } from '../../../utilities/paginationUtils';



const Inventory = () => {
    
    const [page, setPage] = useState<number>(1);
    const { data: allProducts } = useFetch({url});
    const { jumpToPage, currentData } = usePagination(allProducts , inventoryItemsPerPage );
    const [filteredProducts, setFilteredProducts] = useState(currentData());
    //TODO: Filtrar productos

    const filterProductsBy = (filter:string) => {
        const newFilteredProductState: ProductInfo[] = filteredProducts.filter( (product: ProductInfo) => product.category === filter)
        setFilteredProducts( newFilteredProductState );
    }
    
    return (
    <Box sx={{ width:'90vw', height:"auto", margin:"auto",mt:12, display:"flex", flexDirection:"row", position:"relative",py:12 }}>   
        <MenuList/>
        <FilteredProducts products={currentData()}/>
        <PaginationComponent  
            count={getCount(allProducts)}
            page={page} 
            handlePageJump={(event) => handlePageJump({ event, page, setPage, jumpToPage })}
        />
    </Box>
  )
}
export default Inventory








