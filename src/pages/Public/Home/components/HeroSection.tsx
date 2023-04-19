import { Typography, Button, Box } from "@mui/material";
import HeroSectionImage from "../../../../assets/HeroImage.webp";

export const HeroSection = () => {
  return (
    <Box sx={{ width: "100vw", height: "70vh", display: "flex", mt: 15 }}>
      <Box
        sx={{
          width: { xs: "100%", md: "90%" },
          height: "100%",
          display: "flex",
          margin: "auto",
          position: "relative",
          color: "primary.dark",
        }}
      >
        <img
          src={HeroSectionImage}
          alt="Hero Image"
          style={{
            objectFit: "cover",
            width: "100%",
            overflow: "hidden",
            objectPosition: "center",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: "auto auto",
            width: { xs: "100%", md: "550px" },
            height: "440px",
          }}
        >
          <Typography
            variant="h4"
            component="h3"
            align="center"
            sx={{ width: "80%", margin: "auto", pt: 6, fontWeight: "600" }}
          >
            At Araney we have what you need to return to school and for your
            home
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            align="center"
            sx={{
              width: "80%",
              margin: "auto",
              pt: 2,
              fontWeight: 700,
              color: "secondary.dark",
              fontSize: { xs: "3rem", md: "3.2rem", lg: "3.75rem" },
            }}
          >
            -50% discount
          </Typography>
          <Typography
            variant="subtitle1"
            component="h6"
            align="center"
            sx={{
              width: "80%",
              margin: "auto",
              fontWeight: 500,
              color: "#7a7582",
            }}
          >
            Mentioned department only
          </Typography>
          <Button
            variant="contained"
            size="large"
            color="info"
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "auto",
              mt: 4,
            }}
          >
            Ver los productos en oferta
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
