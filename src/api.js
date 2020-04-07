import axios from 'axios';
import {baseURL} from './const.js';

const Error = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
};

export const createApi = (onUnauthorized, onError) => {
  const api = axios.create({
    baseURL,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (error) => {
    const {response} = error;

    if (response.status === Error.UNAUTHORIZED) {
      onUnauthorized();
      throw error;
    }

    if (response.status === Error.BAD_REQUEST) {
      onError();
      throw error;
    }

    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
