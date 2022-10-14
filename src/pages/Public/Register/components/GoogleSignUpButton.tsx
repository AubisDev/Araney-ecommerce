import { Button } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import { googleSignIn } from "../../../../firebase/userAuth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const GoogleSignUpButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleGoogleSignUp = () => {
    googleSignIn({ dispatch, navigate });
  }

  return (
    <Button 
        variant="contained" 
        color='warning' 
        sx={{ width:'60%', margin:"auto"}}
        onClick={handleGoogleSignUp }
        >
        <GoogleIcon color='inherit' sx={{pr:1 }} /> Sign up with google
    </Button>
  )
}

export default GoogleSignUpButton;