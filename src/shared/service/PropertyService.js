import {BASE_URL} from '../exporter';
import {GetToken} from '../utilities/headers';

export const addProperty = async data => {
  var myHeaders = new Headers();
  myHeaders.append('auth_token', await GetToken());
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: data,
    redirect: 'follow',
  };

  fetch(`${BASE_URL}properties`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
};
