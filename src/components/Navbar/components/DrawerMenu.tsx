import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../../models";

const DrawerMenu = () => {
  const container =
    window !== undefined ? () => window.document.body : undefined;
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleCategoriesClick = () => {
    setMobileOpen(false);
    navigate(`${PublicRoutes.HOME}`, { replace: true });
    setTimeout(() => {
      document
        .getElementById("categories")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };

  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <MenuIcon />
      <Drawer
        onClick={handleDrawerToggle}
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 250 },
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <List>
            <ListItem disablePadding onClick={handleCategoriesClick}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText> Categories </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              onClick={() => {
                setMobileOpen(false);
                navigate(`${PublicRoutes.INVENTORY}`);
              }}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText> Inventory </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              onClick={() => {
                setMobileOpen(false);
                window.scroll(0, 0);
                navigate(`${PublicRoutes.ABOUT}`);
              }}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText> About us </ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider orientation="horizontal" variant="middle" flexItem />
            <ListItem
              disablePadding
              onClick={() => {
                setMobileOpen(false);
                window.scroll(0, 0);
                navigate(`${PublicRoutes.LOGIN}`);
              }}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText> Login </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              onClick={() => {
                setMobileOpen(false);
                window.scroll(0, 0);
                navigate(`${PublicRoutes.REGISTER}`);
              }}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText> Register </ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
export default DrawerMenu;
