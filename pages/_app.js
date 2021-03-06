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
    // alert(process.env.NEXT_PUBLIC_ANALYTICS_ID + "defdfdfdf");
    const fetchData = async () => {
      socket = io();
      socket.connect();
      await fetch(`${process.env.NEXT_PUBLIC_ANALYTICS_ID}/api/socket`);
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
  });
  useEffect(() => {
    const fetchData = async () => {
      // alert(process.env.NEXT_PUBLIC_ANALYTICS_ID + "defdfdfdf");
      socket = io();
      socket.connect();
      await fetch(`${process.env.NEXT_PUBLIC_ANALYTICS_ID}/api/socket`);
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
  }, [sendCookie, dispatch]);

  return (
    <Provider store={store}>
      {/* <PersistGate
        loading={<div>Please Wait A momnet</div>}
        persistor={persistor}
      > */}

      <Layout>
        <PayPalScriptProvider options={{ "client-id": "test" }}>
          <Component {...pageProps} />
          {process.env.NEXT_PUBLIC_ANALYTICS_ID + "wewewewe"}
        </PayPalScriptProvider>
      </Layout>
      {/* </PersistGate> */}
    </Provider>
  );
}
// export default MyApp
export default wrapper.withRedux(MyApp);
