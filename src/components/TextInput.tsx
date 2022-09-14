import { Alert, Box, InputLabel, TextField } from "@mui/material"
import { ErrorMessage, useField } from 'formik';

interface Props {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  [x: string]: any;
}

export const TextInput = ({label, ...props}: Props) => {
  const [ field, meta ] = useField(props)
 
  return (
    <Box sx={{ mb:2}}>
      <InputLabel htmlFor={ props.id || props.name }>{ label }</InputLabel>
      <TextField { ...field } { ...props } fullWidth />
      { meta.error && (
          <Alert severity="error">
            <ErrorMessage name={ props.name } component="span" />
          </Alert>
        )
      }
      
    </Box>
   
  )
}
export default TextInput
