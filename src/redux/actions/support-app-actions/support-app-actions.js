import * as TYPES from '../types';

// ADD Property profile
export const get_suuport_users = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.SUPPORT_USER_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

// Selected Support Data
export const selected_suuport_user_data = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.SELECTED_SUPPORT_USER_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
