import * as TYPES from '../../actions/types';

const initialState = {
  loading: false,
  isSuccess: false,
  isFailure: false,
  bookmarks: null,
  filteredBookmarks: null,
};

const bookmarksReducers = (state = initialState, actions) => {
  const {type, payload} = actions;
  switch (type) {
    case TYPES.ADD_TO_BOOKMARKS_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.ADD_TO_BOOKMARKS_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
      };
    case TYPES.GET_BOOKMARKS_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        bookmarks: payload,
      };
    case TYPES.GET_BOOKMARKS_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        bookmarks: null,
      };
    case TYPES.FILTER_BOOKMARKS_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        filteredBookmarks: payload,
      };
    case TYPES.FILTER_BOOKMARKS_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        filteredBookmarks: null,
      };
    case TYPES.REMOVE_BOOKMARK_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.REMOVE_BOOKMARK_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
      };
    default:
      return state;
  }
};

export default bookmarksReducers;
