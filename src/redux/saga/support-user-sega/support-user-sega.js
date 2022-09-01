import {takeLatest, put} from 'redux-saga/effects';
import {responseValidator} from '../../../shared/exporter';
import {getSupportUsersApi} from '../../../shared/service/SupportService';

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
    // const res = yield getSupportUsersApi();
    // if (res) {
    yield put({
      type: types.SELECTED_SUPPORT_USER_SUCCESS,
      payload: params?.params,
    });
    params?.cbSuccess(params?.params);
    // }
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
