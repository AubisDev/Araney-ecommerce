import { Stack, Badge, Typography, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { isUserChecked, userFirebaseLogout } from "../../../firebase";
import { PrivateRoutes } from "../../../models";
import { AppStore } from "../../../redux/store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { UserNav } from ".";

const userNav = () => {
  const { token, username } = useSelector((store: AppStore) => store.user);
  const cartState = useSelector((store: AppStore) => store.cart);
  const dispatch = useDispatch();
  const handleLogout = () => userFirebaseLogout({ dispatch });
  const navigate = useNavigate();

  const handleCartClick = () => {
    window.scroll(0, 0);
    navigate(`/${PrivateRoutes.CHECKOUT}`);
  };

  useEffect(() => {
    isUserChecked({ dispatch, navigate });
  }, []);

  return (
    <Stack direction="row" spacing={1}>
      {token !== "" && username !== "" ? (
        <>
          <Badge
            badgeContent={Object.values(cartState).length}
            color="primary"
            onClick={handleCartClick}
            sx={{ cursor: "pointer" }}
          >
            <ShoppingCartIcon color="action" />
          </Badge>

          <Typography
            variant="button"
            color="inherit"
            align="center"
            sx={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "15px",
            }}
          >
            Welcome,{" "}
            <span style={{ color: "#0288d1", paddingLeft: "5px" }}>
              {username}
            </span>
          </Typography>

          <Button
            color="inherit"
            size="large"
            className="navButton"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </>
      ) : (
        <>
          <Button
            color="inherit"
            size="large"
            className="navButton"
            onClick={() => navigate("/register")}
          >
            Sign-up
          </Button>

          <Button
            color="inherit"
            size="large"
            className="navButton"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </>
      )}
    </Stack>
  );
};
export default userNav;
