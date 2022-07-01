import * as yup from 'yup';

import {emailRegex} from './constant';

export const PhoneAuthFields = {
  contact: '',
};
export const signupFormFields = {
  fullname: '',
  email: '',
  contact: '',
  password: '',
};

export const updateFormFields = {
  firstName: '',
  lastName: '',
  email: '',
};
export const AddPersonalInfoField = {
  image: '',
  desc: '',
};

export const loginFormFields = {
  email: '',
  password: '',
};

export const forgotFormFields = {
  email: '',
};

export const resetFormFields = {
  old_password: '',
  password: '',
  confirmPassword: '',
};

export const codeFormFields = {
  code: '',
};

export const LoginVS = yup.object().shape({
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password Required'),
});

export const SignupVS = yup.object().shape({
  fullname: yup.string().required('Full Name Required'),
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
  contact: yup
    .number()
    .typeError('Invalid phone number')
    .required('Phone number Required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password Required'),
});

export const ForgotPasswordVS = yup.object().shape({
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
});

export const PhoneAuthFieldsVS = yup.object().shape({
  contact: yup
    .number()
    .typeError('Invalid phone number')
    .required('Phone number Required'),
});
export const AddPersonalInfoVS = yup.object().shape({
  image: yup.string().required('Image Required'),
  desc: yup.string().required('Description Required'),
});

export const ResetPasswordVS = yup.object().shape({
  old_password: yup
    .string()
    .min(6, 'Old Password must be at least 6 characters')
    .required('Old Password Required'),

  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('New Password Required'),

  confirmPassword: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Confirm New Password Required')
    .oneOf([yup.ref('password'), null], 'New Passwords do not match'),
});
