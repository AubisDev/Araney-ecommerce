import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
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
    <>
      <ListItemButton
        sx={{ pl: 5 }}
        onClick={() => handleClick("men's clothing")}
      >
        <ListItemIcon>
          <ManIcon />
        </ListItemIcon>
        <ListItemText primary="Men" />
      </ListItemButton>
      <ListItemButton sx={{ pl: 5 }} onClick={() => handleClick("women")}>
        <ListItemIcon>
          <WomanIcon />
        </ListItemIcon>
        <ListItemText primary="Women" />
      </ListItemButton>
      <ListItemButton sx={{ pl: 5 }} onClick={() => handleClick("kids")}>
        <ListItemIcon>
          <ToysIcon />
        </ListItemIcon>
        <ListItemText primary="Kids" />
      </ListItemButton>
      <ListItemButton sx={{ pl: 5 }} onClick={() => handleClick("furnitures")}>
        <ListItemIcon>
          <ChairIcon />
        </ListItemIcon>
        <ListItemText primary="Furnitures" />
      </ListItemButton>
      <ListItemButton sx={{ pl: 5 }} onClick={() => handleClick("electronics")}>
        <ListItemIcon>
          <LaptopIcon />
        </ListItemIcon>
        <ListItemText primary="Electronics" />
      </ListItemButton>
      <ListItemButton sx={{ pl: 5 }} onClick={() => handleClick("jewelery")}>
        <ListItemIcon>
          <DiamondIcon />
        </ListItemIcon>
        <ListItemText primary="Jewelry" />
      </ListItemButton>
    </>
  );
};
export default MenuListCategories;
