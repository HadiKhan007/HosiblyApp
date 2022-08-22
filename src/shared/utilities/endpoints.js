const BASE_URL = 'https://housibly.herokuapp.com/api/v1/';

const ENDPOINTS = {
  REGISTER: 'signup.json',
  LOGIN: 'login',
  SOCIAL_LOGIN: 'social_login.json',
  APPLE_SIGN_IN: 'apple_login',
  FORGOT_PASS: 'forgot_password',
  RESET_PASS: 'reset_password',
  LOGOUT: 'logout',
  ACCESS_TOKEN: 'get_access_token',
  VERIFY_OTP: 'verify_otp',
  INFO_CONST: 'register_user',
  RESEND_OTP: 'verify_otp/email_resend_otp',
  GET_PROFILE: 'get_profile.json',
  UPDATE_PROFILE: 'update_profile.json',
  RESEND_OTP: 'verify_otp/resend_otp',
  CARD_CONST: 'card',
  CARDS_CONST: 'cards',
  DELETE_CARD_CONST: 'delete_card',
  EDIT_CARD_CONST: 'update_card',
  DEFAULT_CARD_CONST: 'default_card',
  ADD_TO_BOOKMARKS: 'bookmarks',
  GET_BOOKMARKS: 'bookmarks/get_current_user_bookmark',
  FILTER_BOOKMARKS: 'bookmarks/filter_bookmarks',
  DELETE_BOOKMARKS: 'bookmarks',
  GET_QUERIES: 'tickets',
  ADD_QUERY: 'tickets',
};

export {BASE_URL, ENDPOINTS};
