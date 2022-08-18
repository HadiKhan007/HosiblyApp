import {takeLatest, put} from 'redux-saga/effects';
import {responseValidator} from '../../../shared/exporter';
import {
  addBookmarks,
  getAllBookmarks,
  getFilteredBookmarks,
} from '../../../shared/service/BookmarksService';
import * as types from '../../actions/types';

// add to bookmarks list
export function* addToBookmarksRequest() {
  yield takeLatest(types.ADD_TO_BOOKMARKS_REQUEST, addToBookmarks);
}

function* addToBookmarks(params) {
  try {
    const res = yield addBookmarks();
    if (res) {
      yield put({
        type: types.ADD_TO_BOOKMARKS_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.ADD_TO_BOOKMARKS_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

// get all bookmarks
export function* getBookmarksRequest() {
  yield takeLatest(types.GET_BOOKMARKS_REQUEST, getBookmarks);
}

function* getBookmarks(params) {
  try {
    const res = yield getAllBookmarks();
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

// get filtered bookmarks
export function* filterBookmarksRequest() {
  yield takeLatest(types.FILTER_BOOKMARKS_REQUEST, getFilterBookmarks);
}

function* getFilterBookmarks(params) {
  try {
    const res = yield getFilteredBookmarks();
    if (res) {
      yield put({
        type: types.FILTER_BOOKMARKS_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.FILTER_BOOKMARKS_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

// delete bookmark
export function* deleteBookmarkRequest() {
  yield takeLatest(types.REMOVE_BOOKMARK_REQUEST, deleteBookmark);
}

function* deleteBookmark(params) {
  try {
    const res = yield removeBookmark();
    if (res) {
      yield put({
        type: types.REMOVE_BOOKMARK_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.REMOVE_BOOKMARK_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}
