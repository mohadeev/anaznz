import React from 'react'
import Contact_us_Form from './contact_form/Contact_us_Form'
import Style from "../styles/SideBar/SideBar.module.css";

const SideBar = () => { 
    return (
      <div
        className={Style.div_sidebar}
        // style={{
        //   width: "100%",
        //   height: "1000px",
        //   marginTop: "1100px",
        //   maxWidth: "468.6666666666667px",
        // }}
      >
        <Contact_us_Form />
      </div>
    );
}

export default SideBar
