import { List, ListSubheader } from "@mui/material"
import MenuListCategories from "./MenuListCategories"



const MenuListContainer = () => {
  return (
    <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', color:"gray",  }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
            <ListSubheader component="div" id="nested-list-subheader" sx={{ textAlign:"center", fontSize:"1.05rem"}}>
                Filter products by
            </ListSubheader>
        }
    >
        <MenuListCategories />
    </List>
  )
}
export default MenuListContainer