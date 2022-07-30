import * as TYPES from '../types';

// ADD Property profile
export const add_property_detail_request = (params, cbSuccess) => {
  return {
    type: TYPES.ADD_PROPERTY_REQUEST,
    params,
    cbSuccess,
  };
};

export const set_address_request = (params, cbSuccess) => {
  return {
    type: TYPES.SET_ADDRESS_REQUEST,
    params,
    cbSuccess,
  };
};
