import * as TYPES from '../../actions/types';

const initialState = {
  loading: false,
  isSuccess: false,
  isFailure: false,
  mapResults: null,
  schools: null,
};

const mapReducers = (state = initialState, actions) => {
  const {type, payload} = actions;
  switch (type) {
    case TYPES.SEARCH_ON_MAP_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        mapResults: payload,
      };
    case TYPES.SEARCH_ON_MAP_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        mapResults: payload,
      };
    case TYPES.SCHOOLS_ON_MAP_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        schools: payload,
      };
    case TYPES.SCHOOLS_ON_MAP_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        schools: payload,
      };
    default:
      return state;
  }
};

export default mapReducers;
