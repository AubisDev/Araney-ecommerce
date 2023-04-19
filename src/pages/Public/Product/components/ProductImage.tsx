import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { AppStore } from "../../../../redux/store";

interface ProductImageProps {
  title: string;
  image: string;
}

const ProductImage = ({ title, image }: ProductImageProps) => {
  return (
    <Box
      sx={{
        width: { xs: "80%", md: "50%" },
        minHeight: "100%",
        height: { xs: "60vh", md: "100%" },
        background: "white",
        position: "relative",
        margin: { xs: "auto", md: 0 },
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "80%",

          maxHeight: "100%",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          margin: "auto",
        }}
      />
    </Box>
  );
};
export default ProductImage;
