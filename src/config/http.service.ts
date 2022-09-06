import axios from 'axios';

axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_API_URL}`;
axios.defaults.timeout = 5000;
axios.defaults.headers.common = {
  'Cache-control': 'no-cache',
  'Content-Type': 'application/json',
};

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    // Sentry.captureException(error);
    // eslint-disable-next-line no-console
    console.log(error);
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};
