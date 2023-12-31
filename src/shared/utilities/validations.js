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
export const socialSignupFormFields = {
  fullname: '',
  contact: '',
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

export const AddSupportInfoField = {
  image: '',
  hourly_rate: '',
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
  password: '',
  confirmPassword: '',
};

export const codeFormFields = {
  code: '',
};

export const editFormFields = {
  email: '',
  phone: '',
  bio: '',
};

export const editSupportFormFields = {
  fullname: '',
  email: '',
  phone: '',
  hourly_rate: '',
  bio: '',
};

export const addCardFormFields = {
  fullname: '',
  country: '',
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

export const SocialLoginSignupVS = yup.object().shape({
  fullname: yup.string().required('Full Name Required'),
  contact: yup
    .number()
    .typeError('Invalid phone number')
    .required('Phone number Required'),
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

export const editProfileFieldsVS = yup.object().shape({
  phone: yup
    .number()
    .typeError('Invalid phone number')
    .required('Phone number Required'),
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
  bio: yup.string('Invalid description').required('Bio data Required'),
});

export const editSupportProfileFieldsVS = yup.object().shape({
  fullname: yup.string().required('Full Name Required'),

  phone: yup
    .number()
    .typeError('Invalid phone number')
    .required('Phone number Required'),
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
  hourly_rate: yup.string().required('Hourly Rate Required'),
  bio: yup.string('Invalid description').required('Bio data Required'),
});

export const AddPersonalInfoVS = yup.object().shape({
  image: yup.object().shape().required('Image Required'),
  desc: yup.string().required('Description Required'),
});

export const AddSupportInfoVS = yup.object().shape({
  image: yup.object().shape().required('Image Required'),
  hourly_rate: yup.string().required('Hourly Rate Required'),
  desc: yup.string().required('Description Required'),
});
export const CodeVS = yup.object().shape({
  code: yup
    .string()
    .required('OTP Required')
    .matches(/^[0-9]+$/, 'OTP must be only digits')
    .min(6, 'OTP must be exactly 6 digits')
    .max(6, 'OTP must be exactly 6 digits'),
});

export const ResetPasswordVS = yup.object().shape({
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

export const BudgetBoost = yup.object().shape({
  budget: yup
    .string()
    .required('Budget Required')
    .matches(/^[0-9]+$/, 'Budget must be only digits'),
  duration: yup
    .string()
    .required('Duration Required')
    .matches('Duration must Date format'),
});

export const addCardVS = yup.object().shape({
  fullname: yup.string().required('Full Name Required'),
  country: yup.string().required('Country Required'),
});
