import { Box, Divider } from "@mui/material"
import { LoginForm, LoginTopMessages, GoogleSignInButton} from "./components";

export const Login = () => {
  return (
    <Box sx={{ width: '100vw', height:"80vh", color:'warning.dark', mt:8, position:'relative'}}>
      <Box sx={{ width: '35%', display:'flex', flexDirection:'column', margin:'auto', border:'2px solid rgba(148,148,148,.50)', p:5,borderRadius: 10, backgroundColor: 'white'}} className="centerElementLogin">
        <LoginTopMessages/>
        <LoginForm/>
        <Divider sx={{ py:3,}}>OR</Divider>
        <GoogleSignInButton/>
      </Box>
    </Box>
   
  )
}
export default Login

