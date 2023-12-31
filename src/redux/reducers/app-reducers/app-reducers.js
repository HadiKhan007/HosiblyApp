import * as TYPES from '../../actions/types';

const initialState = {
  loading: false,
  isSuccess: false,
  isFailure: false,
  add_property_detail: null,
  address: '',
  recent_properties: [],
  all_properties: [],
  filtered_properties: [],
  buyer_preferences: '',
  buyer_data: null,
  getMatchList: null,
};

const appReducers = (state = initialState, actions) => {
  const {type, payload} = actions;
  switch (type) {
    //************User Get Profile states*************
    case TYPES.ADD_PROPERTY_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        add_property_detail: payload,
      };
    case TYPES.ADD_PROPERTY_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        add_property_detail: null,
      };

    //************ Get Recent Properties states*************
    case TYPES.GET_RECENT_PROPERTIES_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        recent_properties: payload,
      };
    case TYPES.GET_RECENT_PROPERTIES_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        recent_properties: null,
      };

    //************ Get All Properties states*************
    case TYPES.GET_ALL_PROPERTIES_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        all_properties: payload,
      };
    case TYPES.GET_ALL_PROPERTIES_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        all_properties: null,
      };

    //************ SET BUYER Properties states*************
    case TYPES.ADD_BUYER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        buyer_preferences: payload,
      };

    //************ Get Buyer  Data states*************
    case TYPES.GET_BUYER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        buyer_data: payload,
      };
    case TYPES.GET_BUYER_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        buyer_data: null,
      };

    //************ Get Filtered Properties states*************
    case TYPES.GET_FILTERED_PROPERTIES_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        filtered_properties: payload,
      };
    case TYPES.GET_FILTERED_PROPERTIES_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        filtered_properties: null,
      };
    // **************** get match list *******************
    case TYPES.GET_MATCH_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        getMatchList: payload,
      };

    case TYPES.SET_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        address: payload,
      };

    default:
      return state;
  }
};

export default appReducers;
