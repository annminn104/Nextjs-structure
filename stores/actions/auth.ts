import { ILoginRequest } from '@interfaces/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import authService from '@services/authServices';

const userLogin = createAsyncThunk(
  'user/login',
  async (data: ILoginRequest) => {
    return authService.login(data);
  }
);

export { userLogin };
