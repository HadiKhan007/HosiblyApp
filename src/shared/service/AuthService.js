import axios from 'axios';
import {BASE_URL, ENDPOINTS, HTTP_CLIENT} from '../exporter';
//Authentication Requests
export const registerUser = params => {
  return HTTP_CLIENT.post(ENDPOINTS.REGISTER, params);
};
export const loginUser = async params => {
  const res = await axios.post(`${BASE_URL}${ENDPOINTS.LOGIN}`, params, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};
export const socialLogin = (logintype, params) => {
  return HTTP_CLIENT.post(
    `${
      logintype == 'google'
        ? ENDPOINTS.GOOGLE_SIGN_IN
        : ENDPOINTS?.APPLE_SIGN_IN
    }`,
    params,
  );
};
export const forgotPassword = (route, params) => {
  return HTTP_CLIENT.post(`${ENDPOINTS.FORGOT_PASS}/${route}`, params);
};
export const OTPVerify = params => {
  return HTTP_CLIENT.post(ENDPOINTS.VERIFY_OTP, params);
};
export const resetPassword = params => {
  return HTTP_CLIENT.post(ENDPOINTS.RESET_PASS, params);
};
export const logoutUser = () => {
  return HTTP_CLIENT.post(ENDPOINTS.LOGOUT);
};
