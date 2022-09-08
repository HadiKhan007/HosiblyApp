import * as TYPES from '../types';

export const send_FCM_Request = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.SEND_FCM_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
export const createConversationRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.CREATE_CONVERSATION_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
export const getconversationListRequest = (cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_CONVERSATION_LIST_REQUEST,
    cbSuccess,
    cbFailure,
  };
};
export const deleteConversationRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.DELETE_CONVERSATION_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
export const getAllMessagesRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_ALL_MESSAGES_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
export const readMessagesRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.READ_MESSAGES_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
export const reportUserRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.REPORT_USER_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
export const blockUserRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.BLOCK_USER_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
export const getBlockUserListRequest = (cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_BLOCK_USER_LIST_REQUEST,
    // params,
    cbSuccess,
    cbFailure,
  };
};
export const unBlockUserRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.UNBLOCK_USER_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
export const getNotificationListRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_NOTIFICATION_LIST_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
export const sendMessage = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.SEND_MESSAGES_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
