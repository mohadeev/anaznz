import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Style from "../styles/Layout-css/Layout.module.css";


const Layout = ({ children }) => {
  return (
    <div className={Style.div_layout}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Poppins&display=swap"
          rel="stylesheet"
        />
      </head>

      <Header /> 
       {children}
      <Footer />
    </div>
  );
};

export default Layout;
