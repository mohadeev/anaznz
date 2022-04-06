import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { store, wrapper } from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import withRedux from "next-redux-wrapper";
import { useDispatch } from "react-redux";
import { UserLoginSuccessed, UserLogOut } from "../redux/UserSlice/UserSlice";
import { io } from "socket.io-client";
import Cookies from "js-cookie";

let socket;
function MyApp({ Component, pageProps }) {
  let persistor = persistStore(store);
  const dispatch = useDispatch();

  const sendCookie = Cookies.get("user_ref");
  useEffect(() => {
    const fetchData = async () => {
      socket = io();
      socket.connect();
      await fetch("//localhost:3000/api/socket");
      if (sendCookie) {
        socket.emit("send-cookie", sendCookie);
        socket.on("user-res", (payload) => {
          dispatch(UserLoginSuccessed({ payload: payload }));
        });
      } else {
        socket.emit("send-cookie", sendCookie);
        socket.on("user-res", (payload) => {
          dispatch(UserLogOut());
        });
      }
    };
    fetchData();
    return () => {
      socket.disconnect();
    };
  } , )
  useEffect(() => {
    const fetchData = async () => {
      socket = io();
      socket.connect();
      await fetch("//localhost:3000/api/socket");
      if (sendCookie) {
        socket.emit("send-cookie", sendCookie);
        socket.on("user-res", (payload) => {
          dispatch(UserLoginSuccessed({ payload: payload }));
        });
      } else {
        socket.emit("send-cookie", sendCookie);
        socket.on("user-res", (payload) => {
          dispatch(UserLogOut());
        });
      }
    };
    fetchData();
    return () => {
      socket.disconnect();
    };
  }, [sendCookie, socket]);

  return (
    <Provider store={store}>
      {/* <PersistGate
        loading={<div>Please Wait A momnet</div>}
        persistor={persistor}
      > */}

      <Layout>
        <PayPalScriptProvider options={{ "client-id": "test" }}>
          <Component {...pageProps} />
        </PayPalScriptProvider>
      </Layout>
      {/* </PersistGate> */}
    </Provider>
  );
}
// export default MyApp
export default wrapper.withRedux(MyApp);
