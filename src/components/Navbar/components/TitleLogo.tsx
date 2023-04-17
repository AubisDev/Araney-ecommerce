import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/araney-logo.webp";

const TitleLogo = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexGrow: 0.5,
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => {
        window.scroll(0, 0);
        navigate("/");
      }}
    >
      <img src={logo} alt="araney logo" className="logo" />
      <Typography
        fontSize={{ xs: 20, sm: 28, md: 30 }}
        component="div"
        sx={{
          position: "relative",
          pb: 2,
          pr: 2,
          mt: 1,
          fontFamily: "'Mali', cursive;",
          fontWeight: 500,
        }}
      >
        Araney
        <Typography
          variant="subtitle1"
          component="span"
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            fontFamily: "'Mali', cursive",
            fontWeight: 400,
            fontSize: "0.85rem",
          }}
        >
          E-market
        </Typography>
      </Typography>
    </Box>
  );
};
export default TitleLogo;
