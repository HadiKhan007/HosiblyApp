import {ENDPOINTS} from '../exporter';
import axios from 'axios';
import {GetToken} from '../utilities/headers';
import {BASE_URL} from '../utilities/endpoints';

export const search = async params => {
  const res = await axios.post(
    `${BASE_URL}${ENDPOINTS.SEARCH_ON_MAP}`,
    params,
    {
      headers: {
        Accept: 'application/json',
        auth_token: await GetToken(),
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return res.data;
};

export const propertyInfo = async params => {
  const res = await axios.post(
    `${BASE_URL}${ENDPOINTS.GET_PROPERTY_DETAILS}`,
    params,
    {
      headers: {
        Accept: 'application/json',
        auth_token: await GetToken(),
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return res.data;
};

export const findSchools = async params => {
  const res = await axios.post(
    `${BASE_URL}${ENDPOINTS.SCHOOLS_ON_MAP}`,
    params,
    {
      headers: {
        Accept: 'application/json',
        auth_token: await GetToken(),
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return res.data;
};

export const schoolInfo = async params => {
  const res = await axios.post(`${BASE_URL}${ENDPOINTS.GET_SCHOOL}`, params, {
    headers: {
      Accept: 'application/json',
      auth_token: await GetToken(),
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};
