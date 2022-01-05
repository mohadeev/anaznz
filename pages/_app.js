import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";



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


// export default withRedux(makeStore)(MyApp);
