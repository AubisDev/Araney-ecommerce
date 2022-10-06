import { useState } from 'react';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import { Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Pagination, Stack } from '@mui/material';
import { DraftsOutlined, SendOutlined, InboxOutlined } from '@mui/icons-material';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import ChairIcon from '@mui/icons-material/Chair';
import LaptopIcon from '@mui/icons-material/Laptop';
import ToysIcon from '@mui/icons-material/Toys';
import DiamondIcon from '@mui/icons-material/Diamond';
import { useFetch } from '../../../hooks';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ProductInfo } from '../../../models';
import ProductCard from './components/ProductCard';
import { usePagination} from '../../../hooks/usePagination';


const Inventory = () => {
    
    const url = 'https://fakestoreapi.com/products';
    const { data: allProducts } = useFetch({url});
    const [page, setPage] = useState<number>(1);
    const itemsPerPage:number = 12;
    const { jumpToPage, currentData } = usePagination(allProducts , itemsPerPage );
    const count = Math.ceil( Object.values(allProducts).length/itemsPerPage )
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [open, setOpen] = useState({
        men: false,
        women: false,
        furnitures: false,
        kids: false,
        school: false,
        tecnology:false
    });

    //!Refactorizar ya que se usa aqui y en checkout
    const handlePageJump = ( e:React.ChangeEvent<any> , page:number ) => {
        setPage( page );
        jumpToPage( page );
    };

  return (
    <Box sx={{ width:'90vw', height:"auto", margin:"auto",mt:12, display:"flex", flexDirection:"row", position:"relative",py:12 }}>   
        <Box sx={{ width:'20%', height:"100%", bgcolor:"background.paper" }}>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', color:"gray",  }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                <ListSubheader component="div" id="nested-list-subheader" sx={{ textAlign:"center", fontSize:"1.05rem"}}>
                Filter your products by category
                </ListSubheader>
            }
            >
                <ListItemButton sx={{ pl:5 }}>
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
                
            </List>
        </Box>

        <Box sx={{ width:'80%', height:"100%", bgcolor:"rgba(255,255,255,.65)", display:"grid", gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap:3}}>
            {
                currentData().map((product:ProductInfo) => (
                    <ProductCard key={ product.id } product={product} />
                ))
            }
        </Box>

        <Stack spacing={2} sx={{height:"32px", width:"100%", position:"absolute", bottom:10, display:"flex", justifyContent:"center", alignItems:"center",}}>
          <Pagination  
            count={count}
            color="primary" 
            size='large'
            shape="rounded"
            variant="outlined"
            page={ page }
            onChange={ handlePageJump }
          />
        </Stack>
    </Box>
  )
}
export default Inventory