import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
// import { createStore } from "redux";
// import { withRedux } from "next-redux-wrapper";
// import { rooteReducer } from "../redux/rooteReducer";
// import { provider } from "react-redux";
// import { store } from "../redux/store";

// const store = createStore(rooteReducer);

 function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <html>
        <Component {...pageProps} />
      </html>
    </Layout>
  );
}

export default MyApp;