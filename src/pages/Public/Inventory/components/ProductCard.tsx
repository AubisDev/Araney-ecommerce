import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Product, PublicRoutes } from "../../../../models";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Fab } from "@mui/material";
import { takeSpacesOutFromString } from "../../../../utilities";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedProduct } from "../../../../redux/states/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { image, price, title } = product;

  const handleAddItemToCart = async () => {
    const { id, title } = product;
    const titleWithoutSpaces = takeSpacesOutFromString(title);
    dispatch(setSelectedProduct(product));
    navigate(`/${PublicRoutes.PRODUCT}/${titleWithoutSpaces}/${id}`);
  };

  return (
    <Card
      className="productCard"
      sx={{
        maxWidth: 320,
        height: { md: 350 },
        boxShadow: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        cursor: "pointer",
      }}
      onClick={() => handleAddItemToCart()}
    >
      <CardMedia
        component="img"
        height={220}
        width="80%"
        image={image}
        alt={title}
        sx={{ objectFit: "contain", maxHeight: 220 }}
      />
      <CardContent
        sx={{
          height: 100,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          ${price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
      <CardActions sx={{ position: "absolute", top: 0, right: 0 }}>
        <Fab
          aria-label="add"
          size="small"
          sx={{ color: "info.light", boxShadow: 3, bgcolor: "white" }}
          onClick={() => handleAddItemToCart()}
        >
          <AddShoppingCartIcon />
        </Fab>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
