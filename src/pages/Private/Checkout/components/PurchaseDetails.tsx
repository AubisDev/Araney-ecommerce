import { Box, Typography, Button } from "@mui/material";
import { CartInfo } from "../../../../models";
import {
  getTotalItems,
  getTotalPrice,
  NotImplementedAlert,
} from "../utilities/generalPurpose";
import { useSelector } from "react-redux";
import { AppStore } from "../../../../redux/store";



const PurchaseDetails = () => {
  const handleCheckout = () => NotImplementedAlert();
  const { cart } = useSelector((store:AppStore) => store);

  
  return (
    <Box
      sx={{
        width: "20%",
        height: "80%",
        display: "flex",
        alignItems: "center",
        margin: "auto",
        flexDirection: "column",
        position: "relative",
        border: 2,
        borderColor: "gray",
        background: "#fff",
        boxShadow: 3,
      }}
    >
      <Typography
        variant="h5"
        fontFamily="Dosis"
        color="black"
        fontWeight={600}
        py={1.5}
        width={"100%"}
        borderBottom={2}
        borderColor={"rgba(176,176,176,0.40)"}
        align="center"
      >
        Order Summary
      </Typography>
      <Typography
        variant="h6"
        fontFamily="Dosis"
        color="black"
        fontWeight={600}
        py={1.5}
      >
        Total items:
      </Typography>
      <Typography
        variant="h6"
        fontFamily="Dosis"
        color="black"
        fontWeight={600}
        py={1.5}
      >
        {getTotalItems(cart)}
        <i className="fa-solid fa-cubes" style={{ paddingLeft: "6px" }}></i>
      </Typography>

      <Typography
        variant="h6"
        fontFamily="Dosis"
        color="black"
        fontWeight={600}
        py={1.5}
      >
        Total unique items:
      </Typography>
      <Typography
        variant="h6"
        fontFamily="Dosis"
        color="black"
        fontWeight={600}
        py={1.5}
      >
        {cart.length}
        <i
          className="fa-sharp fa-solid fa-cube"
          style={{ paddingLeft: "6px" }}
        ></i>
      </Typography>

      <Typography
        variant="h6"
        fontFamily="Dosis"
        color="black"
        fontWeight={600}
        py={1.5}
      >
        Total amount to pay
      </Typography>
      <Typography
        variant="h6"
        fontFamily="Dosis"
        color="black"
        fontWeight={600}
        py={1.5}
        letterSpacing={2}
      >
        ${getTotalPrice(cart)}
      </Typography>

      <Button
        id="checkoutBtn"
        fullWidth
        variant="contained"
        color="inherit"
        sx={{
          backgroundColor: "secondary.dark",
          position: "absolute",
          bottom: 0,
          borderRadius: "0",
          py: 2,
        }}
        onClick={handleCheckout}
      >
        CHECKOUT
      </Button>
    </Box>
  );
};
export default PurchaseDetails;
