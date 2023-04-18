import { Box, List, ListSubheader } from "@mui/material";
import MenuListCategories from "./MenuListCategories";

export const MenuList = () => {
  return (
    <Box
      sx={{
        width: { xs: "90%", md: "20%" },
        height: "100%",
        bgcolor: "background.paper",
        border: "2px solid rgba(255,152,0,0.4)",
        m: { xs: "auto", md: 0 },
        display: "flex",
        flexDiretion: "column",
      }}
    >
      <List
        sx={{
          width: "100%",
          minWidth: 150,
          bgcolor: "background.paper",
          color: "gray",
          display: { xs: "grid", md: "flex" },
          py: { xs: "0", lg: "8px" },
          flexDirection: "column",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <MenuListCategories />
      </List>
    </Box>
  );
};
export default MenuList;
