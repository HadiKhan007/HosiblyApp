import * as TYPES from '../types';

// get profile info
export const getProfileRequest = (cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_PROFILE_REQUEST,
    cbSuccess,
    cbFailure,
  };
};

// update profile
export const updateProfileRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.UPDATE_PROFILE_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
