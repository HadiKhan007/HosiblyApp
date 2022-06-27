import {ENDPOINTS, HTTP_CLIENT} from '../exporter';

//Exercise Upcoming Requests
export const getUpcomingEvent = () => {
  return HTTP_CLIENT.get(`${ENDPOINTS.EVENTS}/upcoming_events`);
};

// Join  events
export const joinEvent = params => {
  return HTTP_CLIENT.post(`${ENDPOINTS.USER_EVENTS}`, params);
};

// Join Team events
export const joinTeamEvents = params => {
  return HTTP_CLIENT.post(`${ENDPOINTS.USERS_TEAM}`, params);
};
//Exercise Ongoing Requests
export const getOngoingEvent = () => {
  return HTTP_CLIENT.get(`${ENDPOINTS.EVENTS}/ongoing_events`);
};
//Get Event Detail
export const getEventDetail = params => {
  return HTTP_CLIENT.get(`${ENDPOINTS.EVENTS}/${params}.json`);
};

//GET ALL PAYMENT CARDS
export const getPaymentCards = () => {
  return HTTP_CLIENT.get(`${ENDPOINTS.CHECKOUT}`);
};
//Add Card Requests
export const addDebitCard = params => {
  return HTTP_CLIENT.post(`${ENDPOINTS.CHECKOUT}`, params);
};

//Pay With Debit Card Requests
export const payWithDebitCard = params => {
  console.log(params);
  return HTTP_CLIENT.post(`${ENDPOINTS.CHECKOUT}/card_payment_only`, params);
};

//Pay With Social Card Requests
export const payWithSocialCard = (type, params) => {
  console.log('Payment Type', type);
  return HTTP_CLIENT.post(
    `${ENDPOINTS.CHECKOUT}/${type == 'apple' ? 'apple_pay' : 'google_pay'}`,
    params,
  );
};
