import {fork} from 'redux-saga/effects';
import {
  addPropertyDetailRequest,
  getAllPropertiesRequest,
  getFilteredPropertiesRequest,
  getRecentPropertiesRequest,
  setAddressRequest,
  setBuyerDataRequest,
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
  supportInfoSega,
} from './auth-saga/auth-sega';

import {
  addcardRequest,
  defaultCardRequest,
  delCardRequest,
  editcardRequest,
  getdefaultCardRequest,
  getPaymentCardRequest,
  getProfileRequest,
  getStaticPagesSaga,
  payWithDebitRequest,
  updateProfileRequest,
  getQueriesSaga,
  addQuerySaga,
} from './settings-saga/settings-saga';

import {
  addToBookmarksRequest,
  getBookmarksRequest,
  filterBookmarksRequest,
  deleteBookmarkRequest,
} from './bookmarks-saga/bookmarks-saga';

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
  yield fork(supportInfoSega);
  yield fork(getStaticPagesSaga);
  yield fork(getQueriesSaga);
  yield fork(addQuerySaga);

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

  //Bookmarks
  yield fork(addToBookmarksRequest);
  yield fork(getBookmarksRequest);
  yield fork(filterBookmarksRequest);
  yield fork(deleteBookmarkRequest);
  yield fork(setBuyerDataRequest);
}
