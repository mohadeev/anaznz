import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";

 function MyApp({ Component, pageProps }) {
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  );
}


 export default MyApp
