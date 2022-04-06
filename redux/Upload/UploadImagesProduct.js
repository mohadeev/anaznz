import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  Images: [],
};

export const UploadImagesProduct = createSlice({
  name: "image-uploader",
  initialState,
  reducers: {
    ImageUploader: (state, action) => {
      if (state.Images.length < 8) {
        state.Images = [...state.Images, action.payload];
      }
    },
    ImageDeleter: (state, action) => {
      const data = state.Images;
      const ActionIndex = action.payload.index
      const Length = data.length;
      if (ActionIndex >= 0 || Length <= 4) {
        alert(ActionIndex);
        const NewArray = data.splice(ActionIndex, 1);
        state.Images = [NewArray]
      }else {
        alert(Index);
      }
    },
  },
});

export const { ImageUploader, ImageDeleter } = UploadImagesProduct.actions;
const AllReducers = UploadImagesProduct.reducer;
export default AllReducers;
