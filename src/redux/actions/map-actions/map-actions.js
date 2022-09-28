import * as TYPES from '../types';

// search on map
export const searchOnMap = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.SEARCH_ON_MAP_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

// property info
export const getPropertyInfo = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_PROPERTY_INFO_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

// schools on map
export const schoolsOnMap = (cbSuccess, cbFailure) => {
  return {
    type: TYPES.SCHOOLS_ON_MAP_REQUEST,
    cbSuccess,
    cbFailure,
  };
};

// schools on map
export const getSchoolInfo = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_SCHOOL_INFO_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
