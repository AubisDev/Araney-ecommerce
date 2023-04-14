import { Box } from "@mui/material";
import { Product } from "../../../../models/products";
import ProductCard from "./ProductCard";

export interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <Box
      sx={{
        width: "80%",
        height: "100%",
        bgcolor: "rgba(255,255,255,.65)",
        display: "grid",
        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
        gap: 3,
      }}
    >
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Box>
  );
};
export default ProductList;
