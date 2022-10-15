import { Box, Stack } from '@mui/material';
import designer from '../../../assets/designer.webp'
import { AboutContent, AboutHeroSectionBoxes, AboutHeroSectionTitle, AboutJoinUsButton } from './components';


export const About = () => {
  return (
    <>
      <Box sx={{ width:"100vw", height:"80vh", backgroundImage:`url(${designer})`, backgroundSize:'cover',backgroundRepeat:"no-repeat", backgroundPosition:"center", }}>
        <Stack direction='column' sx={{ width:"100%", height:"100%", backgroundColor:"rgba(0,0,0,0.70)"  }}>
          <Box sx={{ width:"70%", height:"100%", display:'flex', flexDirection:"column", alignItems:'center', justifyContent:"center", margin:"auto"  }}>
            <AboutHeroSectionTitle/>
            <AboutHeroSectionBoxes /> 
            <AboutJoinUsButton/>
          </Box>
        </Stack>
      </Box>
      <AboutContent/>
    </>
   
  )
}
export default About