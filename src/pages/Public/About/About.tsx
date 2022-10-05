import { Box, Button, Stack, Typography } from '@mui/material';
import designer from '../../../assets/designer.jpg'
import HeaderBox from './components/HeaderBox';
import img1 from '../../../assets/about-img1.jpg';
import img2 from '../../../assets/about-img2.jpeg';
import img3 from '../../../assets/about-img3.jpg';

export const About = () => {

  
  const data = [
    { id: 123, title: "Creative",  text: 'Want to exploit your creativity?' },
    { id: 321, title: 'Earn Money'  ,text: 'Want to combine our products with your designs?' },
    { id: 456, title: 'Easy and simple',  text: "Just send us your design and we'll do the rest"},
  ]

  return (
    <>
      <Box sx={{ width:"100vw", height:"80vh", backgroundImage:`url(${designer})`, backgroundSize:'cover',backgroundRepeat:"no-repeat", backgroundPosition:"center", }}>
        <Stack direction='column' sx={{ width:"100%", height:"100%", backgroundColor:"rgba(0,0,0,0.70)"  }}>
          <Box sx={{ width:"70%", height:"100%", display:'flex', flexDirection:"column", alignItems:'center', justifyContent:"center", margin:"auto"  }}>
            <Typography variant='h2' py={4}>Are you what we're looking for at <Box component='span' sx={{color:'#ff9800'}}>Araney's</Box>?</Typography>
            <Stack direction='row' spacing={4} >
              {
                data.map( box => (
                  <HeaderBox box={box} />
                ))
              }
            </Stack>
            <Button variant="contained" color='warning' sx={{ m:4, py:1, px:2}}> Click here to join us!</Button>
          </Box>
        </Stack>
      </Box>

      <Box sx={{ width:"80vw", minHeight:'100vh' ,height:'auto', margin:"auto", color:"black", p:5 }}>
        <Typography width='60%' p={5} m='auto' variant="body1" align='justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
        <Stack direction='column' sx={{ mt:6, py:6, display:"flex", justifyContent:"center", width:"100%"  }}>
          <Typography variant='h4' mb={8} fontWeight={600} width='100%' display='flex' alignItems='center' justifyContent="center"  align='justify' color='#636363'  pl={3}>Ultrices gravida dictum fusce ut placerat  </Typography>
          <Box sx={{ display:"flex", flexDirection:"row", width:"100%", justifyContent:"center"}}>
            <img src={img1} alt="about us image create" style={{ width:'500px', borderRadius:"10px",}}/>
            <Typography variant='body1' width='30%' display='flex' alignItems='center' align='justify'  pl={3}>Nibh mauris cursus mattis molestie. Tempor commodo ullamcorper a lacus vestibulum. Maecenas sed enim ut sem viverra aliquet. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Dictum at tempor commodo ullamcorper. </Typography>
          </Box>
        </Stack>
        <Stack direction='column' sx={{ mt:6, py:6, display:"flex", justifyContent:"center" }}>
          <Typography variant='h4' mb={8} fontWeight={600} width='100%' display='flex' alignItems='center' justifyContent="center" color='#636363'  pl={3}>Amet mauris commodo quis imperdiet massa tincidunt nunc  </Typography>
          <Box sx={{ display:"flex", flexDirection:"row", width:"100%", justifyContent:"center"}}>
            <Typography variant='body1' width='30%' display='flex' alignItems='center' align='justify'  pr={3}>Nibh mauris cursus mattis molestie. Tempor commodo ullamcorper a lacus vestibulum. Maecenas sed enim ut sem viverra aliquet. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Dictum at tempor commodo ullamcorper. acilisis mauris sit amet massa vitae tortor condimentum. Porttitor lacus luctus accumsan tortor posuere ac ut. </Typography>
            <img src={img2} alt="about us image create" style={{ width:'500px', borderRadius:"10px",}}/>
          </Box>
        </Stack>
        <Stack direction='column' sx={{ mt:6, py:6, display:"flex", justifyContent:"center" }}>
          <Typography variant='h4' ml={-3} mb={6} fontWeight={600} width='100%' display='flex' alignItems='center' justifyContent="center"  align='justify' color='#636363'  pl={3}>Fermentum leo vel orci porta non pulvinar neque laoreet</Typography>
          <Box sx={{ display:"flex", flexDirection:"column", width:"100%", justifyContent:"center", alignItems:'center',}}>
            <img src={img3} alt="about us image create" style={{ width:'750px', height:"400px", borderRadius:"10px", margin:"auto", }}/>
            <Typography variant='body1' width='50%' display='flex' alignItems='center' align='justify' mt={3} pl={3}>Sit amet nisl suscipit adipiscing bibendum est. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Ipsum faucibus vitae aliquet nec ullamcorper. Morbi tristique senectus et netus et malesuada fames ac turpis. At quis risus sed vulputate odio ut. Ut tristique et egestas quis ipsum suspendisse. Etiam sit amet nisl purus in. Volutpat diam ut venenatis tellus in metus vulputate eu. Interdum velit euismod in pellentesque massa placerat duis ultricies. Parturient montes nascetur ridiculus mus mauris vitae ultricies. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio.  </Typography>
          </Box>
        </Stack>
      </Box>
    </>
   
  )
}
export default About