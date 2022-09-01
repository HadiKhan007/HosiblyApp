import * as TYPES from '../../actions/types';

const initialState = {
  loading: false,
  isSuccess: false,
  isFailure: false,
  support_users: [],
  support_detail: null,
};

const supportUserReducers = (state = initialState, actions) => {
  const {type, payload} = actions;
  switch (type) {
    //************User Get Profile states*************
    case TYPES.SUPPORT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        support_users: payload,
      };
    case TYPES.SUPPORT_USER_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        support_users: [],
      };

    //************Select Profile states*************
    case TYPES.SELECTED_SUPPORT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        support_detail: payload,
      };
    case TYPES.SELECTED_SUPPORT_USER_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        support_detail: [],
      };

    default:
      return state;
  }
};

export default supportUserReducers;
