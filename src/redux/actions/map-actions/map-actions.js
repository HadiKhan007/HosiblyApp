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

// schools on map
export const schoolsOnMap = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.SCHOOLS_ON_MAP_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
