import { Axios } from '@utils/axios';
import { Cookie } from '@utils/cookie';
import { AxiosError, AxiosRequestConfig } from 'axios';

/* Intercepting the request and adding the access token to the header. */
Axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const access_token = Cookie.Get('accessToken');
    const refresh_token = Cookie.Get('refreshToken');
    if (refresh_token) {
      config.headers!.Authorization = `Bearer ${refresh_token}`;
    }
    return config;
  },
  async (error: AxiosError): Promise<string> => {
    return Promise.reject(error);
  }
);
