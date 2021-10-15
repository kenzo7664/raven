import axios from 'axios';
import * as localStorageService from 'utils/localStorage';

//Base URL for HTTP requests
export const BASE_URL = process.env.REACT_APP_API_URL;

axios.defaults.baseURL = BASE_URL;
const tokenExpMsg = 'token_not_valid';

//For sending public requests
const publicInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

//For sending private requests
const privateInstance = axios.create({
  headers: {
    Authorization: `Bearer *token*`,
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

privateInstance.interceptors.request.use(
  (config) => {
    //For getting access token from local storage util
    const token = localStorageService.getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

privateInstance.interceptors.response.use(
  //For returning response
  (response) => {
    return response;
  },
  //For handling errors i.e checking if token is expired, then refreshing
  async function (error) {
    return Promise.reject(error);
  }
);

//Main function for private requests
export const privateRequest = ({
  method = 'get',
  route,
  payload,
  responseType = 'json'
}) => {
  privateInstance.defaults.responseType = responseType;
  const requestMethod = method.toLowerCase();
  return privateInstance[requestMethod](route, payload).catch((error) =>
    Promise.reject(error)
  );
};

//Main function for public requests
export const publicRequest = ({
  method = 'get',
  route,
  payload,
  responseType = 'json'
}) => {
  publicInstance.defaults.responseType = responseType;
  const requestMethod = method.toLowerCase();
  return publicInstance[requestMethod](route, payload).catch((error) => {
    return Promise.reject(
      error.response.data
        ? { ...error.response.data, status: error.response.status }
        : { ...error.message, status: error.status }
    );
  });
};

export default privateRequest;
