import authService from '@services/authServices';
import { Axios } from '@utils/axios';
import { Cookie } from '@utils/cookie';
import { AxiosError, AxiosResponse } from 'axios';

Axios.interceptors.response.use(
  /* Returning the response. */
  (response: AxiosResponse): AxiosResponse => {
    // console.log('RESPONSE INTERCEPTOR FULFILLED');
    return response;
  },
  /* Intercepting the response from the server and checking if the response is 401. If it is 401, it will
refresh the token and then set the token to the cookie. */
  async (error: AxiosError): Promise<AxiosError> => {
    // console.log('RESPONSE INTERCEPTOR REJECTED');
    if (error.response && error.response.status == 401) {
      await authService
        .refreshToken()
        .then((res: any) => {
          console.log(res.data);
          authService.setToken(res.data.data);
          authService.profile();
        })
        .catch((err) => {
          Cookie.Remove('accessToken');
          Cookie.Remove('refreshToken');
          window.location.href = '/';
        });
    }
    return Promise.reject(error.message);
  }
);
