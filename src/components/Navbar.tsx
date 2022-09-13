import {AppBar, Toolbar, Typography, Button, Divider, Stack, Box, Container } from '@mui/material';

export const Navbar = () =>{
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed" sx={{ height: '9vh', backgroundColor: 'warning.light', }}>
        <Toolbar style={{display: 'flex', justifyContent: 'space-evenly' }}>
          <Box style={{ display: 'flex', flexDirection: 'row', flexGrow: 0.5, alignItems:'center'}}>
            <Typography variant="h4" component="div" sx={{ position:'relative', pb: 2, pr:2, mt:1 }}>
                Araney
                <Typography variant='subtitle1' component="span" style={{ position:'absolute', bottom:-2, right:0}}>
                    E-market 
                </Typography>
            </Typography>
          </Box>
          <Box sx={{display: 'flex',flexDirection:"row" }}>
            <Stack direction='row' spacing={1   }>            
                <Button  color="inherit" size="large" className="navButton">Categories</Button>
                <Button  color="inherit" size="large" className="navButton">Contact us</Button>
                {/* //! Add condition show of Checkout option */}
            </Stack>
            <Divider orientation="vertical" variant="middle" flexItem sx={{ mx:3, backgroundColor:'white',  }}/>
            <Stack direction='row' spacing={1}>
                {/* //! Show register or cart  */}
                <Button color="inherit" size="large" className="navButton">Sign-up</Button>
                <Button color="inherit" size="large" className="navButton">Login</Button>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
        <Container fixed>

        </Container>
    </Box>
  );
}


