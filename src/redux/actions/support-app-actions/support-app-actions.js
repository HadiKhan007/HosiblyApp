import * as TYPES from '../types';

// ADD Property profile
export const get_suuport_users = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.SUPPORT_USER_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

// Selected Support Data
export const selected_suuport_user_data = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.SELECTED_SUPPORT_USER_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
export const getPaymentPackagesAction = (cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_PAYMENT_PACKAGE_REQUEST,
    cbSuccess,
    cbFailure,
  };
};
export const createSubscriptionAction = (data, cbSuccess, cbFailure) => {
  return {
    type: TYPES.CREATE_SUBSCRIPTION_REQUEST,
    data,
    cbSuccess,
    cbFailure,
  };
};
export const cancelSubscriptionAction = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.CANCEL_SUBSCRIPTION_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
export const getSubscriptionAction = (cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_SUBSCRIPTION_REQUEST,
    cbSuccess,
    cbFailure,
  };
};
