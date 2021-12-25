import React, { useState, useEffect, useRef } from "react";
import Contact_us_Form from "./contact_form/Contact_us_Form";
import Style from "../styles/SideBar/SideBar.module.css";

const SideBar = () => {
  const reff = useRef();
  const [RefCurrent, setRefCurrent] = useState();
  const [Window, setwindow] = useState();

  const [Document, setDocumenr] = useState();

  useEffect(() => {
    setRefCurrent(reff.current);

    setwindow(window);

    window.onscroll = function (ev) {
      if (
        Window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200
      ) {
        RefCurrent.className = Style.div_style3;
      } else if (document.documentElement.scrollTop < 1000) {
        RefCurrent.className = Style.div_style1;
      } else if (document.documentElement.scrollTop >= 1000) {
        RefCurrent.className = Style.div_style2;
      }
    };
  },);

  const AskForContactForm = () => {
    RefCurrent.className = Style.div_style2;
  };
  return (
    <div className={Style.div_mom}>
      <div ref={reff} className={Style.div_style1} onClick={AskForContactForm}>
        <Contact_us_Form />
      </div>
    </div>
  );
};

export default SideBar;
