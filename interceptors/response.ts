import { Axios } from '@utils/axios';
import { AxiosError, AxiosResponse } from 'axios';

/* Intercepting the response and returning the data. */
Axios.interceptors.response.use(
  (response: AxiosResponse<any, any>) => {
    return response.data;
  },
  async (error: AxiosError): Promise<string> => {
    return Promise.reject(error);
  }
);
