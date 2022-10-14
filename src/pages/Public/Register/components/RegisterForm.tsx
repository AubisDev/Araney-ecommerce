import { Box, Button } from "@mui/material";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TextInput } from "../../../../components";
import { handleUserRegistration } from "../../../../firebase";
import { registerValidationSchema } from "../../../../models";
import { CheckboxInput } from "../../Home/components";


const RegisterForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    return (
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
    )
}
export default RegisterForm