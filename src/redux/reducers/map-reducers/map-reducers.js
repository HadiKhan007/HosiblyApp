import * as TYPES from '../../actions/types';

const initialState = {
  loading: false,
  isSuccess: false,
  isFailure: false,
  mapResults: null,
  proeprtyInfo: null,
  schools: null,
  schoolInfo: null,
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
        mapResults: null,
      };
    case TYPES.GET_PROPERTY_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        proeprtyInfo: payload,
      };
    case TYPES.GET_PROPERTY_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        proeprtyInfo: null,
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
        schools: null,
      };
    case TYPES.GET_SCHOOL_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        schoolInfo: payload,
      };
    case TYPES.GET_SCHOOL_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        schoolInfo: null,
      };
    default:
      return state;
  }
};

export default mapReducers;
