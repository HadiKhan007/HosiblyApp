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
  EXERCISES: 'exercises',
  USER_EXERCISES: 'user_exercises',
  EVENTS: 'events',
  USER_EVENTS: 'user_events',
  USERS_TEAM: 'user_teams',
  PROFILE: `users`,
  FAQ: 'faqs',
  TERMS_CONDITION: 'term_and_conditions',
  PRIVACY_POLICY: 'privacy_policies',
  ACTIVITY: 'exercises',
  CHECKOUT: 'checkout',
};

export {BASE_URL, ENDPOINTS};
