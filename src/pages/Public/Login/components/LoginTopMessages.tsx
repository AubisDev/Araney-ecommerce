import { Typography, Button } from "@mui/material"
import { useNavigate } from "react-router-dom";

const LoginTopMessages = () => {

    const navigate = useNavigate();

    const sendUserToRegisterPage = () => {
        navigate('/register')
    }
    return (
       <>
        <Typography variant='h4' align='center' component='h3'>
            Welcome to Araney
        </Typography>
        <Typography variant='subtitle1' align='center' component='p' sx={{ pb:4, color:"#7a7582"}} >
            Don't have an account? 
            <Button 
                size="medium" 
                color='info' 
                sx={{ ml:1}}
                onClick={sendUserToRegisterPage}
            >Join us</Button>
        </Typography>
       </>
    )
}
export default LoginTopMessages