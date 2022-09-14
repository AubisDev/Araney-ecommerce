import { Box, Divider, Button, Typography } from "@mui/material"
import { Formik, Form } from "formik"
import * as Yup from 'yup'
import { TextInput } from "../../components";

const validationSchema = Yup.object({
  email: Yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const Login = () => {
  return (
    <Box sx={{ width: '100vw', height:"80vh", color:'warning.dark', mt:8, position:'relative'}}>
      <Box sx={{ width: '25%', display:'flex', flexDirection:'column', margin:'auto', border:'2px solid rgba(148,148,148,.50)', p:5, borderRadius: 10, backgroundColor: 'white'}} className="centerElementLogin">
        <Typography variant='h4' align='center' component='h3' sx={{ }}>
            Welcome to Araney
        </Typography>
        <Typography variant='subtitle1' align='center' component='p' sx={{ pb:4, color:"#7a7582"}} >
            Don't have an account? 
            <Button size="small">Join us</Button>
        </Typography>
        <Box sx={{
          width: '60%',
          margin:'auto'
        }}>
          <Formik
            initialValues={{
              email:'',
              password:''
            }}
            onSubmit={ (formValues) => {
              console.log(formValues);
            }}
            validationSchema = { validationSchema }
          >
            <Form>
              <TextInput
                label='Email'
                name='email'
              />

              <TextInput
                label='Password'
                name='password'
              />

              <Button color='warning' variant="contained" fullWidth type="submit" >
                Submit
              </Button>
            </Form>
          </Formik>
        </Box>
        <Divider sx={{ py:4}}>
          OR
        </Divider>
        <Typography variant='subtitle1' align='center' component='h3' sx={{ }}>
           Sign in with google 
        </Typography>
        
      </Box>
    </Box>

  )
}
export default Login