import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  value: "", 
  name  : ""

};

export const StorFilter = createSlice({
  name: "StorFilter",
  initialState,
  reducers: {
    StorFilterSellect: (state, action) => {
      state.value = action.payload.value , 
      state.name = action.payload.name 
    }
  },
});

export const { StorFilterSellect } = StorFilter.actions;
const AllReducers = StorFilter.reducer;
export default AllReducers;
