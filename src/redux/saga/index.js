import {fork} from 'redux-saga/effects';
import {
  addPropertyDetailRequest,
  getAllPropertiesRequest,
  getFilteredPropertiesRequest,
  getRecentPropertiesRequest,
  setAddressRequest,
} from './app-sega/app-sega';

import {
  forgotPassRequest,
  loginRequest,
  signUpRequest,
  setUserTypeRequest,
  resetPassRequest,
  socialLoginRequest,
  logoutRequestSega,
  OTPVerifyRequest,
  resendOTPRequestSega,
  addInfoRequestSega,
} from './auth-saga/auth-sega';

import {
  addcardRequest,
  defaultCardRequest,
  delCardRequest,
  editcardRequest,
  getdefaultCardRequest,
  getPaymentCardRequest,
  getProfileRequest,
  payWithDebitRequest,
  updateProfileRequest,
} from './settings-saga/settings-saga';

export function* rootSaga() {
  yield fork(loginRequest);
  yield fork(signUpRequest);
  yield fork(setUserTypeRequest);
  yield fork(forgotPassRequest);
  yield fork(resetPassRequest);
  yield fork(socialLoginRequest);
  yield fork(logoutRequestSega);
  yield fork(OTPVerifyRequest);
  yield fork(resendOTPRequestSega);
  yield fork(addInfoRequestSega);
  yield fork(getProfileRequest);
  yield fork(updateProfileRequest);

  //Payments
  yield fork(addcardRequest);
  yield fork(getPaymentCardRequest);
  yield fork(delCardRequest);
  yield fork(defaultCardRequest);
  yield fork(editcardRequest);
  yield fork(payWithDebitRequest);
  yield fork(getdefaultCardRequest);
  yield fork(addPropertyDetailRequest);
  yield fork(setAddressRequest);

  //Properties
  yield fork(getRecentPropertiesRequest);
  yield fork(getFilteredPropertiesRequest);
  yield fork(getAllPropertiesRequest);
}
