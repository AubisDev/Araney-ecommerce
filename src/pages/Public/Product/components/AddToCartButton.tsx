import { Button } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

interface AddCartButtonProps{
    amount: number;
    size: string;
    handleAddItemToCart: (amount:number, size:string) => void ;
}

const AddToCartButton = ({amount, size, handleAddItemToCart}:AddCartButtonProps) => {
    return (
        <Button
            color='inherit' 
            sx={{ fontFamily: 'Dosis', textTransform:"none", fontSize:"18px" }}
            onClick={ ()  => handleAddItemToCart(amount, size) }
        >
            Add to cart 
            <AddShoppingCartIcon sx={{ pl:1 }}/>
        </Button>   
    )
}
export default AddToCartButton