import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ProductInfo } from '../../../../models';

interface ProductCardProps{
    product:ProductInfo;
}

export function ProductCard({product}:ProductCardProps) {

    const { image,price, title, } = product;
  return (
    <Card sx={{ maxWidth: 300, height:400, boxShadow:4, display:"flex", flexDirection:"column", justifyContent:"space-between" }}>
      <CardMedia
        component="img"
        height={220}
        width='80%'
        image={image}
        alt={title}
        sx={{  objectFit:"contain", }}
      />    
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ${price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to cart</Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;