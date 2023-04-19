import { Typography, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Product } from "../../../../models";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { title, description, price, rating } = product;
  return (
    <>
      <Typography
        variant="h5"
        fontWeight={400}
        fontFamily={"Dosis"}
        sx={{
          width: { xs: "80%", md: "90%" },
          m: "0 auto",
          pt: 2,
          pb: 2,
          textAlign: "center",
          fontSize: { xs: "1.2em", md: "1.5em" },
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          m: { xs: "auto", md: 0 },
        }}
      >
        <Typography
          variant="h4"
          fontWeight={400}
          fontFamily={"Dosis"}
          sx={{
            width: "80%",
            m: "0 auto",
            ml: { xs: 0, md: 8 },
            display: "flex",
            justifyContent: "center",
            fontSize: { xs: "1.65rem", md: "2.125rem" },
          }}
        >
          {rating?.rate}
          <StarIcon
            sx={{ lineHeight: 0, height: "auto", color: "warning.light" }}
          />
        </Typography>
        <Typography
          variant="h4"
          fontWeight={400}
          fontFamily={"Dosis"}
          sx={{
            width: "80%",
            m: "0 auto",
            ml: { xs: -4, md: 8 },
            py: { xs: 2, md: 0 },
            fontSize: { xs: "1.65rem", md: "2.125rem" },
          }}
        >
          {`$${price}`}
        </Typography>
      </Box>
      <Typography
        variant="subtitle1"
        fontWeight={400}
        fontFamily={"Dosis"}
        align="center"
        sx={{
          width: { xs: "80%", sm: "70%", md: "80%" },
          m: "0 auto",
          pb: { xs: 4, md: 0 },
          fontSize: { xs: "0.8rem", md: "1rem" },
        }}
      >
        {description}
      </Typography>
    </>
  );
};
export default ProductDetails;
