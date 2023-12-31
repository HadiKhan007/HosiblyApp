import axios from 'axios';
import {BASE_URL, ENDPOINTS, HTTP_CLIENT} from '../exporter';
import {GetToken} from '../utilities/headers';
//Authentication Requests
export const registerUser = async params => {
  const res = await axios.post(`${BASE_URL}${ENDPOINTS.REGISTER}`, params, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};

export const loginUser = async params => {
  const res = await axios.post(`${BASE_URL}${ENDPOINTS.LOGIN}.json`, params, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};

export const socialLogin = async params => {
  const res = await axios.post(`${BASE_URL}${ENDPOINTS.SOCIAL_LOGIN}`, params, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};

export const forgotPassword = async (route, params) => {
  const res = await axios.post(
    `${BASE_URL}${ENDPOINTS.FORGOT_PASS}/${route}`,
    params,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return res.data;
};

export const OTPVerify = async params => {
  const res = await axios.post(
    `${BASE_URL}${ENDPOINTS.VERIFY_OTP}.json`,
    params,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return res.data;
};

export const resetPassword = async (route, params) => {
  const res = await axios.post(
    `${BASE_URL}${ENDPOINTS.RESET_PASS}/${route}`,
    params,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return res.data;
};

export const logoutUser = async params => {
  const res = await axios.post(`${BASE_URL}conversations/logout`, params, {
    headers: {
      'Content-Type': 'multipart/form-data',
      auth_token: await GetToken(),
    },
  });
  return res.data;
};

export const resendOTP = async params => {
  const res = await axios.post(`${BASE_URL}${ENDPOINTS.RESEND_OTP}`, params, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};

export const addInfo = async params => {
  console.log('PARAMS==> now ', params);
  let token = await GetToken();
  console.log('token==> now ', token);

  const res = await axios.post(`${BASE_URL}${ENDPOINTS.INFO_CONST}`, params, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      auth_token: await GetToken(),
    },
  });
  return res.data;
};
