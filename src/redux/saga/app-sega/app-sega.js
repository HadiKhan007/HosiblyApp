import {takeLatest, put} from 'redux-saga/effects';
import {responseValidator} from '../../../shared/exporter';
import {
  getUserData,
  updateUserData,
} from '../../../shared/service/SettingsService';
import * as types from '../../actions/types';

// *************Get Profile Info**************
export function* addPropertyDetailRequest() {
  yield takeLatest(types.ADD_PROPERTY_REQUEST, addPropertyDetail);
}
function* addPropertyDetail(params) {
  try {
    yield put({
      type: types.ADD_PROPERTY_SUCCESS,
      payload: params?.params,
    });
    params?.cbSuccess(params.params);
  } catch (error) {
    console.log(error);
  }
}
