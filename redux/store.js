import { configureStore } from "@reduxjs/toolkit";
import BasketReducer from "./BasketSlice/Basket";
import { storPersist } from "redux-persist";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    Basket: BasketReducer,
    middleware: [thunk],
  },
});

// export const Persistor = storPersist(store);
