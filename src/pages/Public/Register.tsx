import { Box, Divider, Button, Typography, Checkbox } from "@mui/material"
import { Formik, Form } from "formik"
import { TextInput } from "../../components";
import GoogleIcon from '@mui/icons-material/Google';
import { CheckboxInput } from './Home/components/CheckboxInput';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { googleSignIn, handleUserRegistration } from "../../firebase/userAuth";
import { registerValidationSchema } from "../../models/validationSchemas";




export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn({ dispatch, navigate });
  }


  return (
    <Box sx={{ width: '100vw', height:"85vh", color:'warning.dark', mt:8, position:'relative'}}>
      <Box sx={{ width: '35%', height:"auto", display:'flex', flexDirection:'column', margin:'auto', border:'2px solid rgba(148,148,148,.50)', p:5, borderRadius: 10, backgroundColor: 'white'}} className="centerElementLogin">
        <Typography variant='h4' align='center' component='h3'>
            Welcome to Araney
        </Typography>
        <Typography variant='subtitle1' align='center' component='p' sx={{ pb:2, color:"#7a7582"}} >
            Already have an account? 
            <Button size="medium" color='info' sx={{ ml:1}}>Sign in</Button>
        </Typography>
        <Box sx={{
          width: '60%',
          margin:'auto',
        }}>
          <Formik
            initialValues={{
              username:'',
              email:'',
              password:'',
              terms: false
            }}
            onSubmit={({ email, password, username}) => {
              handleUserRegistration({ dispatch ,email, password, username, navigate});
            }}
            validationSchema = { registerValidationSchema }
          >
            <Form>
              <TextInput
                label='Name'
                name='username'
                placeholder="Name"
              />

              <TextInput
                label="Email"
                name='email'
                placeholder="Email"
              />

              <TextInput
                label="Password"
                name='password'
                type='password'
                placeholder="Password"
              />

              <CheckboxInput
                label='Terms & Conditions' 
                name='terms' 
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
          onClick={handleGoogleSignIn }
          >
          <GoogleIcon color='inherit' sx={{pr:1 }} /> Sign in with google
        </Button>

        
      </Box>
    </Box>

  )
}
export default Register