import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
store";

// const store = createStore(rooteReducer);
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
          <Component {...pageProps} />
    </Layout>
  );
}


 export default MyApp
