import {Alert} from 'react-native';
import {BASE_URL, responseValidator} from '../exporter';
import {GetToken} from '../utilities/headers';

export const addProperty = async (data, setloading) => {
  var myHeaders = new Headers();
  myHeaders.append('auth_token', await GetToken());
  myHeaders.append('Accept', '*/*');
  myHeaders.append('User-Agent', 'request');
  myHeaders.append('Content-Type', 'multipart/form-data');

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: data,
    redirect: 'follow',
  };
  try {
    const res = await fetch(`${BASE_URL}properties`, requestOptions);
    const data = await res.json();
    setloading(false);
    return data;
  } catch (error) {
    setloading(false);
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    Alert.alert('Error', msg || 'Something went wrong!');
  }
};
