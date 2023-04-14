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
        height: "85vh",
        color: "warning.dark",
        mt: 12,
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "35%",
          height: "auto",
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
        <Divider sx={{ py: 3 }}>OR</Divider>
        <GoogleSignUpButton />
      </Box>
    </Box>
  );
};
export default Register;
