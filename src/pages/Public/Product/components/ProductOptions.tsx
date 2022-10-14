import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import { useCounter } from '../../../../hooks/useCounter';


interface ProductOptionsProps{
    amount: number;
    addOne: () => void;
    restOne: () => void;
}


const ProductOptions = ({amount, addOne, restOne}:ProductOptionsProps) => {
    
    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: 'center' }}>
                <Button
                    variant="contained"
                    color="warning"
                    className="amountBtn"
                    sx={{ boxShadow: 3 }}
                    onClick={addOne}
                >
                    <AddIcon fontSize="medium" />
                </Button>

                <Box sx={{ boxShadow: 3 }} className="amount">{amount}</Box>

                <Button
                    variant="contained"
                    color="warning"
                    className="amountBtn"
                    sx={{ boxShadow: 3 }}
                    onClick={restOne}
                >
                    <RemoveIcon fontSize="medium" />
                </Button>
            </Box>
            <Typography variant='subtitle2' fontWeight={300} fontFamily={'Dosis'} align='center'> 5 Items max</Typography>
        </>
    )
}
    
export default ProductOptions