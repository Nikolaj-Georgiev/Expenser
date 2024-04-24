import { configureStore } from '@reduxjs/toolkit';

import loginSlice from './auth-slice';
import dashboardSlice from './dashboard-slice';
import paginationSlice from './pagination-slice';

const store = configureStore({
  reducer: {
    authForm: loginSlice.reducer,
    dashboard: dashboardSlice.reducer,
    pagination: paginationSlice.reducer,
  }
})

export default store;
