import { Box, Divider } from "@mui/material";
import {
  RegisterForm,
  RegisterFormTopMessages,
  GoogleSignUpButton,
} from "./components";

export const Register = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "auto",
        minHeight: "80vh",
        color: "warning.dark",
        mt: 15,
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: { xs: "60%", sm: "50%", md: "25%" },
          height: "100%",
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          border: "2px solid rgba(148,148,148,.50)",
          p: 5,
          borderRadius: 10,
          backgroundColor: "white",
        }}
        className="centerElementLogin"
      >
        <RegisterFormTopMessages />
        <RegisterForm />
        <Divider sx={{ py: { xs: 2, md: 3 } }}>OR</Divider>
        <GoogleSignUpButton />
      </Box>
    </Box>
  );
};
export default Register;
