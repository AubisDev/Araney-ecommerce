import { Typography, Box, Grid } from '@mui/material';
import { categoriesData, CategoriesData } from '../data/categories.data';


export const CategoriesSection = () => {


  return (
    <Box sx={{ width: '100vw', minHeight:"100vh", height:"auto", color:'warning.dark', mt:8}}>
        <Box sx={{ width: '80%', display:'flex', flexDirection:'column', margin:'auto' }}>
            <Typography variant='h4' align='left' component='h3' sx={{ py:2, borderBottom:'2px solid rgba(148,148,148,.25)' }}>
                Variety in categories
            </Typography>
            
            <Grid container direction='row' spacing={5} sx={{ p:3}} >
            {
                categoriesData.map(({id, categoryName, image, description}:CategoriesData) => (
                    <Grid key={id} item xs={6}  lg={4} className="category">
                        <Box className="categoryItem" >
                            <img src={image} alt={categoryName} style={{ objectFit:'cover', width:'100%',height:"500px", position: 'relative'}} />
                            <Typography variant='h4' align='center' component='h4' className='centerElement'>
                                {categoryName}
                                <Typography variant='subtitle1' align='center' component='span' className='centerElement' sx={{ width:"70%"}}>
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
