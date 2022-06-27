import * as yup from 'yup';

import {emailRegex} from './constant';

export const FighterSignupFormFields = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  identification_id: '',
  upload_id: '',
};

export const RefreeSignupFormFields = {
  firstName: '',
  lastName: '',
  email: '',
  contact: '',
  password: '',
  confirmPassword: '',
  experience: '',
  specialization: '',
  per_hour: '',
  min_hours: '',
  identification_id: '',
  upload_id: '',
};

export const venueSignupFieldsPage1 = {
  ownerName: '',
  email: '',
  contact: '',
  password: '',
  confirmPassword: '',
};

export const venueSignupFieldsPage2 = {
  venueName: '',
  venueAddress: '',
  venueCity: '',
  venuePostalCode: '',
  businessHours: '',
  per_hour: '',
  upload_id: '',
};

export const PhoneAuthFields = {
  contact: '',
};

export const updateFormFields = {
  firstName: '',
  lastName: '',
  email: '',
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

export const depositAmount = {
  cardNumber: '',
  expDate: '',
  cvc: '',
  ownerName: '',
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

export const ForgotPasswordVS = yup.object().shape({
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
});

export const FighterSignUpVS = yup.object().shape({
  firstName: yup.string().required('First Name Required').label('firstName'),
  lastName: yup.string().required('Last Name Required').label('lastName'),
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password Required'),
  confirmPassword: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Confirm New Password Required')
    .oneOf([yup.ref('password'), null], 'New Passwords do not match'),
  identification_id: yup
    .object()
    .shape()
    .required('Identification ID is Required'),
  upload_id: yup.object().shape().required('Upload ID is Required'),
});

export const RefreeSignUpVS = yup.object().shape({
  firstName: yup.string().required('First Name Required').label('firstName'),
  lastName: yup.string().required('Last Name Required').label('lastName'),
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
  contact: yup
    .number()
    .typeError('Invalid contact number')
    .required('Contact number is required'),

  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password Required'),
  confirmPassword: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Confirm New Password Required')
    .oneOf([yup.ref('password'), null], 'New Passwords do not match'),

  experience: yup.string().required('Experience Required').label('experience'),
  specialization: yup
    .string()
    .optional('Specialization Required')
    .label('specialization'),
  min_hours: yup.string().required('Minimum Hours Required').label('min_hours'),
  per_hour: yup
    .number()
    .typeError('Invalid Rate Per Hour')
    .required('Rate Per hour Required')
    .label('per_hour'),
  identification_id: yup
    .object()
    .shape()
    .required('Identification ID is Required'),
  upload_id: yup.object().shape().required('Upload ID is Required'),
});

export const PhoneAuthFieldsVS = yup.object().shape({
  contact: yup
    .number()
    .typeError('Invalid contact number')
    .required('Contact number is required'),
});

export const VenueSignUpPage1VS = yup.object().shape({
  ownerName: yup.string().required('Full Name Required').label('ownerName'),
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password Required'),
  confirmPassword: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Confirm New Password Required')
    .oneOf([yup.ref('password'), null], 'New Passwords do not match'),
  contact: yup
    .number()
    .typeError('Invalid contact number')
    .required('Contact number is required'),
});

export const VenueSignUpPage2VS = yup.object().shape({
  venueName: yup.string().required('Venue Name Required').label('venueName'),
  venueAddress: yup
    .string()
    .required('Venue Address Required')
    .label('venueAddress'),
  venueCity: yup.string().required('Venue City Required').label('venueCity'),
  venuePostalCode: yup
    .string()
    .required('Venue Postal Code Required')
    .label('venuePostalCode'),
  businessHours: yup
    .string()
    .required('Business Hours Required')
    .label('businessHours'),
  per_hour: yup
    .number()
    .typeError('Invalid Rate Per Hour')
    .required('Rate Per Hour Required')
    .label('per_hour'),
  upload_id: yup.object().shape().required('Upload ID is Required'),
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

export const DepositAmountVS = yup.object().shape({
  cardNumber: yup
    .string()
    .required('Card Number Required')
    .min(16, 'Card number should contain at least 16 digits')
    .max(19, 'Card number can only contain 16 digits'),
  expDate: yup
    .string()
    .required('Expiry Date Required')
    .min(5, 'Date should contain at least 16 digits')
    .max(5, 'Card date can only contain 5 digits'),
  cvc: yup.string().required('CVC/CVV Required'),
  ownerName: yup.string().required('Cardholder Name Required'),
});
