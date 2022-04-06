import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  isLogin: false,
  UserData: [],
  userRudux: [],
};

export const User = createSlice({
  name: "userRudux",
  initialState,
  reducers: {
    UserLoginSuccessed: (state, action) => {
      state.userRudux = [action.payload];
      state.isLogin = true;
      // console.log(state.isLogin); 
    },
    UserLogOut: (state, action) => {
      state.userRudux = [];
      state.isLogin = false ; 
    },
  },
});

export const {UserLogOut, UserLoginSuccessed } = User.actions;
const AllReducers = User.reducer;
export default AllReducers;
