import * as TYPES from '../../actions/types';

const initialState = {
  loading: false,
  isSuccess: false,
  isFailure: false,
  add_property_detail: null,
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

    default:
      return state;
  }
};

export default appReducers;
