import {takeLatest, put} from 'redux-saga/effects';
import {responseValidator} from '../../../shared/exporter';
import {search} from '../../../shared/service/MapService';
import * as types from '../../actions/types';

// search on map
export function* searchOnMap() {
  yield takeLatest(types.SEARCH_ON_MAP_REQUEST, mapSearch);
}

function* mapSearch(params) {
  try {
    const res = yield search(params?.params);
    if (res) {
      yield put({
        type: types.SEARCH_ON_MAP_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.SEARCH_ON_MAP_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

// schools on map
export function* schoolsOnMap() {
  yield takeLatest(types.SCHOOLS_ON_MAP_REQUEST, schoolsSearch);
}

function* schoolsSearch(params) {
  try {
    const res = yield findSchools(params?.params);
    if (res) {
      yield put({
        type: types.SCHOOLS_ON_MAP_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.SCHOOLS_ON_MAP_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}
