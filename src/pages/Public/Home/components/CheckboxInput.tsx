import { Alert, Checkbox, InputLabel } from "@mui/material";
import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  [x: string]: any;
}

export const CheckboxInput = ({ label, ...props }: Props) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <InputLabel>
        <Checkbox {...field} {...props} />
        {label}
      </InputLabel>

      {meta.error && meta.touched && (
        <Alert severity="error">
          <ErrorMessage name={props.name} component="span" />
        </Alert>
      )}
    </>
  );
};
