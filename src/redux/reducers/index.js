import {combineReducers} from 'redux';
import authReducer from './auth-reducers/auth-reducer';
import settingsReducers from './settings-reducers/settings-reducers';
import * as types from '../actions/types';

const appReducer = combineReducers({
  /* your app’s top-level reducers */
  auth: authReducer,
  settings: settingsReducers,
});

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === types.LOGOUT_REQUEST_SUCCESS) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
