import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    emailLogin: yup.string().required("This field is required!").email("Email is invalid!"),
    passwordLogin: yup.string().required("This field is required!")
});

export const registerSchema = yup.object().shape({
    emailRegister: yup.string().required("This field is required!").email("Email is invalid!"),
    passwordRegister: yup.string().required("This field is required!"),
    confirmPasswordRegister: yup.string().oneOf([yup.ref('passwordRegister'), null], 'Passwords must match')
});