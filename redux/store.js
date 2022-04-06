import { configureStore } from "@reduxjs/toolkit";
import BasketReducer from "./BasketSlice/Basket";
import { storPersist } from "redux-persist";

import UserSlice from "./UserSlice/UserSlice";
import ProfileDetailes from "./UserSlice/HeaderUser";
import HeaderMenuRuducer from "./HeaderSlice/HeadeMenu";
import StorFilter from "./UserSlice/Userlogin/FilterStor";
import StoreSliceReducer from "./StoreSlice/StoreSlice";
import UploadImagesProduct from "./Upload/UploadImagesProduct";

import thunk from "redux-thunk";
import withRedux from "next-redux-wrapper";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

export const store = configureStore({
  reducer: {
    Basket: BasketReducer,
    UserSlice: UserSlice,
    ProfileDetailes,
    HeaderMenuRuducer,
    StorFilter,
    StoreSliceReducer,
    UploadImagesProduct,
  },
  middleware: [thunk],
});

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);

// export const Persistor = storPersist(store);
