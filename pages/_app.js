import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducers } from "../redux/reducers/rootReducers";
import {applyMiddleware} from "redux";
import ReduxThunk from 'redux-thunk'
import withRedux from "next-redux-wrapper";

const store = createStore(rootReducers, applyMiddleware(ReduxThunk));

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
}

//export default MyApp;

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
