import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  HeaderMenu: false,
  MenuSellect: "",
  MenuSearch: "",
  InputSearch: "",
  MenuSearchValue : "" , 
};

export const HeadeMenuFunc = createSlice({
  name: "HeaderMenu",
  initialState,
  reducers: {
    HeaderMenuRuducer: (state, action) => {
      state.HeaderMenu = !state.HeaderMenu;
    },
    HeaderMenuSearchValue: (state, action) => {
      state.MenuSearchValue = action.payload.value;
      // alert(state.MenuSearchValue)
    },
    HeaderMenuFalse: (state, action) => {
      state.HeaderMenu = false;
    },
    HeaderMenuSellect: (state, action) => {
      state.MenuSellect = action.payload.value;
    },
    HeaderMenuSearch: (state, action) => {
      state.MenuSearch = action.payload.value;
    },
    HeaderSearsch: (state, action) => {      
      state.InputSearch = action.payload.value
    },
  },
});

export const {
  HeaderMenuRuducer,
  HeaderMenuFalse,
  HeaderMenuSellect,
  HeaderMenuSearch,
  HeaderSearsch,
  HeaderMenuSearchValue , 
} = HeadeMenuFunc.actions;
const AllReducers = HeadeMenuFunc.reducer;
export default AllReducers;
