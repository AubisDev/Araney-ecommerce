import { Box, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import ChairIcon from "@mui/icons-material/Chair";
import LaptopIcon from "@mui/icons-material/Laptop";
import ToysIcon from "@mui/icons-material/Toys";
import DiamondIcon from "@mui/icons-material/Diamond";
import { useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../../../models";

const MenuListCategories = () => {
  const navigate = useNavigate();

  const handleClick = (category: string) =>
    navigate(`/${PublicRoutes.INVENTORY}/${category}`, { replace: true });
  return (
    <Box
      sx={{
        display: { xs: "grid", md: "flex" },
        flexDirection: "column",
        width: { xs: "100%", md: "180px" },
        gridTemplateColumns: {
          xs: "repeat(2, minmax(0, 1fr))",
          sm: "repeat(3, minmax(0, 1fr))",
        },
      }}
    >
      <ListItemButton
        sx={{ pl: { xs: 2, sm: 5 } }}
        onClick={() => handleClick("men's clothing")}
      >
        <ListItemIcon sx={{ minWidth: 30 }}>
          <ManIcon />
        </ListItemIcon>
        <ListItemText primary="Men" />
      </ListItemButton>
      <ListItemButton
        sx={{ pl: { xs: 2, sm: 5 } }}
        onClick={() => handleClick("women")}
      >
        <ListItemIcon sx={{ minWidth: 30 }}>
          <WomanIcon />
        </ListItemIcon>
        <ListItemText primary="Women" />
      </ListItemButton>
      <ListItemButton
        sx={{ pl: { xs: 2, sm: 5 } }}
        onClick={() => handleClick("kids")}
      >
        <ListItemIcon sx={{ minWidth: 30 }}>
          <ToysIcon />
        </ListItemIcon>
        <ListItemText primary="Kids" />
      </ListItemButton>
      <ListItemButton
        sx={{ pl: { xs: 2, sm: 5 } }}
        onClick={() => handleClick("furnitures")}
      >
        <ListItemIcon sx={{ minWidth: 30 }}>
          <ChairIcon />
        </ListItemIcon>
        <ListItemText primary="Furnitures" />
      </ListItemButton>
      <ListItemButton
        sx={{ pl: { xs: 2, sm: 5 } }}
        onClick={() => handleClick("electronics")}
      >
        <ListItemIcon sx={{ minWidth: 30 }}>
          <LaptopIcon />
        </ListItemIcon>
        <ListItemText primary="Electronics" />
      </ListItemButton>
      <ListItemButton
        sx={{ pl: { xs: 2, sm: 5 } }}
        onClick={() => handleClick("jewelery")}
      >
        <ListItemIcon sx={{ minWidth: 30 }}>
          <DiamondIcon />
        </ListItemIcon>
        <ListItemText primary="Jewelry" />
      </ListItemButton>
    </Box>
  );
};
export default MenuListCategories;
