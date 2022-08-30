/* eslint-disable prettier/prettier */
import * as Sentry from '@sentry/nextjs';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';
axios.defaults.timeout = 5000;
axios.defaults.headers.common = {
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
};

axios.interceptors.response.use(
  // prettier-ignore
  () => { },
  (error) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
    if (!expectedError) {
      Sentry.captureException(error);
      // eslint-disable-next-line no-console
      console.log(error);
    }
    return Promise.reject(error);
  },
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};
