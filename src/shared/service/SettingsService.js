import {retry} from 'redux-saga/effects';
import {HTTP_CLIENT, ENDPOINTS} from '../exporter';
import axios from 'axios';
import {GetToken} from '../utilities/headers';
import {BASE_URL} from '../utilities/endpoints';

export const getUserData = async () => {
  const res = await axios.get(`${BASE_URL}${ENDPOINTS.GET_PROFILE}`, {
    headers: {
      auth_token: await GetToken(),
    },
  });
  return res.data;
};

export const updateUserData = async params => {
  const res = await axios.put(
    `${BASE_URL}${ENDPOINTS.UPDATE_PROFILE}`,
    params,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        auth_token: await GetToken(),
      },
    },
  );
  return res.data;
};
