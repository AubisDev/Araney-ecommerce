import { Typography, Button, Box, Grid } from '@mui/material';
import { categoriesData, CategoriesData } from '../data/categories.data';


export const CategoriesSection = () => {


  return (
    <Box sx={{ width: '100vw', minHeight:"100vh", height:"auto", color:'primary.dark', mt:8}}>
        <Box sx={{ width: '80%', display:'flex', flexDirection:'column', margin:'auto' }}>
            <Typography variant='h4' align='left' component='h3' sx={{ py:2, borderBottom:'2px solid rgba(148,148,148,.25)' }}>
                Check our variety of products
            </Typography>
            
            <Grid container direction='row' spacing={5}  >
            {
                categoriesData.map(({id, categoryName, image, description}:CategoriesData) => (
                    <Grid key={id} item xs={8} md={4} lg={4} className="category">
                        <Box className="categoryItem" >
                            <img src={image} alt={categoryName} style={{ objectFit:'cover', width:'100%',height:"500px", position: 'relative'}} />
                            <Typography variant='h4' align='center' component='h4' className='centerElement'>
                                {categoryName}
                                <Typography variant='subtitle1' align='center' component='h4' className='centerElement'>
                                    {description}
                                </Typography>
                            </Typography>
                            <i className="ion-ios-play-outline"></i>	
                            <div className="curl"></div>
                        </Box>
                    </Grid>
                ))
            }
            </Grid>
        </Box>
    </Box>
  )
}
export default CategoriesSection
// https://www.pexels.com/es-es/buscar/school/