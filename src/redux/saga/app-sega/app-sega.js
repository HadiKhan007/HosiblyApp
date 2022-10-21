import {takeLatest, put} from 'redux-saga/effects';
import {responseValidator} from '../../../shared/exporter';
import {
  getFilterReviewApi,
  getDreamAddress,
  deleteDreamAddress,
  createDreamAddress,
  getMatchList,
  updateInfoSocialLoginService,
} from '../../../shared/service/AppService';
import {
  addBuyerPreferences,
  getAllProperties,
  getBuyerPreferences,
  getFilteredProperties,
  getRecentProperties,
  filterProperty,
  searchAddress,
} from '../../../shared/service/PropertyService';

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

// *************Get Properties**************

export function* getRecentPropertiesRequest() {
  yield takeLatest(types.GET_RECENT_PROPERTIES_REQUEST, getRecentProp);
}
function* getRecentProp(params) {
  try {
    const res = yield getRecentProperties();
    yield put({
      type: types.GET_RECENT_PROPERTIES_SUCCESS,
      payload: res,
    });
    params?.cbSuccess(res);
  } catch (error) {
    yield put({
      type: types.GET_RECENT_PROPERTIES_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

//Get all
export function* getAllPropertiesRequest() {
  yield takeLatest(types.GET_ALL_PROPERTIES_REQUEST, getAllProp);
}
function* getAllProp(params) {
  try {
    const res = yield getAllProperties();
    yield put({
      type: types.GET_ALL_PROPERTIES_SUCCESS,
      payload: res,
    });
    params?.cbSuccess(res);
  } catch (error) {
    yield put({
      type: types.GET_ALL_PROPERTIES_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

//Get filtered all
export function* getFilteredPropertiesRequest() {
  yield takeLatest(types.GET_FILTERED_PROPERTIES_REQUEST, getFilteredProp);
}
function* getFilteredProp(params) {
  try {
    const res = yield getFilteredProperties(params?.params);
    yield put({
      type: types.GET_FILTERED_PROPERTIES_SUCCESS,
      payload: res,
    });
    params?.cbSuccess(res);
  } catch (error) {
    yield put({
      type: types.GET_FILTERED_PROPERTIES_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

// *************SET ADDRESS Info**************
export function* setAddressRequest() {
  yield takeLatest(types.SET_ADDRESS_REQUEST, setAddress);
}
function* setAddress(params) {
  try {
    yield put({
      type: types.SET_ADDRESS_SUCCESS,
      payload: params?.params,
    });
    params?.cbSuccess(params.params);
  } catch (error) {
    console.log(error);
  }
}

// *************SET ADDRESS Info**************
export function* setBuyerDataRequest() {
  yield takeLatest(types.ADD_BUYER_DATA_REQUEST, addBuyerData);
}
function* addBuyerData(params) {
  try {
    if (params?.params?.save_data) {
      yield put({
        type: types.ADD_BUYER_DATA_SUCCESS,
        payload: params?.params,
      });
      params?.cbSuccess(params.params);
    } else {
      const res = yield addBuyerPreferences(params?.params);
      yield put({
        type: types.ADD_BUYER_DATA_SUCCESS,
        payload: null,
      });
      console.log(res);
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log(error);
  }
}

// *************SET ADDRESS Info**************
export function* getBuyerDataRequest() {
  yield takeLatest(types.GET_BUYER_DATA_REQUEST, getBuyerData);
}
function* getBuyerData(params) {
  try {
    const res = yield getBuyerPreferences(params?.params);

    yield put({
      type: types.GET_BUYER_DATA_SUCCESS,
      payload: res,
    });
    params?.cbSuccess(res);
  } catch (error) {
    console.log(error);
    yield put({
      type: types.GET_BUYER_DATA_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

//Get Filtered Reviews

export function* getFilterReviewRequest() {
  yield takeLatest(types.GET_FILTERED_REVIEWS_REQUEST, getFilterReview);
}
function* getFilterReview(params) {
  try {
    const res = yield getFilterReviewApi(params?.params);

    yield put({
      type: types.GET_FILTERED_REVIEWS_SUCCESS,
      payload: res,
    });
    params?.cbSuccess(res);
  } catch (error) {
    console.log(error);
    yield put({
      type: types.GET_FILTERED_REVIEWS_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}
// Dream address

export function* DreamAddressRequest() {
  yield takeLatest(types.GET_DREAM_ADDRESS_REQUEST, getDreamAddressSaga);
  yield takeLatest(types.DELETE_DREAM_ADDRESS_REQUEST, deleteDreamAddressSaga);
  yield takeLatest(types.DREAM_ADDRESS_SEARCH_REQUEST, searchDreamAddressSaga);
  yield takeLatest(types.GET_MATCH_LIST_REQUEST, getMyMatchListSaga);
  yield takeLatest(
    types.UPDATE_INFO_SOCIAL_LOGIN_REQUEST,
    updateInfoSocialLogin,
  );
  yield takeLatest(types.PROPERTY_FILTER_REQUEST, propertyFilterSaga);
  yield takeLatest(types.SEARCH_BY_ADDRESS_REQUEST, searchbyAddress);
  // propertyFilterSaga
}
function* getDreamAddressSaga(params) {
  try {
    const res = yield getDreamAddress(params);
    yield put({
      type: types.GET_DREAM_ADDRESS_SUCCESS,
      payload: res,
    });
    params?.cbSuccess(res);
  } catch (error) {
    console.log(error);
    yield put({
      type: types.GET_DREAM_ADDRESS_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}
function* deleteDreamAddressSaga(params) {
  try {
    const res = yield deleteDreamAddress(params?.id);

    yield put({
      type: types.DELETE_DREAM_ADDRESS_SUCCESS,
      payload: res,
    });
    params?.cbSuccess(res);
  } catch (error) {
    console.log(error);
    yield put({
      type: types.DELETE_DREAM_ADDRESS_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}
function* searchDreamAddressSaga(params) {
  try {
    const res = yield createDreamAddress(params?.data);
    yield put({
      type: types.DREAM_ADDRESS_SEARCH_SUCCESS,
      payload: res,
    });
    params?.cbSuccess(res);
  } catch (error) {
    console.log(error);
    yield put({
      type: types.DREAM_ADDRESS_SEARCH_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}
function* getMyMatchListSaga(params) {
  try {
    const res = yield getMatchList(params?.data);
    yield put({
      type: types.GET_MATCH_LIST_SUCCESS,
      payload: res,
    });
    params?.cbSuccess(res);
  } catch (error) {
    console.log(error);
    yield put({
      type: types.GET_MATCH_LIST_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(error);
  }
}
// *********** update info social login
function* updateInfoSocialLogin(params) {
  try {
    const res = yield updateInfoSocialLoginService(params?.params);
    yield put({
      type: types.UPDATE_INFO_SOCIAL_LOGIN_SUCCESS,
      payload: res,
    });
    params?.cbSuccess(res);
  } catch (error) {
    yield put({
      type: types.UPDATE_INFO_SOCIAL_LOGIN_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}
function* propertyFilterSaga(params) {
  try {
    const res = yield filterProperty(params?.params);
    yield put({
      type: types.PROPERTY_FILTER_SUCCESS,
      payload: res,
    });
    params?.cbSuccess(res);
  } catch (error) {
    yield put({
      type: types.PROPERTY_FILTER_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

function* searchbyAddress(params) {
  try {
    const res = yield searchAddress(params?.data);
    yield put({
      type: types.SEARCH_BY_ADDRESS_SUCCESS,
      payload: res,
    });
    params?.cbSuccess(res);
  } catch (error) {
    yield put({
      type: types.SEARCH_BY_ADDRESS_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}
