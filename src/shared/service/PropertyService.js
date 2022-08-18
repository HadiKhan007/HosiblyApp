import axios from 'axios';
import {Alert} from 'react-native';
import {BASE_URL, responseValidator} from '../exporter';
import {GetToken} from '../utilities/headers';

export const addProperty = async (data, setloading) => {
  console.log(data);
  try {
    const res = await axios.post(`${BASE_URL}properties`, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        auth_token: await GetToken(),
      },
    });
    return res.data;
  } catch (error) {
    setloading(false);
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    Alert.alert('Error', msg || 'Something went wrong!');
  }
};

export const getRecentProperties = async () => {
  const res = await axios.get(`${BASE_URL}recent_property`, {
    headers: {
      auth_token: await GetToken(),
      Accept: 'application/json',
    },
  });
  return res.data;
};

export const getFilteredProperties = async params => {
  console.log(params);
  const res = await axios.post(`${BASE_URL}property/filter`, params, {
    headers: {
      auth_token: await GetToken(),
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};

export const getAllProperties = async () => {
  const res = await axios.get(`${BASE_URL}properties`, {
    headers: {
      auth_token: await GetToken(),
      Accept: 'application/json',
    },
  });
  return res.data;
};
