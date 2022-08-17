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
//Get Recent Properties
export const get_recent_properties = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_RECENT_PROPERTIES_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Get Filtered Properties
export const get_filtered_properties = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_FILTERED_PROPERTIES_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Get All Properties
export const get_all_properties = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_ALL_PROPERTIES_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Buyers
//Get All Properties
export const set_buyer_properties = (params, cbSuccess) => {
  return {
    type: TYPES.ADD_BUYER_DATA_SUCCESS,
    params,
    cbSuccess,
  };
};
