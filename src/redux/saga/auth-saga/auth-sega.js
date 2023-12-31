import AsyncStorage from '@react-native-async-storage/async-storage';
import {takeLatest, put} from 'redux-saga/effects';
import {responseValidator} from '../../../shared/exporter';
import {
  forgotPassword,
  loginUser,
  registerUser,
  resetPassword,
  socialLogin,
  OTPVerify,
  resendOTP,
  addInfo,
  logoutUser,
} from '../../../shared/service/AuthService';
import * as types from '../../actions/types';

// *************Login Sega**************
export function* loginRequest() {
  yield takeLatest(types.LOGIN_REQUEST_REQUEST, login);
}
function* login(params) {
  try {
    const res = yield loginUser(params?.params);
    if (res) {
      yield put({
        type: types.LOGIN_REQUEST_SUCCESS,
        payload: res,
      });
      console.log(res);
      AsyncStorage.setItem('usertoken', res?.user?.auth_token);
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.LOGIN_REQUEST_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

// *************Social Login Login Sega**************
export function* socialLoginRequest() {
  yield takeLatest(types.SOCIAL_LOGIN_REQUEST, socialLoginUser);
}

function* socialLoginUser(params) {
  try {
    const res = yield socialLogin(params?.params);
    if (res) {
      yield put({
        type: types.SOCIAL_LOGIN_REQUEST_SUCCESS,
        payload: res,
      });
      yield put({
        type: types.LOGIN_REQUEST_SUCCESS,
        payload: res,
      });
      console.log(res);
      AsyncStorage.setItem('usertoken', res?.user?.auth_token);
      params?.cbSuccess(res);
    } else {
      yield put({
        type: types.SOCIAL_LOGIN_REQUEST_FAILURE,
        payload: null,
      });
      yield put({
        type: types.LOGIN_REQUEST_FAILURE,
        payload: res,
      });
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.SOCIAL_LOGIN_REQUEST_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status);
    params?.cbFailure(msg);
  }
}

// *************Sign Up Sega**************
export function* signUpRequest() {
  yield takeLatest(types.SIGNUP_REQUEST, signUp);
}

function* signUp(params) {
  try {
    const res = yield registerUser(params?.params);
    if (res) {
      console.log(res);
      params?.cbSuccess(res);
    }
  } catch (error) {
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

// *************Forgot Sega**************
export function* forgotPassRequest() {
  yield takeLatest(types.FORGOT_PASSWORD_REQUEST, forgot);
}

function* forgot(params) {
  try {
    const res = yield forgotPassword(params?.route, params?.params);
    if (res) {
      yield put({
        type: types.FORGOT_PASSWORD_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    yield put({
      type: types.FORGOT_PASSWORD_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

// *************Verify OTP Sega**************
export function* OTPVerifyRequest() {
  yield takeLatest(types.OTP_VERIFY_REQUEST, verifyOTP);
}

function* verifyOTP(params) {
  try {
    const res = yield OTPVerify(params?.params);
    if (res) {
      yield put({
        type: types.OTP_VERIFY_SUCCESS,
        payload: res,
      });
      console.log(res);
      AsyncStorage.setItem('usertoken', res?.user?.auth_token);
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.OTP_VERIFY_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

// *************Reset Password Sega**************
export function* resetPassRequest() {
  yield takeLatest(types.RESET_PASSWORD_REQUEST, resetPass);
}

function* resetPass(params) {
  try {
    const res = yield resetPassword(params?.route, params?.params);
    if (res) {
      yield put({
        type: types.RESET_PASSWORD_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    yield put({
      type: types.RESET_PASSWORD_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

//*************Walkthrough SEGA**************
export function* setUserTypeRequest() {
  yield takeLatest(types.USER_TYPE_REQUEST, user_type_request);
}
function* user_type_request(params) {
  console.log(params);
  try {
    yield put({
      type: types.USER_TYPE_SUCCESS,
      payload: params?.params,
    });
    params?.cbSuccess();
  } catch (error) {}
}
//************* Logout **************
export function* logoutRequestSega() {
  yield takeLatest(types.LOGOUT_REQUEST_REQUEST, logout);
}
function* logout(params) {
  try {
    const res = yield logoutUser(params?.params);
    yield put({
      type: types.LOGOUT_REQUEST_SUCCESS,
      payload: params,
    });
    params?.callBack();
  } catch (error) {
    console.log(error);
  }
}

// *************Resend OTP Sega**************
export function* resendOTPRequestSega() {
  yield takeLatest(types.RESEND_OTP_REQUEST, resend_otp);
}

function* resend_otp(params) {
  try {
    const res = yield resendOTP(params?.params);
    if (res) {
      yield put({
        type: types.RESEND_OTP_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    yield put({
      type: types.RESEND_OTP_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

// *************Add Info Sega**************
export function* addInfoRequestSega() {
  yield takeLatest(types.ADD_ADDITIONAL_INFO_REQUEST, add_info);
}

function* add_info(params) {
  try {
    const res = yield addInfo(params?.params);
    if (res) {
      yield put({
        type: types.ADD_ADDITIONAL_INFO_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log(error?.response);
    yield put({
      type: types.ADD_ADDITIONAL_INFO_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

// *************Support Info Sega**************
export function* supportInfoSega() {
  yield takeLatest(types.SET_SUPPORT_INFO_REQUEST, support_info);
}

function* support_info(params) {
  try {
    yield put({
      type: types.SET_SUPPORT_INFO_SUCCESS,
      payload: params?.params,
    });
    params?.callBack(params?.params);
  } catch (error) {
    console.log(error);
  }
}
