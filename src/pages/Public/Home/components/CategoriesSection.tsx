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
          width: "80%",
          display: "flex",
          flexDirection: "column",
          margin: "auto",
        }}
      >
        <Typography
          variant="h4"
          align="left"
          component="h3"
          sx={{ py: 2, borderBottom: "2px solid rgba(148,148,148,.25)" }}
        >
          Check our categories
        </Typography>

        <Grid container direction="row" spacing={5} sx={{ p: 3 }}>
          {categoriesData.map(
            ({ id, categoryName, image, description }: ICategoriesData) => (
              <Grid key={id} item xs={6} lg={4} className="category">
                <Button
                  className="categoryItem"
                  onClick={() => handleShowProducts(categoryName)}
                >
                  <img
                    src={image}
                    alt={categoryName}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "500px",
                      position: "relative",
                    }}
                  />
                  <Typography
                    variant="h4"
                    align="center"
                    component="h4"
                    className="centerElement"
                  >
                    {categoryName}
                    <Typography
                      variant="subtitle1"
                      align="center"
                      component="span"
                      className="centerElement"
                      sx={{ width: "70%" }}
                    >
                      {description}
                    </Typography>
                  </Typography>
                  <div className="curl"></div>
                </Button>
              </Grid>
            )
          )}
        </Grid>
      </Box>
    </Box>
  );
};
