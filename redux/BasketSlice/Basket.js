import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

const initialState = {
  basket: [],
};
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  stateReconciler: hardSet,
};

export const Basket = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addtoBasket: (state, action) => {
      if (state.basket.length >= 1) {
        // alert(
        //   `you have ${state.basket.length} tour in the basket please conferm it`
        // );
      }
      state.basket.push(action.payload);
    },

    removetoBasket: (state, action) => {
      // const index = state.basket.indexOf(action.payload);
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      const newBasket = [...state.basket];
      if (index >= 0) {
        state.basket.splice(index, 1);
      }
    },
  },
});

export const { addtoBasket, removetoBasket } = Basket.actions;
const AllReducers = Basket.reducer;
const persistedReducer = persistReducer(persistConfig, AllReducers);

export default persistedReducer;
