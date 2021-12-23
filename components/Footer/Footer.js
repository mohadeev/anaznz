import React from "react";
import Style from "../../styles/footer/footer.module.css";
import Image from "next/image";


const Footer = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url('/images/header.png')` }}
        className={Style.div_wayes}
      ></div>
      <div style={{ backgroundColor: "" }} className={Style.div_footer}>
        <div className={Style.ovely}></div>
      </div>
    </>
  );
};

export default Footer;
