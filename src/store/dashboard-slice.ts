import { createSlice } from "@reduxjs/toolkit";
import { EXPENSES_CATEGORIES, SAVINGS_CATEGORIES } from "../util/config";

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: { catTypes: 'expenses', catTypesData: EXPENSES_CATEGORIES, curData: [] },
  reducers: {
    toggleCatTypes(state, actions) {
      const newCatType = actions.payload;
      const existingCatType = state.catTypes;
      newCatType === existingCatType ? state.catTypes = existingCatType : state.catTypes = newCatType;
    },
    getCatTypesData(state, actions) {
      const dataType = actions.payload;
      // const existingCatTypeData = state.catTypesData;
      dataType === 'expenses' ? state.catTypesData = EXPENSES_CATEGORIES : state.catTypesData = SAVINGS_CATEGORIES;
    },
    getCurData(state, actions) {

    }
  }
});


export const dashboardActions = dashboardSlice.actions;

export default dashboardSlice;




