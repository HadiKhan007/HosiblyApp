import {takeLatest, put} from 'redux-saga/effects';
import {responseValidator} from '../../../shared/exporter';
import {
  getSupportUserProfileApi,
  getSupportUsersApi,
  paymentPackageApi,
  createSubscription,
  cancelSubscription,
  getSubscription,
} from '../../../shared/service/SupportService';

import * as types from '../../actions/types';

// *************SET ADDRESS Info**************
export function* getSupportUserDataRequest() {
  yield takeLatest(types.SUPPORT_USER_REQUEST, getSupportUser);
}
function* getSupportUser(params) {
  try {
    const res = yield getSupportUsersApi();
    if (res) {
      yield put({
        type: types.SUPPORT_USER_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.SUPPORT_USER_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

// *************SET Support User Info**************
export function* setSupportUserRequest() {
  yield takeLatest(types.SELECTED_SUPPORT_USER_REQUEST, setSupportUser);
}
function* setSupportUser(params) {
  try {
    const res = yield getSupportUserProfileApi(params?.params);
    if (res) {
      yield put({
        type: types.SELECTED_SUPPORT_USER_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.SELECTED_SUPPORT_USER_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}
// Get payment package
export function* getPaymentPackage() {
  yield takeLatest(types.GET_PAYMENT_PACKAGE_REQUEST, getPaymentPackages);
  yield takeLatest(types.CREATE_SUBSCRIPTION_REQUEST, createSubcription);
  yield takeLatest(types.CANCEL_SUBSCRIPTION_REQUEST, cancelSubcription);
  yield takeLatest(types.GET_SUBSCRIPTION_REQUEST, getSubcriptionRequest);
}
function* getPaymentPackages(params) {
  try {
    const res = yield paymentPackageApi(params);
    if (res) {
      yield put({
        type: types.GET_PAYMENT_PACKAGE_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.GET_PAYMENT_PACKAGE_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

function* createSubcription(params) {
  try {
    const res = yield createSubscription(params?.data);
    if (res) {
      yield put({
        type: types.CREATE_SUBSCRIPTION_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log('ERROR IS ==> ', error?.response);
    yield put({
      type: types.CREATE_SUBSCRIPTION_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}
function* cancelSubcription(params) {
  try {
    const res = yield cancelSubscription(params?.params);
    if (res) {
      yield put({
        type: types.CANCEL_SUBSCRIPTION_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.CANCEL_SUBSCRIPTION_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}
function* getSubcriptionRequest(params) {
  try {
    const res = yield getSubscription(params);
    if (res) {
      yield put({
        type: types.GET_SUBSCRIPTION_SUCCESS,
        payload: res,
      });

      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.GET_SUBSCRIPTION_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}
