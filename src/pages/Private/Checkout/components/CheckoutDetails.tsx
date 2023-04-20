import { Stack, Box, Typography, Button } from "@mui/material";
import { CartInfo } from "../../../../models";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useDispatch } from "react-redux";
import {
  removeCartItem,
  increaseCartItemAmount,
  decreaseCartItemAmount,
} from "../../../../redux/states/cart";

interface CheckoutDetailsProps {
  products: CartInfo[];
}

const CheckoutDetails = ({ products }: CheckoutDetailsProps) => {
  const dispatch = useDispatch();
  const handleRemoveItem = (id: number) => dispatch(removeCartItem(id));
  const handleIncreaseItemQuantity = (id: number) =>
    dispatch(increaseCartItemAmount(id));
  const handleDecreaseItemQuantity = (id: number) =>
    dispatch(decreaseCartItemAmount(id));

  return (
    <Stack sx={{ height: "calc(100% - 62px)" }} spacing={1}>
      {products?.map(({ item, amount, size }: CartInfo) => (
        <Box
          key={item.id}
          sx={{
            height: "29%",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
            color: "black",
            borderBottom: 1,
            borderColor: "rgba(128,128,128,0.25)",
          }}
        >
          <Box
            sx={{
              gridColumn: "span 3 / span 3",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                height: "125px",
                width: "auto",
                paddingLeft: "8px",
                objectFit: "cover",
                margin: "auto",
              }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                width: "40%",
              }}
            >
              <Typography variant="subtitle2" align="center">
                {" "}
                {item.title}{" "}
              </Typography>
              <Typography
                variant="subtitle2"
                align="center"
                color="darkslategray"
              >
                {" "}
                Size: {size}{" "}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button onClick={() => handleIncreaseItemQuantity(item.id)}>
              <AddIcon />
            </Button>
            <Typography variant="subtitle1"> {amount} </Typography>
            <Button onClick={() => handleDecreaseItemQuantity(item.id)}>
              <RemoveIcon />
            </Button>
          </Box>
          <Typography
            variant="subtitle1"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {" "}
            ${item.price}{" "}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {" "}
            ${item.price * amount}{" "}
          </Typography>
          <Button
            onClick={() => handleRemoveItem(item.id)}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "auto",
            }}
          >
            <HighlightOffIcon />
          </Button>
        </Box>
      ))}
    </Stack>
  );
};
export default CheckoutDetails;
