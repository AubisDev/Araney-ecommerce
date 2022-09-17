import { Box, Divider, Button, Typography } from "@mui/material"
import { Formik, Form } from "formik"
import { TextInput } from "../../components";
import GoogleIcon from '@mui/icons-material/Google';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { googleSignIn, userSignIn } from "../../firebase/userAuth";
import { loginValidationSchema } from "../../models/validationSchemas";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn({ dispatch, navigate });
  }

  return (
    <Box sx={{ width: '100vw', height:"80vh", color:'warning.dark', mt:8, position:'relative'}}>
      <Box sx={{ width: '35%', display:'flex', flexDirection:'column', margin:'auto', border:'2px solid rgba(148,148,148,.50)', p:5, borderRadius: 10, backgroundColor: 'white'}} className="centerElementLogin">
        <Typography variant='h4' align='center' component='h3' sx={{ }}>
            Welcome to Araney
        </Typography>
        <Typography variant='subtitle1' align='center' component='p' sx={{ pb:4, color:"#7a7582"}} >
            Don't have an account? 
            <Button size="medium" color='info' sx={{ ml:1}}>Join us</Button>
        </Typography>
        <Box sx={{
          width: '70%',
          margin:'auto'
        }}>
          <Formik
            initialValues={{
              email:'',
              password:''
            }}
            onSubmit={ async({ email, password}) => {
              userSignIn({ dispatch, email, password, navigate })
            }}
            validationSchema = { loginValidationSchema }
          >
            <Form>
              <TextInput
                label='Email'
                name='email'
                placeholder='Email'
              />

              <TextInput
                label='Password'
                name='password'
                type='password'
                placeholder='Password'
              />

              <Button color='warning' variant="contained" fullWidth type="submit" >
                Submit
              </Button>
            </Form>
          </Formik>
        </Box>
        <Divider sx={{ py:3,}}>OR</Divider>

        <Button 
          variant="contained" 
          color='warning' 
          sx={{ width:'60%', margin:"auto"}}
          onClick={handleGoogleSignIn}
        >
          <GoogleIcon color='inherit' sx={{pr:1 }} /> Sign in with google
        </Button>

        
      </Box>
    </Box>

  )
}
export default Login