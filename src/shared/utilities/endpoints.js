const BASE_URL = 'https://housibly.herokuapp.com/api/v1/';
const CHAT_URL = 'ws://housibly.herokuapp.com/cable?';

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

  // Support
  UPDATE_SUPPORT_CONST: 'update_support_closer_profile',

  // Conversation
  CREATE_CONVERSATION: '',
  GET_CONVERSATION_LIST: 'conversations',
  DELETE_CONVERSATION: '',
  GET_ALL_MESSAGES: 'messages/get_messages',
  SEND_MESSAGE: 'messages',
  READ_MESSAGES: 'conversations/read_messages',
  REPORT_USER: '',
  BLOCK_USER: 'block_unblock_user',
  GET_BLOCK_USER_LIST: 'blocked_users',
  UNBLOCK_USER: '',
  GET_NOTIFICATION_LIST: '',
  SEND_FCM: '',
};

export {BASE_URL, ENDPOINTS, CHAT_URL};
