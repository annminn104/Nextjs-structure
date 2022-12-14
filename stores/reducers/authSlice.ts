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

/* Creating a slice of the redux store. */
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      return {
        ...state,
        user: action.payload.data,
      };
    },
  },
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

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
