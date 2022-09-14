import { Box, Divider, Button, Typography } from "@mui/material"
import { Formik, Form } from "formik"
import * as Yup from 'yup'
import { TextInput } from "../../components";
import GoogleIcon from '@mui/icons-material/Google';

const validationSchema = Yup.object({
  username: Yup
    .string()
    .min(2,'Name should have more than 2 characters')
    .required('Email is required'),
  email: Yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password1: Yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  password2: Yup
  .string()
  .oneOf([])
  .required('Password is required'),
});

export const Register = () => {
  return (
    <Box sx={{ width: '100vw', height:"85vh", color:'warning.dark', mt:8, position:'relative'}}>
      <Box sx={{ width: '35%',  display:'flex', flexDirection:'column', margin:'auto', border:'2px solid rgba(148,148,148,.50)', p:5, borderRadius: 10, backgroundColor: 'white'}} className="centerElementLogin">
        <Typography variant='h4' align='center' component='h3' sx={{ }}>
            Welcome to Araney
        </Typography>
        <Typography variant='subtitle1' align='center' component='p' sx={{ pb:2, color:"#7a7582"}} >
            Already have an account? 
            <Button size="medium" color='info' sx={{ ml:1}}>Sign in</Button>
        </Typography>
        <Box sx={{
          width: '60%',
          margin:'auto'
        }}>
          <Formik
            initialValues={{
              username:'',
              email:'',
              password1:'',
              password2:'',
              terms: false
            }}
            onSubmit={ (formValues) => {
              console.log(formValues);
            }}
            validationSchema = { validationSchema }
          >
            <Form>
              <TextInput
                label='Name'
                name='username'
              />
              <TextInput
                label='Email'
                name='email'
              />


              <TextInput
                label='Password'
                name='password1'
                type='password'
              />
              <TextInput
                label=' Repeat Password'
                name='password2'
                type='password'
              />
              <Button color='warning' variant="contained" fullWidth type="submit" >
                Submit
              </Button>
            </Form>
          </Formik>
        </Box>
        <Divider sx={{ py:3,}}>OR</Divider>

        <Button variant="contained" color='warning' sx={{ width:'60%', margin:"auto"}}>
          <GoogleIcon color='inherit' sx={{pr:1 }} /> Sign in with google
        </Button>

        
      </Box>
    </Box>

  )
}
export default Register