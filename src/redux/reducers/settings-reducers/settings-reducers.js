import * as TYPES from '../../actions/types';

const initialState = {
  loading: false,
  isSuccess: false,
  isFailure: false,
  userProfile: null,
  payment_card_list: [],
  pay_with_debit: null,
  pay_with_social: null,
  default_card: null,
  staticData: null,
  queries: null,
  notifyRes: null,
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
    // Add Card Success
    case TYPES.ADD_CARD_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
      };

    case TYPES.ADD_CARD_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        payment_card_list: state.payment_card_list,
      };

    // Edit Card Success
    case TYPES.EDIT_CARD_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
      };

    case TYPES.EDIT_CARD_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        payment_card_list: state.payment_card_list,
      };

    // default Card Success
    case TYPES.ADD_DEFAULT_CARD_SUCCESS:
      state.payment_card_list.map((item, index) => {
        if (index == payload.id) {
          state.payment_card_list[index].default = true;
        } else {
          state.payment_card_list[index].default = false;
        }
      });
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        payment_card_list: state.payment_card_list,
      };

    case TYPES.ADD_DEFAULT_CARD_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        payment_card_list: state.payment_card_list,
      };

    // del Card Success
    case TYPES.DELETE_CARD_SUCCESS:
      const filteredItems = state.payment_card_list.filter(item => {
        return item.id !== payload?.card_id;
      });
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        payment_card_list: [...filteredItems],
      };

    case TYPES.DELETE_CARD_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        payment_card_list: state?.payment_card_list,
      };

    // Get Card Success
    case TYPES.GET_DEFAULT_CARD_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        default_card: payload,
      };

    case TYPES.GET_DEFAULT_CARD_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        default_card: null,
      };

    //Get all card Success
    case TYPES.GET_CARD_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        payment_card_list: payload,
      };

    case TYPES.GET_CARD_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        payment_card_list: [],
      };

    //************Pay With Debit Card*************
    case TYPES.PAY_WITH_DEBIT_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        pay_with_debit: payload,
      };

    case TYPES.PAY_WITH_DEBIT_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        pay_with_debit: null,
      };
    //************Pay With Google Card*************
    case TYPES.PAY_WITH_SOCIAL_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        pay_with_social: payload,
      };

    case TYPES.PAY_WITH_SOCIAL_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        pay_with_social: null,
      };

    //************Static Pages*************
    case TYPES.STATIC_PAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        pay_with_social: payload,
      };
    case TYPES.STATIC_PAGES_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        pay_with_social: null,
      };

    //************GET QUERIES*************
    case TYPES.GET_QUERIES_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        queries: payload,
      };
    case TYPES.GET_QUERIES_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        queries: null,
      };

    //************ADD QUERY*************
    case TYPES.ADD_QUERY_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.ADD_QUERY_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
      };

    //************GET NOTIFY STATUS*************
    case TYPES.GET_NOTIFY_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        notifyRes: payload,
      };
    case TYPES.GET_NOTIFY_STATUS_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        notifyRes: null,
      };

    //************CHANGE NOTIFY STATUS*************
    case TYPES.CHANGE_NOTIFY_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.CHANGE_NOTIFY_STATUS_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
      };

    default:
      return state;
  }
};

export default settingsReducers;
