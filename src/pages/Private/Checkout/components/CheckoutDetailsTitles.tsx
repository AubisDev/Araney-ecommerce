import { Box, Typography } from "@mui/material"

const CheckoutDetailsTitles = () => {
    return (
        <Box sx={{ width:'100%', height:"30px", display:"grid", gridTemplateColumns: 'repeat(7, minmax(0, 1fr))', color:'rgb(55 65 81)', py:1, borderBottom:2, borderColor:'rgba(128,128,128,0.25)'}}>
          <Typography variant='body1' align='left' sx={{ gridColumn: 'span 3 / span 3', pl:1 }}> Product Details</Typography>
          <Typography variant='body1' align='center' > Quantity</Typography>
          <Typography variant='body1' align='center' >Price by unit</Typography>
          <Typography variant='body1' align='center' > Total Price </Typography>
          <Typography variant='body1' align='center' > Options </Typography>
        </Box>
    )
}
export default CheckoutDetailsTitles