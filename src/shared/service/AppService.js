import axios from 'axios';
import {BASE_URL, ENDPOINTS} from '../exporter';
import {GetToken} from '../utilities/headers';

export const getFilterReviewApi = async params => {
  const res = await axios.post(
    `${BASE_URL}${ENDPOINTS.REVIEW_CONST}/review_filter`,
    params,
    {
      headers: {
        auth_token: await GetToken(),
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return res.data;
};

export const setProfileVisitApi = async params => {
  console.log(params);
  const res = await axios.post(`${BASE_URL}/view_user_profile`, params, {
    headers: {
      auth_token: await GetToken(),
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};
export const getDreamAddress = async params => {
  const res = await axios.get(`${BASE_URL}${ENDPOINTS.GET_DREAM_ADRRESS}`, {
    headers: {
      auth_token: await GetToken(),
      Accept: 'application/json',
    },
  });
  return res.data;
};

export const deleteDreamAddress = async params => {
  const res = await axios.delete(
    `${BASE_URL}${ENDPOINTS.DELETE_DREAM_ADDRESS}/${params}`,
    {
      headers: {
        auth_token: await GetToken(),
        Accept: 'application/json',
      },
    },
  );
  return res.data;
};
export const createDreamAddress = async params => {
  console.log('PARAMS ', params);
  const res = await axios.post(
    `${BASE_URL}${ENDPOINTS.CREATE_DREAM_ADDRESS}`,
    params,
    {
      headers: {
        auth_token: await GetToken(),
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return res.data;
};
