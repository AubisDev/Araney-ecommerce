import * as Yup from 'yup';


export const loginValidationSchema = Yup.object({
    email: Yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: Yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
});

export const registerValidationSchema = Yup.object({
    username: Yup
      .string()
      .min(2,'Name should have more than 2 characters')
      .required('Name is required'),
    email: Yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: Yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
    terms: Yup
      .boolean()
      .oneOf([true], 'Debe de aceptar las condiciones'),
});