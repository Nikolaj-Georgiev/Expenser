import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'authForm',
  initialState: { formMode: 'login', token: '', logoRout: '/' },
  reducers: {
    toggle(state, actions) {
      const newFormMode = actions.payload;
      const existingFormMode = state.formMode;
      newFormMode === existingFormMode ? state.formMode = existingFormMode : state.formMode = newFormMode;
    },
    tokenFn(state, actions) {
      state.token = actions.payload || '';
    },
    logoRoutFn(state, actions) {
      state.logoRout = actions.payload || '/';
    }
  }
});

export const loginActions = loginSlice.actions;

export default loginSlice;