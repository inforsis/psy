import axios from 'axios';
// import { encode } from 'base-64';

const development = process.env.NODE_ENV !== 'production';

const vBaseURL = development
  ? process.env.REACT_APP_BASEURL
  : window.REACT_APP_BASEURL;
const vTimeout = development
  ? process.env.REACT_APP_TIMEOUT
  : window.REACT_APP_TIMEOUT;
// const vToken = development
//   ? process.env.REACT_APP_AUTH_TOKEN
//   : window.REACT_APP_AUTH_TOKEN;

export const api = axios.create({
  baseURL: vBaseURL,
  timeout: vTimeout,
  mode: 'no-cors',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // Authorization: `Token ${vToken}`,
  },
});

export default api;
