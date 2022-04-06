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
      const data = action.payload.value;
      const Split = data.split("");
      let NewArray = Split.splice(13, Split.length);

      let index = NewArray.indexOf("%");
      const Map = () => {
        if (index >= 0) {
          const datata = NewArray.splice(index, 3, " ");
          index = NewArray.indexOf("%");
          state.InputSearch = NewArray.join("");
        }
      };
      const filtert = NewArray.filter((item) => item === "%");
      const JoinFilter = filtert.join("");
      const SplitFilter = JoinFilter.split("");
      const Fuc = () => {
        SplitFilter.map((item) => {
          Map();
        });
      };
      state.InputSearch = NewArray.join("");
      Fuc();
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
