import { AppBar, Toolbar, Box, Container, Drawer } from "@mui/material";
import { TitleLogo, NavMenu, UserNav } from "./components";
import { useMediaQuery } from "react-responsive";
import DrawerMenu from "./components/DrawerMenu";

export const Navbar = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 900px)" });
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ height: "10vh", backgroundColor: "warning.light" }}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <TitleLogo />
          {isTabletOrMobile ? <DrawerMenu /> : <NavMenu />}
        </Toolbar>
      </AppBar>
      <Container fixed></Container>
    </Box>
  );
};
