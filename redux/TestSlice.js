import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userRudux: [],
  isLogin: null,
};

export const User = createSlice({
  name: "userRudux",
  initialState,
  reducers: {
    LogInSuccess: (state, action) => {
      if (state.userRudux.length === 0) {
        state.isLogin = action.payload.isLogin;
        state.userRudux = [...state.userRudux, action.payload];
      } else {
        state.userRudux;
      }
    },
    UserLogOut: (state, action) => {
      state.isLogin = false;
      state.userRudux = [];
    },
  },
});

export const { LogInSuccess, UserLogOut } = User.actions;
const AllReducers = User.reducer;
export default AllReducers;