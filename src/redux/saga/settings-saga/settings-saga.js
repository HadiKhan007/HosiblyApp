import {takeLatest, put} from 'redux-saga/effects';
import {responseValidator} from '../../../shared/exporter';
import {
  getUserData,
  updateUserData,
} from '../../../shared/service/SettingsService';
import * as types from '../../actions/types';

// *************Get Profile Info**************
export function* getProfileRequest() {
  yield takeLatest(types.GET_PROFILE_REQUEST, getProfile);
}
function* getProfile(params) {
  try {
    const res = yield getUserData();
    if (res) {
      yield put({
        type: types.GET_PROFILE_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.GET_PROFILE_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

// *************Update Profile Request**************
export function* updateProfileRequest() {
  yield takeLatest(types.UPDATE_PROFILE_REQUEST, updateProfile);
}

function* updateProfile(params) {
  try {
    const res = yield updateUserData(params?.params);
    if (res) {
      yield put({
        type: types.UPDATE_PROFILE_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    } else {
      yield put({
        type: types.UPDATE_PROFILE_FAILURE,
        payload: null,
      });
      params?.cbFailure(res?.data);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.UPDATE_PROFILE_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status);
    params?.cbFailure(msg);
  }
}
