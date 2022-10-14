import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import ChairIcon from '@mui/icons-material/Chair';
import LaptopIcon from '@mui/icons-material/Laptop';
import ToysIcon from '@mui/icons-material/Toys';
import DiamondIcon from '@mui/icons-material/Diamond';

const MenuListCategories = () => {
  return (
    <>
        <ListItemButton sx={{ pl:5 }} >
            <ListItemIcon>
                <ManIcon/>
            </ListItemIcon>
            <ListItemText primary="Men"/>
        </ListItemButton>
        <ListItemButton sx={{ pl:5 }}>
            <ListItemIcon>
                <WomanIcon/>
            </ListItemIcon>
            <ListItemText primary="Women" />
        </ListItemButton>
        <ListItemButton sx={{ pl:5 }}>
            <ListItemIcon>
                <ToysIcon/>
            </ListItemIcon>
            <ListItemText primary="Kids" />
        </ListItemButton>
        <ListItemButton sx={{ pl:5 }}>
            <ListItemIcon>
                <ChairIcon/>
            </ListItemIcon>
            <ListItemText primary="Furnitures" />
        </ListItemButton>
        <ListItemButton sx={{ pl:5 }}>
            <ListItemIcon>
                <LaptopIcon/>
            </ListItemIcon>
            <ListItemText primary="Electronics" />
        </ListItemButton>
        <ListItemButton sx={{ pl:5 }}>
            <ListItemIcon>
                <DiamondIcon/>
            </ListItemIcon>
            <ListItemText primary="Jewelry" />
        </ListItemButton>
    </>
  )
}
export default MenuListCategories