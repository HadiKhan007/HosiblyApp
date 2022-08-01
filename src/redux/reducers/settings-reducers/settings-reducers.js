import * as TYPES from '../../actions/types';

const initialState = {
  loading: false,
  isSuccess: false,
  isFailure: false,
  userProfile: null,
};

const settingsReducers = (state = initialState, actions) => {
  const {type, payload} = actions;
  switch (type) {
    //************User Get Profile states*************
    case TYPES.GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        userProfile: payload,
      };
    case TYPES.GET_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        userProfile: null,
      };

    //************User Update Profile states*************
    case TYPES.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        userProfile: payload,
      };
    case TYPES.UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        userProfile: null,
      };

    //Payments

    default:
      return state;
  }
};

export default settingsReducers;
