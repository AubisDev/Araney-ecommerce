import { Typography, Box, Grid, Button } from "@mui/material";
import { categoriesData, ICategoriesData } from "../data";
import { PublicRoutes } from "../../../../models";
import { Link, useNavigate } from "react-router-dom";

export const CategoriesSection = () => {
  const navigate = useNavigate();
  const handleShowProducts = (categoryName: string) => {
    window.scroll(0, 0);
    navigate(`${PublicRoutes.INVENTORY}/${categoryName.toLowerCase()}`, {
      replace: true,
    });
  };

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        height: "auto",
        color: "warning.dark",
        mt: 8,
      }}
    >
      <Box
        id="categories"
        sx={{
          width: { xs: "90%", md: "80%" },
          display: "flex",
          flexDirection: "column",
          margin: "auto",
        }}
      >
        <Typography
          variant="h4"
          component="h4"
          sx={{
            py: 2,
            borderBottom: "2px solid rgba(148,148,148,.25)",
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          Check our categories
        </Typography>

        <Grid container direction="row" spacing={5} sx={{ p: 5 }}>
          {categoriesData.map(
            ({ id, categoryName, image, description }: ICategoriesData) => (
              <Grid
                key={id}
                item
                xs={6}
                sm={4}
                className="category"
                sx={{
                  height: { xs: "275px", md: "auto" },
                  width: { xs: "150px", md: "auto" },
                  p: 0,
                }}
              >
                <Button onClick={() => handleShowProducts(categoryName)}>
                  <Box
                    component="img"
                    alt={categoryName}
                    sx={{
                      objectFit: "cover",
                      width: { xs: "600px", md: "100%" },
                      height: { xs: "300px", md: "500px" },
                      position: "relative",
                    }}
                    src={image}
                  ></Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.8rem", md: "1.4rem" },
                      color: "white",
                      zIndex: 100,
                    }}
                    align="center"
                    component="h4"
                    className="centerElement"
                  >
                    {categoryName}
                    <Typography
                      align="center"
                      component="span"
                      className="centerElement categoryDescription"
                      sx={{
                        width: { xs: "80%", sm: "70%" },
                        fontSize: { md: "1rem", sm: "0.6rem", xs: "0.5rem" },
                        zIndex: 100,
                        color: "white",
                      }}
                    >
                      {description}
                    </Typography>
                  </Typography>
                </Button>
              </Grid>
            )
          )}
        </Grid>
      </Box>
    </Box>
  );
};
