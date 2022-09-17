import {AppBar, Toolbar, Typography, Button, Divider, Stack, Box, Container } from '@mui/material';
import { User } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isUserChecked, userFirebaseLogout } from '../firebase';
import { AppStore } from '../redux/store';
import logo from '../assets/araney-logo.png';

export const Navbar = () =>{
  const { token, username } = useSelector( (store: AppStore) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [user, setUser] = useState<User>();
  
  useEffect(() => {
    isUserChecked({ dispatch, setUser, navigate })
  }, []);
    
  
  const handleLogout = () => userFirebaseLogout({ dispatch });

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed" sx={{ height: '9vh', backgroundColor: 'warning.light', }}>
        <Toolbar style={{display: 'flex', justifyContent: 'space-evenly' }}>
          <Box 
            sx={{ display: 'flex', flexDirection: 'row', flexGrow: 0.5, alignItems:'center'}}
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
            <Stack direction='row' spacing={1   }>            
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
                  onClick={ () => navigate('/')}
                >
                    Contact us
                </Button>
                {/* //! Add condition show of Checkout option */}
            </Stack>
            <Divider orientation="vertical" variant="middle" flexItem sx={{ mx:3, backgroundColor:'white',  }}/>
            <Stack direction='row' spacing={1}>
                {/* //! Show register or cart  */}
               {
                token !== '' && username !== '' ? 
                (
                  <>
                    <Typography variant='button' color='inherit' align="center" sx={{ display:'flex', alignItems:'center', }} >
                      Welcome,  <span style={{ color: '#0288d1',paddingLeft:'5px' }}>{username}</span>
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

