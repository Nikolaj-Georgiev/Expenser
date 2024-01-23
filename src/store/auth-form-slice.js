import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'authForm',
  initialState: { formMode: 'login' },
  reducers: {
    toggle(state, actions) {
      const newFormMode = actions.payload;
      const existingFormMode = state.formMode;
      newFormMode === existingFormMode ? state.formMode = existingFormMode : state.formMode = newFormMode;
    }
  }
});

export const loginActions = loginSlice.actions;

export default loginSlice;