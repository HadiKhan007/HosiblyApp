import {combineReducers} from 'redux';
import authReducer from './auth-reducers/auth-reducer';
import settingsReducers from './settings-reducers/settings-reducers';
import bookmarksReducers from './bookmarks-reducers/bookmarks-reducers';
import appReducer from './app-reducers/app-reducers';
import supportReducer from './support-user-reducers/support-user-reducers';
import mapReducer from './map-reducers/map-reducers';

import * as types from '../actions/types';

const root_reducer = combineReducers({
  /* your app’s top-level reducers */
  auth: authReducer,
  settings: settingsReducers,
  bookmarks: bookmarksReducers,
  appReducer: appReducer,
  appReducer: appReducer,
  supportReducer: supportReducer,
  mapReducer: mapReducer,
});

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === types.LOGOUT_REQUEST_SUCCESS) {
    state = undefined;
  }

  return root_reducer(state, action);
};

export default rootReducer;
