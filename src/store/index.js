import { configureStore } from '@reduxjs/toolkit';

import loginSlice from './auth-form-slice';

const store = configureStore({
  reducer: {
    authForm: loginSlice.reducer,
  }
})

export default store;
