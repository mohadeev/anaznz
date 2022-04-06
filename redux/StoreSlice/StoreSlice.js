import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  ReduxBreakLink: false,
  RCategorie: "",
  RType: "",
  RColor: "",
  RCompany: "",
  RSize: "",
  RCondestion: "",
  RPrice: "",
  RName: "",
  ArrayOfData: [],
};

export const StoreSliceReducer = createSlice({
  name: "StoreRedux",
  initialState,
  reducers: {
    ReducerRCategorie: (state, action) => {
      state.RCategorie = action.payload.RCategorie;
    },
    ReducerType: (state, action) => {
      if (state.ArrayOfData.length === 0) {
        state.ArrayOfData = [
          ...state.ArrayOfData,
          { type: action.payload.type },
        ];
      } else if (state.ArrayOfData.length === 1) {
        const NewArray = state.ArrayOfData[0];
        NewArray["type"] = action.payload.type;
        console.log(state.ArrayOfData.map((item) => item.type));
      }
    },
    ReducerBrand: (state, action) => {
      if (state.ArrayOfData.length === 0) {
        state.ArrayOfData = [
          ...state.ArrayOfData,
          { brand: action.payload.brand },
        ];
      } else if (state.ArrayOfData.length === 1) {
        const NewArray = state.ArrayOfData[0];
        NewArray["brand"] = action.payload.brand;
        console.log(state.ArrayOfData.map((item) => item.brand));
      }
    },
    ReducerSize: (state, action) => {
      if (state.ArrayOfData.length === 0) {
        state.ArrayOfData = [
          ...state.ArrayOfData,
          { size: action.payload.size },
        ];
      } else if (state.ArrayOfData.length === 1) {
        const NewArray = state.ArrayOfData[0];
        NewArray["size"] = action.payload.size;
        console.log(state.ArrayOfData.map((item) => item.size));
      }
    },
    ReducerColor: (state, action) => {
      if (state.ArrayOfData.length === 0) {
        state.ArrayOfData = [
          ...state.ArrayOfData,
          { color: action.payload.color },
        ];
      } else if (state.ArrayOfData.length === 1) {
        const NewArray = state.ArrayOfData[0];
        NewArray["color"] = action.payload.color;
        console.log(state.ArrayOfData.map((item) => item.color));
      }
    },
    ReducerCondestion: (state, action) => {
      if (state.ArrayOfData.length === 0) {
        state.ArrayOfData = [
          ...state.ArrayOfData,
          { condestion: action.payload.condestion },
        ];
      } else if (state.ArrayOfData.length === 1) {
        const NewArray = state.ArrayOfData[0];
        NewArray["condestion"] = action.payload.condestion;
        console.log(state.ArrayOfData.map((item) => item.condestion));
      }
    },
    ReducerPricing: (state, action) => {
      if (state.ArrayOfData.length === 0) {
        state.ArrayOfData = [
          ...state.ArrayOfData,
          { price: action.payload.price },
        ];
      } else if (state.ArrayOfData.length === 1) {
        const NewArray = state.ArrayOfData[0];
        NewArray["price"] = action.payload.price;
        console.log(state.ArrayOfData.map((item) => item.price));
      }
    },
    ReducerDescount: (state, action) => {
      if (state.ArrayOfData.length === 0) {
        state.ArrayOfData = [
          ...state.ArrayOfData,
          { descount: action.payload.descount },
        ];
      } else if (state.ArrayOfData.length === 1) {
        const NewArray = state.ArrayOfData[0];
        NewArray["descount"] = action.payload.descount;
        console.log(state.ArrayOfData.map((item) => item.descount));
      }
    },
    ReducerSheppingType: (state, action) => {
      if (state.ArrayOfData.length === 0) {
        state.ArrayOfData = [
          ...state.ArrayOfData,
          { sheppingtype: action.payload.sheppingtype },
        ];
      } else if (state.ArrayOfData.length === 1) {
        const NewArray = state.ArrayOfData[0];
        NewArray["sheppingtype"] = action.payload.sheppingtype;
        console.log(state.ArrayOfData.map((item) => item.sheppingtype));
      }
    },
    ReducerShopAdress: (state, action) => {
      if (state.ArrayOfData.length === 0) {
        state.ArrayOfData = [
          ...state.ArrayOfData,
          { shopadress: action.payload.shopadress },
        ];
      } else if (state.ArrayOfData.length === 1) {
        const NewArray = state.ArrayOfData[0];
        NewArray["shopadress"] = action.payload.shopadress;
        console.log(state.ArrayOfData.map((item) => item.shopadress));
      }
    },
    ReducerSheppingComapny: (state, action) => {
      if (state.ArrayOfData.length === 0) {
        state.ArrayOfData = [
          ...state.ArrayOfData,
          { sheppingcomapny: action.payload.sheppingcomapny },
        ];
      } else if (state.ArrayOfData.length === 1) {
        const NewArray = state.ArrayOfData[0];
        NewArray["sheppingcomapny"] = action.payload.sheppingcomapny;
        console.log(state.ArrayOfData.map((item) => item.sheppingcomapny));
      }
    },
    ReducerDescreption: (state, action) => {
      if (state.ArrayOfData.length === 0) {
        state.ArrayOfData = [
          ...state.ArrayOfData,
          { descreption: action.payload.descreption },
        ];
      } else if (state.ArrayOfData.length === 1) {
        const NewArray = state.ArrayOfData[0];
        NewArray["descreption"] = action.payload.descreption;
        console.log(state.ArrayOfData.map((item) => item.descreption));
      }
    },
    ReduxBreakLinkReducer: (state, action) => {
      state.ReduxBreakLink = true;
    },
    ReduxBreakLinkTrue: (state, action) => {
      state.ReduxBreakLink = false;
      // alert(state.ReduxBreakLink);;
    },
  },
});

export const {
  ReduxBreakLinkReducer,
  ReduxBreakLinkTrue,
  ReducerRCategorie,
  ReducerType,
  ReducerBrand,
  ReducerSize,
  ReducerColor,
  ReducerCondestion,
  ReducerPricing,
  ReducerDescount,
  ReducerSheppingType,
  ReducerShopAdress,
  ReducerSheppingComapny,
  ReducerDescreption
} = StoreSliceReducer.actions;
const AllReducers = StoreSliceReducer.reducer;
export default AllReducers;
