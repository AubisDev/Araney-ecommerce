import {AppBar, Toolbar, Typography, Button, Divider, Stack, Box, Container, Badge } from '@mui/material';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isUserChecked, userFirebaseLogout } from '../firebase';
import { AppStore } from '../redux/store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../assets/araney-logo.png';
import { PrivateRoutes } from '../models';

export const Navbar = () =>{
  const { token, username } = useSelector( (store: AppStore) => store.user);
  const { cart } = useSelector( (store: AppStore) => store.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  
  useEffect(() => {
    isUserChecked({ dispatch, navigate })
  }, []);
    
  
  const handleLogout = () => userFirebaseLogout({ dispatch });
  
  const handleCartClick = () => navigate(`/${PrivateRoutes.CHECKOUT}`);

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed" sx={{ height: '10vh', backgroundColor: 'warning.light', }}>
        <Toolbar style={{display: 'flex', justifyContent: 'space-evenly' }}>
          <Box 
            sx={{ display: 'flex', flexDirection: 'row', flexGrow: 0.5, alignItems:'center', cursor:'pointer'}}
            onClick={ () => navigate('/')}
          >
            <img src={logo} alt="araney logo" className='logo'/>
            <Typography variant="h4" component="div" sx={{ position:'relative', pb: 2, pr:2, mt:1, fontFamily: "'Mali', cursive;", fontWeight:500}}>
                Araney
                <Typography variant='subtitle1' component="span" style={{ position:'absolute', bottom:0, right:0, fontFamily: "'Mali', cursive", fontWeight:400, fontSize:'0.85rem' }}>
                    E-market 
                </Typography>
            </Typography>
          </Box>
          <Box sx={{display: 'flex',flexDirection:"row" }}>
            <Stack direction='row' spacing={1}>            
                <Button  
                  color="inherit" 
                  size="large" 
                  className="navButton"
                  onClick={ () => navigate('/')}
                >
                    Categories
                </Button>

                <Button  
                  color="inherit" 
                  size="large" 
                  className="navButton"
                  onClick={ () => navigate('/about')}
                >
                    About us
                </Button>
            </Stack>
            <Divider orientation="vertical" variant="middle" flexItem sx={{ mx:3, backgroundColor:'white',  }}/>
            <Stack direction='row' spacing={1}>
               {
                token !== '' && username !== '' ? 
                (
                  <>

                    <Badge badgeContent={cart?.length} color="primary" onClick={ handleCartClick } sx={{ cursor:'pointer'}}>
                      <ShoppingCartIcon color="action" />
                    </Badge>

                    <Typography variant='button' color='inherit' align="center" sx={{ display:'flex', alignItems:'center', paddingLeft:"15px"}} >
                      Welcome,  <span style={{ color: '#0288d1',paddingLeft:'5px',}}>{username}</span>
                    </Typography>

                    <Button 
                      color="inherit" 
                      size="large" 
                      className="navButton"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </>
                )
                :
                (
                  <>
                    <Button 
                      color="inherit" 
                      size="large" 
                      className="navButton"
                      onClick={ () => navigate('/register')}
                    > 
                      Sign-up
                    </Button>

                    <Button 
                      color="inherit" 
                      size="large" 
                      className="navButton"
                      onClick={ () => navigate('/login')}
                    > 
                      Login
                    </Button>
                  </>
                )
               }
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
        <Container fixed>

        </Container>
    </Box>
  );
}

