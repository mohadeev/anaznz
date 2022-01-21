import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

function MyApp({ Component, pageProps }) {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate
        loading={<div>Please Wait A momnet</div>}
        persistor={persistor}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
