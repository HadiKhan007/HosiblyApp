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
    type: TYPES.ADD_BUYER_DATA_REQUEST,
    params,
    cbSuccess,
  };
};

//Get All preferences
export const get_buyer_properties = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_BUYER_DATA_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Get All preferences
export const get_filter_review_properties = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_FILTERED_REVIEWS_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
// Dream Address
export const dreamAddressSearch = (data, cbSuccess, cbFailure) => {
  return {
    type: TYPES.DREAM_ADDRESS_SEARCH_REQUEST,
    data,
    cbSuccess,
    cbFailure,
  };
};
export const getDreamAddressAction = (cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_DREAM_ADDRESS_REQUEST,
    cbSuccess,
    cbFailure,
  };
};
export const deleteDreamAddressAction = (id, cbSuccess, cbFailure) => {
  return {
    type: TYPES.DELETE_DREAM_ADDRESS_REQUEST,
    id,
    cbSuccess,
    cbFailure,
  };
};
export const getMyMatchListAction = (cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_MATCH_LIST_REQUEST,
    cbSuccess,
    cbFailure,
  };
};
export const propertyFilterAction = (cbSuccess, cbFailure) => {
  return {
    type: TYPES.PROPERTY_FILTER_REQUEST,
    cbSuccess,
    cbFailure,
  };
};
export const searchAddress = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.SEARCH_BY_ADDRESS_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
