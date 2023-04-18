import { Box, Typography } from "@mui/material";
import { Product } from "../../../../models/products";
import ProductCard from "./ProductCard";

export interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <Box
      sx={{
        width: { xs: "90%", md: "80%" },
        height: "100%",
        bgcolor: "rgba(255,255,255,.65)",
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(2, minmax(0, 1fr))",
          sm: "repeat(3, minmax(0, 1fr))",
          md: "repeat(4, minmax(0, 1fr))",
        },
        gap: { xs: 1, md: 3 },
        mx: { xs: "auto", md: 0 },
        mt: { xs: "1em", md: 0 },
        ml: { xs: "auto", md: "2em" },
      }}
    >
      {products.length !== 0 ? (
        products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <Box
          width="70vw"
          height="70vh"
          bgcolor="rgba(255,255,255)"
          border="2px solid rgba(255,152,0,0.4)"
        >
          <Typography
            variant="h5"
            sx={{
              color: "#ff9800",
              textAlign: "center",
              width: "100%",
              height: "100%",
              margin: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            There are no items to show right now
          </Typography>
        </Box>
      )}
    </Box>
  );
};
export default ProductList;
