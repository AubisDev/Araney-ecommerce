import { Box, Stack, Button, Typography } from '@mui/material';
import { getFooterData } from '../data/footerData';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';


export const Footer = () => {

    const { storeData, aboutUsData, socials  } = getFooterData();
  return (
        <Box sx={{ width: '100vw', minHeight:'40vh',height:"auto", mt:12, color:'inherit', background:'#0a1929'}}>
            <Box sx={{ width: '70%', display:'flex', flexDirection:'row', margin:'auto', p:3, justifyContent: 'space-evenly', borderBottom: '1px solid white' }}>
                <Stack spacing={0} justifyContent="start" alignItems="start">
                    <Typography variant='h6' align="left" >
                        Store
                    </Typography>
                {
                    storeData.map( (data:string) => (
                        <Button key={data} sx={{ fontFamily:'Roboto',  color:'inherit' }}>{data}</Button>
                    ))
                }
                </Stack>

                <Stack spacing={0} justifyContent="start" alignItems="start">
                    <Typography variant='h6' align="left" >
                        About us
                    </Typography>
                {
                    aboutUsData.map( (data:string) => (
                        <Button key={data} sx={{ fontFamily:'Roboto',  color:'inherit' }}>{data}</Button>
                    ))
                }
                </Stack>

                <Stack spacing={0} justifyContent="start" alignItems="start" >
                    <Typography variant='h6' align="left" >
                        Socials
                    </Typography>
                {
                    socials.map( (social) => (
                        <Button key={social} sx={{ fontFamily:'Roboto', color:'inherit'  }}>
                            {
                                social === 'Instagram' ? <InstagramIcon/> : 
                                social === 'Facebook' ? <FacebookIcon/> : 
                                social === 'Twitter' ? <TwitterIcon/> : <PinterestIcon/>  
                            }
                             <span style={{ paddingLeft:'6px'}}>{social}</span>
                        </Button>
                    ))
                }
                </Stack>

            </Box>
            <Typography variant='body1' align="center" py={2} >
                ©Araney E-market. All rights reserved.
            </Typography>
        </Box>
  )
}
