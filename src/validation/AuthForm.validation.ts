import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup
    .string()
    .email('Has to be a valid email address')
    .required('The field is required'),
  password: yup.string().required('The field is required'),
});

export const registerSchema = yup.object({
  username: yup.string().required('The field is required'),
  email: yup
    .string()
    .email('Has to be a valid email address')
    .required('The field is required'),
  password: yup.string().required('The field is required'),
  about: yup.string().required('The field is required'),
});
