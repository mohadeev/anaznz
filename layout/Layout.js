import React, { useState, useEffect, useRef } from "react";
import Footer from "../components/Pranceples/Footer/Footer";
import Header from "../components/Pranceples/Header/Header";
import Style from "../styles/Layout-css/Layout.module.css";
import { Head } from "next/head";
import HeaderMenu from "./../components/Pranceples/Header/HeaderMenu/HeaderMenu";
import { useSelector } from "react-redux";
const layout = ({ children }) => {
  const DisplayMenu = useSelector(
    (state) => state.HeaderMenuRuducer.HeaderMenu
  );

  useEffect(() => {
    const fontLoader0 = function (param) {
      const link = document.createElement("link");
      link.rel = "preconnect";
      //link.href = 'http://fonts.googleapis.com/css?family=Oswald&effect=neon';
      document.head.appendChild(link);
      link.href = "https://fonts.gstatic.com";
    };
    fontLoader0();
    const fontLoader = function (param) {
      const link = document.createElement("link");
      link.type = "text/css";
      link.rel = "stylesheet";
      //link.href = 'http://fonts.googleapis.com/css?family=Oswald&effect=neon';
      document.head.appendChild(link);
      link.href =
        "https://fonts.googleapis.com/css2?family=Island+Moments&family=Over+the+Rainbow&family=Permanent+Marker&family=Playfair+Display:wght@600&family=Poppins:wght@100;200;300;400;600;700;800;900&display=swap";
    };
    fontLoader();
    const fontLoader2 = function (param) {
      const link = document.createElement("link");
      link.type = "text/css";
      link.rel = "stylesheet";
      //link.href = 'http://fonts.googleapis.com/css?family=Oswald&effect=neon';
      document.head.appendChild(link);
      link.href =
        "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap";
    };
    fontLoader2();
  }, []);
  return (
      <div className={Style.div_layout}>
        <Header />
        {DisplayMenu ? <HeaderMenu /> : null}
        {children}
        <Footer />
      </div>
  );
};

export default layout;
