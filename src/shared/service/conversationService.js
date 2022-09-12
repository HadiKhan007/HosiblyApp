import {GetToken} from '../utilities/headers';
import {ENDPOINTS} from '../exporter';
import axios from 'axios';
import {BASE_URL} from '../exporter';

export const createConversation = async params => {
  const res = await axios.post(
    `${BASE_URL}${ENDPOINTS.CREATE_CONVERSATION}`,
    params,
    {
      headers: {
        Accept: 'application/json',
        auth_token: await GetToken(),
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return res.data;
};

export const createAdminConversation = async params => {
  const res = await axios.post(
    `${BASE_URL}${ENDPOINTS.CREATE_ADMIN_CONVERSATION}`,
    params,
    {
      headers: {
        Accept: 'application/json',
        auth_token: await GetToken(),
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return res.data;
};

export const deleteConversation = async id => {
  const res = await axios.delete(
    `${BASE_URL}${ENDPOINTS.DELETE_CONVERSATION}/${id}`,
    {
      headers: {
        Accept: 'application/json',
        auth_token: await GetToken(),
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return res.data;
};
export const getConversationList = async () => {
  const res = await axios.get(`${BASE_URL}${ENDPOINTS.GET_CONVERSATION_LIST}`, {
    headers: {
      Accept: 'application/json',
      auth_token: await GetToken(),
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};
export const send_message = async params => {
  const res = await axios.post(
    `${BASE_URL}${ENDPOINTS.SEND_MESSAGE}`,
    params?.params,
    {
      headers: {
        Accept: 'application/json',
        auth_token: await GetToken(),
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return res.data;
};

export const sendMessageToAdmin = async params => {
  // concatinate id with url is pending
  const res = await axios.post(
    `${BASE_URL}${ENDPOINTS.SEND_MESSAGE_TO_ADMIN}/${params?.id}/create_message`,
    params?.params,
    {
      headers: {
        Accept: 'application/json',
        auth_token: await GetToken(),
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return res.data;
};

export const getAllMessages = async params => {
  const res = await axios.post(
    `${BASE_URL}${ENDPOINTS.GET_ALL_MESSAGES}`,
    params?.params,
    {
      headers: {
        Accept: 'application/json',
        auth_token: await GetToken(),
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return res.data;
};

export const getAllAdminMessages = async id => {
  const res = await axios.post(
    `${BASE_URL}${ENDPOINTS.GET_ALL_ADMIN_MESSAGES}/${id}/get_messages`,
    {},
    {
      headers: {
        Accept: 'application/json',
        auth_token: await GetToken(),
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return res.data;
};

export const readMessages = async params => {
  const res = await axios.post(
    `${BASE_URL}${ENDPOINTS.READ_MESSAGES}`,
    params?.params,
    {
      headers: {
        Accept: 'application/json',
        auth_token: await GetToken(),
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return res.data;
};
export const reportUSer = async params => {
  const res = await axios.post(
    `${BASE_URL}${ENDPOINTS.REPORT_USER}`,
    params?.params,
    {
      headers: {
        Accept: 'application/json',
        auth_token: await GetToken(),
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return res.data;
};

export const blockUSer = async params => {
  const res = await axios.post(
    `${BASE_URL}${ENDPOINTS.BLOCK_USER}`,
    params?.params,
    {
      headers: {
        Accept: 'application/json',
        auth_token: await GetToken(),
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return res.data;
};
export const unBlockUSer = async params => {
  const res = await axios.post(`${BASE_URL}${ENDPOINTS.UNBLOCK_USER}`, params, {
    headers: {
      Accept: 'application/json',
      auth_token: await GetToken(),
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};
export const getBlockUSerList = async () => {
  const res = await axios.get(`${BASE_URL}${ENDPOINTS.GET_BLOCK_USER_LIST}`, {
    headers: {
      Accept: 'application/json',
      auth_token: await GetToken(),
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};

export const getAllNotificationList = async () => {
  const res = await axios.get(`${BASE_URL}${ENDPOINTS.GET_NOTIFICATION_LIST}`, {
    headers: {
      Accept: 'application/json',
      auth_token: await GetToken(),
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};

export const sendFcm = async params => {
  console.log('FCM PARAM SERVICE', params);
  const res = await axios.post(`${BASE_URL}${ENDPOINTS.SEND_FCM}`, params, {
    headers: {
      Accept: 'application/json',
      auth_token: await GetToken(),
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};
