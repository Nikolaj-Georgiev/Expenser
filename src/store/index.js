import { configureStore } from '@reduxjs/toolkit';

import loginSlice from './auth-slice';

const store = configureStore({
  reducer: {
    authForm: loginSlice.reducer,
  }
})

export default store;
