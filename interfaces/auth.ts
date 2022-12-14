export interface ILoginRequest {
  email: string;
  password: string;
  remember: boolean;
}

export interface IRegisterRequest {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IUserResponse {
  email: string;
  phone: string;
  userId: string;
  userName: string;
}

export interface ITokenResponse {
  accessToken: string;
  refreshToken: string;
  accessTokenExpired: string;
}

export type ILoginResponse = ITokenResponse & IUserResponse;
