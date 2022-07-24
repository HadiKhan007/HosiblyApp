import * as TYPES from '../types';

// update profile
export const add_property_detail_request = (params, cbSuccess) => {
  return {
    type: TYPES.ADD_PROPERTY_REQUEST,
    params,
    cbSuccess,
  };
};
