import { Box, Button } from "@mui/material";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TextInput } from "../../../../components";
import { userSignIn } from "../../../../firebase";
import { loginValidationSchema } from "../../../../models";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "70%",
        margin: "auto",
      }}
    >
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async ({ email, password }) => {
          userSignIn({ dispatch, email, password, navigate });
        }}
        validationSchema={loginValidationSchema}
      >
        <Form>
          <TextInput label="Email" name="email" placeholder="Email" />

          <TextInput
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
          />

          <Button color="warning" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};
export default LoginForm;
