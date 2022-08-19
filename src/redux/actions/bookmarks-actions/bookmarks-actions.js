import * as TYPES from '../types';

// add to bookmarks
export const addToBookmarksRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.ADD_TO_BOOKMARKS_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

// get all bookmarks
export const getBookmarksRequest = (cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_BOOKMARKS_REQUEST,
    cbSuccess,
    cbFailure,
  };
};

// filter all bookmarks
export const filterBookmarksRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.FILTER_BOOKMARKS_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

// delete from bookmarks
export const deleteBookmarkRequest = (id, cbSuccess, cbFailure) => {
  return {
    type: TYPES.REMOVE_BOOKMARK_REQUEST,
    id,
    cbSuccess,
    cbFailure,
  };
};
