import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export const responseInterceptor = async (response: AxiosResponse) => {
  return Promise.resolve(response);
};

export const errorInterceptor = (error: AxiosError) => {
  return Promise.reject(error);
};

export const requestInterceptor = (config: AxiosRequestConfig) => {
  const timeout = 30 * 1000;
  config.cancelToken = new axios.CancelToken(cancelRequest => {
    setTimeout(() => {
      cancelRequest('Cancel Request');
    }, timeout);
  });
  return config;
};
