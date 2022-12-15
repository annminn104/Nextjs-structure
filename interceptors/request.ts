import { Axios } from '@utils/axios';
import { Cookie } from '@utils/cookie';
import { AxiosError, AxiosRequestConfig } from 'axios';

Axios.interceptors.request.use(
  /* A function that takes in a config object and returns a config object. */
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    // console.log('REQUEST INTERCEPTOR FULFILLED');
    const access_token = Cookie.Get('accessToken');
    const refresh_token = Cookie.Get('refreshToken');
    if (access_token) {
      config.headers!.Authorization = `Bearer ${access_token}`;
    }
    return config;
  },
  /* Returning a promise that rejects the error message. */
  async (error: AxiosError): Promise<AxiosError> => {
    // console.log('REQUEST INTERCEPTOR REJECTED');
    return Promise.reject(error.message);
  }
);
