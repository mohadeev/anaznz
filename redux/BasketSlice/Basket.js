import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  basket: [],
};
const persistConfig = {
  key: "root",
  storage,
};

export const Basket = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addtoBasket: (state, action) => {
      state.basket.push(action.payload);
    },
    removetoBasket: (state , action) => {
      state.basket = []
    },
  },
});

export const { addtoBasket, removetoBasket } = Basket.actions;

const AllReducers = Basket.reducer;
// export default Basket.reducer;
const persistedReducer = persistReducer(persistConfig, AllReducers);

export default persistedReducer
