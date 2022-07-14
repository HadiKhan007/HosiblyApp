const BASE_URL = 'https://housibly.herokuapp.com/api/v1/';

const ENDPOINTS = {
  REGISTER: 'signup.json',
  LOGIN: 'login',
  GOOGLE_SIGN_IN: 'google_login',
  APPLE_SIGN_IN: 'apple_login',
  FORGOT_PASS: 'forgot_password',
  RESET_PASS: 'reset_password',
  LOGOUT: 'logout',
  ACCESS_TOKEN: 'get_access_token',
  VERIFY_OTP: 'verify_otp',
  INFO_CONST: 'register_user',
  RESEND_OTP: 'verify_otp/email_resend_otp',
};

export {BASE_URL, ENDPOINTS};
