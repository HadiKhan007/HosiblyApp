import axios from 'axios';
import {Alert} from 'react-native';
import {BASE_URL, ENDPOINTS} from '../exporter';
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
//Get Reveiws
export const getSupportReviewsApi = async params => {
  const res = await axios.post(`${BASE_URL}reviews/get_reviews`, params, {
    headers: {
      auth_token: await GetToken(),
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  });
  return res?.data;
};

//Get Support Visitor
export const getSupportVisitorApi = async () => {
  const res = await axios.get(`${BASE_URL}profile_visitor_list`, {
    headers: {
      auth_token: await GetToken(),
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  });
  return res?.data;
};

//Update Info
export const updateSupportUserData = async params => {
  const res = await axios.put(
    `${BASE_URL}${ENDPOINTS.UPDATE_SUPPORT_CONST}.json`,
    params,
    {
      headers: {
        auth_token: await GetToken(),
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return res.data;
};
// Payment package

export const paymentPackageApi = async params => {
  const res = await axios.get(`${BASE_URL}${ENDPOINTS.GET_PAYMENT_PACKAGE}`, {
    headers: {
      Accept: 'application/json',
      auth_token: await GetToken(),
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};
export const createSubscription = async params => {
  const res = await axios.post(
    `${BASE_URL}${ENDPOINTS.CREATE_SUBSCRIPTION}`,
    params,
    {
      headers: {
        Accept: 'application/json',
        auth_token: await GetToken(),
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  console.log('LOG SUBSCRIPTION==> ', res?.data);
  return res.data;
};
export const cancelSubscription = async params => {
  console.log('CANCEL PARAMS', params);

  const res = await axios.post(
    `${BASE_URL}${ENDPOINTS.CANCEL_SUBSCRIPTION}`,
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
export const getSubscription = async params => {
  const res = await axios.get(`${BASE_URL}${ENDPOINTS.GET_SUBSCRIPTION}`, {
    headers: {
      Accept: 'application/json',
      auth_token: await GetToken(),
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};
