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
export const deleteConversation = async params => {
  const res = await axios.post(
    `${BASE_URL}${ENDPOINTS.DELETE_CONVERSATION}`,
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
  const res = await axios.post(`${BASE_URL}${ENDPOINTS.REPORT_USER}`, params, {
    headers: {
      Accept: 'application/json',
      auth_token: await GetToken(),
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};

export const blockUSer = async params => {
  console.log('PARAM BLOCK ', params);
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

export const getNotificationList = async params => {
  const res = await axios.post(
    `${BASE_URL}${ENDPOINTS.GET_NOTIFICATION_LIST}`,
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
export const sendFcm = async params => {
  const res = await axios.post(`${BASE_URL}${ENDPOINTS.SEND_FCM}`, params, {
    headers: {
      Accept: 'application/json',
      auth_token: await GetToken(),
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};
