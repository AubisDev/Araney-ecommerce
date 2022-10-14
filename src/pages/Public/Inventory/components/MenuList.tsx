import { Box, List, ListSubheader } from "@mui/material"
import MenuListCategories from "./MenuListCategories"



const MenuList = () => {
  return (
    <Box sx={{ width:'20%', height:"100%", bgcolor:"background.paper" }}>
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
    </Box>
    
  )
}
export default MenuList