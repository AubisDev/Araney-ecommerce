import { useSelector, useDispatch } from "react-redux";
import { AppStore } from "../../../redux/store";
import { Box } from "@mui/material";
import { useCounter } from "../../../hooks/useCounter";
import { addCartItem } from "../../../redux/states/cart";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  isUserIsLoggedIn,
  askUserIfWantLogInAlert,
  sucessAlert,
} from "../../../utilities";
import { PublicRoutes } from "../../../models/routes";
import {
  ProductOptions,
  ProductImage,
  ProductDetails,
  SizeOptions,
  AddToCartButton,
} from "./components";

const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { amount, addOne, restOne } = useCounter(1);
  const [size, setSize] = useState("XS");
  const selectedItem = useSelector((store: AppStore) => store.product);
  const user = useSelector((store: AppStore) => store.user);
  const { category, image, title } = selectedItem;
  const isClothesCategory =
    category === "women's clothing" || category === "men's clothing";

  const handleAddItemToCart = async (itemAmount: number, size: string) => {
    if (!isUserIsLoggedIn(user.username)) {
      let userResponse = await askUserIfWantLogInAlert();
      if (userResponse) {
        navigate(`../${PublicRoutes.LOGIN}`, { replace: true });
      }
    } else {
      dispatch(
        addCartItem({
          item: selectedItem,
          amount: itemAmount,
          size,
        })
      );
      sucessAlert();
    }
  };

  const handleSizeChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSize(target.value);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: { xs: "auto", md: "100vh" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
      }}
    >
      <Box
        className="productShadow"
        sx={{
          width: { sx: "75%", md: "75%", lg: "60%" },
          minHeight: { xs: "auto", md: "80%" },
          height: { xs: "auto", md: "80%" },
          margin: "auto",
          borderRadius: 2,
          mt: 12,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
        }}
      >
        <ProductImage title={title} image={image} />
        <Box
          className="gradientBg productDetails"
          sx={{ width: { xs: "100%", md: "50%" } }}
        >
          <ProductDetails product={selectedItem} />
          {isClothesCategory && (
            <SizeOptions handleSizeChange={handleSizeChange} />
          )}

          <ProductOptions amount={amount} addOne={addOne} restOne={restOne} />
          <AddToCartButton
            handleAddItemToCart={handleAddItemToCart}
            size={size}
            amount={amount}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default Product;
