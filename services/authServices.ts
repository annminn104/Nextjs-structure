import { AUTH_ENDPOINT } from '@enums/auth';
import {
  ILoginRequest,
  IRegisterRequest,
  ITokenResponse,
} from '@interfaces/auth';
import { store } from '@stores/index';
import { setUser } from '@stores/reducers/authSlice';
import { Axios } from '@utils/axios';
import { Cookie } from '@utils/cookie';
import { AxiosPromise } from 'axios';

class AuthService {
  isLogined: boolean = false;

  /**
   * It sends a POST request to the server with the data provided by the user, and if the server responds
   * with a success code, it sets the token in the local storage
   * @param {ILoginRequest} data - ILoginRequest
   * @returns res
   */
  async login(data: ILoginRequest): Promise<AxiosPromise> {
    try {
      const res = await Axios.post(AUTH_ENDPOINT.LOGIN, data);
      this.isLogined = true;
      if (res.data.code == 'SUCCESS') {
        this.setToken(res.data.data);
      }
      return res.data;
    } catch (error) {
      this.isLogined = false;
      return Promise.reject(error);
    }
  }

  /**
   * It takes in a data object of type IRegisterRequest, and returns a promise of type AxiosPromise
   * @param {IRegisterRequest} data - IRegisterRequest - this is the data that we are sending to the
   * server.
   * @returns res
   */
  async register(data: IRegisterRequest): Promise<AxiosPromise> {
    try {
      const res = await Axios.post(AUTH_ENDPOINT.REGISTER, data);
      return res.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  /**
   * It sets the access token and refresh token in the browser's cookies
   * @param {ITokenResponse} data - ITokenResponse - this is the response from the server when you call
   * the login method.
   */
  setToken(data: ITokenResponse) {
    const expired = new Date(data.accessTokenExpired);
    Cookie.Set('accessToken', data.accessToken, expired);
    Cookie.Set('refreshToken', data.refreshToken);
  }

  /**
   * It sends a POST request to the refresh token endpoint with the refresh token stored in the cookie
   * @returns AxiosPromise
   */
  refreshToken(): AxiosPromise {
    return Axios.post(AUTH_ENDPOINT.REFRESH_TOKEN, {
      refreshToken: Cookie.Get('refreshToken'),
    });
  }

  /**
   * It returns the value of the cookie named 'accessToken'
   * @returns The access token from the cookie.
   */
  getAccessToken() {
    return Cookie.Get('accessToken');
  }

  /**
   * If the user is logged in, return true. If the user has a valid access token or refresh token, return
   * true. Otherwise, return false
   */
  isAuthenticated() {
    if (this.isLogined) {
      return true;
    } else if (!!Cookie.Get('accessToken') || !!Cookie.Get('refreshToken')) {
      return true;
    } else {
      return false;
    }
  }

  async profile() {
    try {
      const res = await Axios.get(AUTH_ENDPOINT.PROFILE);
      console.log(res.data);
      store.dispatch(setUser(res.data));
      return res.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

const authService = new AuthService();
export default authService;
