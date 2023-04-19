import { Badge, Typography, Button, Stack, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../../models";
import { UserNav } from ".";

const NavMenu = () => {
  const navigate = useNavigate();

  const handleCategoriesClick = () => {
    navigate(`${PublicRoutes.HOME}`, { replace: true });
    setTimeout(() => {
      document
        .getElementById("categories")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };

  return (
    <>
      <Stack direction="row" spacing={1}>
        <Button
          color="inherit"
          size="large"
          className="navButton"
          onClick={handleCategoriesClick}
        >
          Categories
        </Button>

        <Button
          color="inherit"
          size="large"
          className="navButton"
          onClick={() => {
            navigate(`${PublicRoutes.INVENTORY}`);
          }}
        >
          Inventory
        </Button>

        <Button
          color="inherit"
          size="large"
          className="navButton"
          onClick={() => {
            window.scroll(0, 0);
            navigate(`${PublicRoutes.ABOUT}`);
          }}
        >
          About us
        </Button>
      </Stack>
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ mx: 0, backgroundColor: "white" }}
      />
      <UserNav />
    </>
  );
};
export default NavMenu;
