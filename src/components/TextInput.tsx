import { Alert, Box, TextField } from "@mui/material"
import { ErrorMessage, useField } from 'formik';

interface Props {
  label?: string;
  name: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  [x: string]: any;
}

export const TextInput = ({label, ...props}: Props) => {
  const [ field, meta ] = useField(props)

  return (
    <Box sx={{ mb:2}}>
      <TextField { ...field } { ...props } fullWidth variant="standard"/>
      { meta.error && meta.touched &&  (
          <Alert severity="error">
            <ErrorMessage name={ props.name } component="span" />
          </Alert>
        )
      }
      
    </Box>
   
  )
}
