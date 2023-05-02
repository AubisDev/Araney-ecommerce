import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { usePagination } from "../../../hooks/usePagination";
import { AppStore } from "../../../redux/store";
import { CheckoutItemPerPage } from "../../Public";
import {
  PurchaseDetails,
  CheckoutDetails,
  CheckoutDetailsTitles,
  CheckoutPagination,
} from "./components";
import { CartInfo } from "../../../models";

export const Checkout = () => {
  const cartState: CartInfo[] = useSelector((store: AppStore) => store.cart);
  const { jumpToPage, getPageData } = usePagination(
    cartState,
    CheckoutItemPerPage
  );

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "90%",
          minHeight: "80%",
          height: "80%",
          margin: "auto",
          mt: 12,
          display: "flex",
          flexDirection: "",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "75%",
            maxHeight: "100%",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            border: 2,
            borderColor: "gray",
            background: "#fff",
            boxShadow: 4,
          }}
        >
          <CheckoutDetailsTitles />
          <CheckoutDetails products={getPageData() as CartInfo[]} />
          <CheckoutPagination jumpToPage={jumpToPage} />
        </Box>
        <PurchaseDetails />
      </Box>
    </Box>
  );
};

export default Checkout;
