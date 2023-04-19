import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RegisterFormTopMessages = () => {
  const navigate = useNavigate();
  const sendUserToLoginpage = () => {
    navigate("/login");
  };

  return (
    <>
      <Typography
        variant="h4"
        align="center"
        component="h4"
        sx={{ fontSize: { xs: "1.65em", md: "2.215em" } }}
      >
        Welcome to Araney
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        component="p"
        sx={{ pb: 2, color: "#7a7582" }}
      >
        Already have an account?
        <Button
          size="medium"
          color="info"
          sx={{ ml: 1 }}
          onClick={sendUserToLoginpage}
        >
          Sign in
        </Button>
      </Typography>
    </>
  );
};
export default RegisterFormTopMessages;
