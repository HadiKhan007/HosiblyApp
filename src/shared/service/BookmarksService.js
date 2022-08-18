import {retry} from 'redux-saga/effects';
import {HTTP_CLIENT, ENDPOINTS} from '../exporter';
import axios from 'axios';
import {GetToken} from '../utilities/headers';
import {BASE_URL} from '../utilities/endpoints';

export const addBookmarks = async () => {
  const res = await axios.get(`${BASE_URL}${ENDPOINTS.ADD_TO_BOOKMARKS}`, {
    headers: {
      Accept: 'application/json',
      auth_token: await GetToken(),
    },
  });
  return res.data;
};

export const getAllBookmarks = async () => {
  const res = await axios.get(`${BASE_URL}${ENDPOINTS.FILTER_BOOKMARKS}`, {
    headers: {
      Accept: 'application/json',
      auth_token: await GetToken(),
    },
  });
  return res.data;
};

export const getFilteredBookmarks = async () => {
  const res = await axios.get(`${BASE_URL}${ENDPOINTS.FILTER_BOOKMARKS}`, {
    headers: {
      Accept: 'application/json',
      auth_token: await GetToken(),
    },
  });
  return res.data;
};

export const removeBookmark = async () => {
  const res = await axios.get(`${BASE_URL}${ENDPOINTS.DELETE_BOOKMARKS}`, {
    headers: {
      Accept: 'application/json',
      auth_token: await GetToken(),
    },
  });
  return res.data;
};
