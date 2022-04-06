import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  ProfileDetailes : false,
  Avatar : ""
};

export const ProfileDetailes = createSlice({
  name: "userRudux",
  initialState,
  reducers: {
    ProfileDetailesRuducer: (state, action) => {
      state.ProfileDetailes = !state.ProfileDetailes;
    },
    ProfileDetailesHidden: (state, action) => {
      state.ProfileDetailes = false;
    },
    ProfileDetailesShowen: (state, action) => {
      state.ProfileDetailes = true;
    },
    AvatarRuducer: (state, action) => {
      state.Avatar = action.payload;
    },
  },
});

export const { ProfileDetailesRuducer , AvatarRuducer , ProfileDetailesHidden , ProfileDetailesShowen} = ProfileDetailes.actions;
const AllReducers = ProfileDetailes.reducer;
export default AllReducers;
