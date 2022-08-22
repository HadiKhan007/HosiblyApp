import {retry} from 'redux-saga/effects';
import {HTTP_CLIENT, ENDPOINTS} from '../exporter';
import axios from 'axios';
import {GetToken} from '../utilities/headers';
import {BASE_URL} from '../utilities/endpoints';

export const addBookmarks = async params => {
  const res = await axios.post(
    `${BASE_URL}${ENDPOINTS.ADD_TO_BOOKMARKS}`,
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

export const getAllBookmarks = async () => {
  const res = await axios.get(`${BASE_URL}${ENDPOINTS.GET_BOOKMARKS}`, {
    headers: {
      Accept: 'application/json',
      auth_token: await GetToken(),
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};

export const getFilteredBookmarks = async params => {
  const res = await axios.post(
    `${BASE_URL}${ENDPOINTS.FILTER_BOOKMARKS}`,
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

export const removeBookmark = async id => {
  const res = await axios.delete(
    `${BASE_URL}${ENDPOINTS.DELETE_BOOKMARKS}/${id}`,
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
