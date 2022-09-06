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
