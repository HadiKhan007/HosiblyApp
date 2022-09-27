import {fork} from 'redux-saga/effects';
import {
  addPropertyDetailRequest,
  getAllPropertiesRequest,
  getBuyerDataRequest,
  getFilteredPropertiesRequest,
  getFilterReviewRequest,
  getRecentPropertiesRequest,
  setAddressRequest,
  setBuyerDataRequest,
  DreamAddressRequest,
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

import {
  getSupportUserDataRequest,
  setSupportUserRequest,
  getPaymentPackage,
} from './support-user-sega/support-user-sega';

import {searchOnMap, schoolsOnMap} from './map-saga/map-saga';

import {ConversationSaga} from './conversation-saga/conversation-saga';

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
  yield fork(setBuyerDataRequest);
  yield fork(getBuyerDataRequest);

  //Properties
  yield fork(getRecentPropertiesRequest);
  yield fork(getFilteredPropertiesRequest);
  yield fork(getAllPropertiesRequest);

  //Bookmarks
  yield fork(addToBookmarksRequest);
  yield fork(getBookmarksRequest);
  yield fork(filterBookmarksRequest);
  yield fork(deleteBookmarkRequest);

  //Support Users
  yield fork(getSupportUserDataRequest);
  yield fork(setSupportUserRequest);
  yield fork(getFilterReviewRequest);

  // Map Search
  yield fork(searchOnMap);
  yield fork(schoolsOnMap);

  // Conversation
  yield fork(ConversationSaga);
  // Dream address
  yield fork(DreamAddressRequest);
  // Payment Package
  yield fork(getPaymentPackage);
}
