import { Button } from "@mui/material"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { googleSignIn } from "../../../../firebase";
import GoogleIcon from '@mui/icons-material/Google';

const GoogleSignInButton = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleGoogleSignIn = () => {
        googleSignIn({ dispatch, navigate });
    }
    return (
        <Button 
            variant="contained" 
            color='warning' 
            sx={{ width:'60%', margin:"auto"}}
            onClick={handleGoogleSignIn}
        >
            <GoogleIcon color='inherit' sx={{pr:1 }} /> Sign in with google
        </Button>
    )
}
export default GoogleSignInButton