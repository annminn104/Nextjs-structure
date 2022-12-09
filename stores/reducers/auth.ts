import { createSlice } from '@reduxjs/toolkit';
import { userLogin } from '@stores/actions/auth';

const initialState: any = {
  user: {
    data: {
      userId: null,
      userName: null,
      email: null,
      accessToken: null,
      refreshToken: null,
    },
    message: '',
    messages: [],
    loading: false,
    error: null,
    success: false,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state, action) => {
        state.user.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.loading = false;
        state.user.error = null;
        state.user.success = true;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.user.loading = false;
        state.user.error = action.error.message;
      });
  },
});
export default authSlice.reducer;
