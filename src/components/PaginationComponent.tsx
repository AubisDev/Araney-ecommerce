import { Pagination, Stack } from "@mui/material"

interface PaginationProps{
    count: number;
    page: number;
    handlePageJump: ( e:React.ChangeEvent<any> , page:number ) => void;
}

const PaginationComponent = ({count, page, handlePageJump}:PaginationProps) => {
  return (
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
  )
}
export default PaginationComponent