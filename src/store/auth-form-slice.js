import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'authForm',
  initialState: { formIsLogin: true, notification: null },
  reducers: {
    toggle(state) {
      state.formIsLogin = !state.formIsLogin;
    }
  }
})