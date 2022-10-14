import { Stack } from "@mui/material"
import { useState } from "react";
import { useSelector } from "react-redux";
import PaginationComponent from "../../../../components/PaginationComponent"
import { AppStore } from "../../../../redux/store";
import { handlePageJump } from '../../../../utilities/paginationUtils';
import { getCount, CheckoutItemPerPage,   } from "../../../Public";

interface CheckoutPaginationProps{
    jumpToPage: (page:number) => void;
}

const CheckoutPagination = ({jumpToPage}:CheckoutPaginationProps) => {
    const cartState = useSelector( (store: AppStore) => store.cart);
    const [page, setPage] = useState<number>(1);
    return (
        <Stack spacing={2} sx={{height:"32px", width:"100%", position:"absolute", bottom:10, display:"flex", justifyContent:"center", alignItems:"center",}}>
            <PaginationComponent  
                count={getCount( cartState, CheckoutItemPerPage)}
                page={page} 
                handlePageJump={(event) => handlePageJump({ event, page, setPage, jumpToPage })}
            />
        </Stack>
    )
}
export default CheckoutPagination