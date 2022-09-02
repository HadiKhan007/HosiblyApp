import axios from 'axios';
import {Alert} from 'react-native';
import {BASE_URL, ENDPOINTS, responseValidator} from '../exporter';
import {GetToken} from '../utilities/headers';

export const getSupportUsersApi = async () => {
  const res = await axios.get(`${BASE_URL}get_support_closers`, {
    headers: {
      auth_token: await GetToken(),
      Accept: 'application/json',
    },
  });
  return res?.data;
};

export const addSupportReviewApi = async params => {
  const res = await axios.post(`${BASE_URL}reviews`, params, {
    headers: {
      auth_token: await GetToken(),
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  });
  return res?.data;
};

export const getSupportUserProfileApi = async params => {
  const res = await axios.post(`${BASE_URL}support_closer_profile`, params, {
    headers: {
      auth_token: await GetToken(),
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  });
  return res?.data;
};
