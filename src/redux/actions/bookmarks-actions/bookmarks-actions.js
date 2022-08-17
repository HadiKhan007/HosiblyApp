import * as TYPES from '../types';

// add to bookmarks
export const addToBookmarksRequest = (cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_BOOKMARKS_REQUEST,
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
export const filterBookmarksRequest = (cbSuccess, cbFailure) => {
  return {
    type: TYPES.FILTER_BOOKMARKS_REQUEST,
    cbSuccess,
    cbFailure,
  };
};

// delete from bookmarks
export const deleteBookmarkRequest = (cbSuccess, cbFailure) => {
  return {
    type: TYPES.REMOVE_BOOKMARK_REQUEST,
    cbSuccess,
    cbFailure,
  };
};
