// const BASE_URL = 'https://housibly.herokuapp.com/api/v1/';
// const CHAT_URL = 'ws://housibly.herokuapp.com/cable?';
const BASE_URL = 'https://demohousibly.herokuapp.com/api/v1/';
const CHAT_URL = 'https://demohousibly.herokuapp.com/cable?';

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
  REVIEW_CONST: 'reviews',

  // Support
  UPDATE_SUPPORT_CONST: 'update_support_closer_profile',

  // Conversation
  CREATE_CONVERSATION: 'conversations',
  GET_CONVERSATION_LIST: 'conversations',
  DELETE_CONVERSATION: 'conversations',
  GET_ALL_MESSAGES: 'messages/get_messages',
  GET_ALL_ADMIN_MESSAGES: 'support_conversations',
  SEND_MESSAGE_TO_ADMIN: 'support_conversations',
  CREATE_ADMIN_CONVERSATION: 'support_conversations',

  SEND_MESSAGE: 'messages',
  READ_MESSAGES: 'conversations/read_messages',
  REPORT_USER: 'reporting',
  BLOCK_USER: 'block_unblock_user',
  GET_BLOCK_USER_LIST: 'blocked_users',
  UNBLOCK_USER: '',
  GET_NOTIFICATION_LIST: 'messages/get_notification',
  SEND_FCM: 'conversations/notification_token',
  GET_DREAM_ADRRESS: 'dream_addresses',
  DELETE_DREAM_ADDRESS: 'dream_addresses',
  CREATE_DREAM_ADDRESS: 'dream_addresses',
  // Payment
  GET_PAYMENT_PACKAGE: 'get_pakeges',
  CREATE_SUBSCRIPTION: 'create_subscription',
  CANCEL_SUBSCRIPTION: 'cancel_subscription',
  GET_SUBSCRIPTION: 'get_subscription',
};

export {BASE_URL, ENDPOINTS, CHAT_URL};
