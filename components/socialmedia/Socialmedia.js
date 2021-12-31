import React from "react";
import { FiInstagram } from "@react-icons/all-files/fi/FiInstagram";
import { AiOutlineWhatsApp } from "@react-icons/all-files/ai/AiOutlineWhatsApp";
import { FiFacebook } from "@react-icons/all-files/fi/FiFacebook";
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";
import { FiTwitter } from "@react-icons/all-files/fi/FiTwitter";


import Style from "../../styles/SocialmediaCss/Socialmedia.module.css";

const Socialmedia = () => {
  return (
    <div className={Style.div_Socialmedia}>
      <span className={Style.each_socail}>
        <FiInstagram />
      </span>
      <span className={Style.each_socail}>
        <AiOutlineWhatsApp />
      </span>
      <span className={Style.each_socail}>
        <FiFacebook />
      </span>
      <span className={Style.each_socail}>
        <HiOutlineMail />
      </span>
      <span className={Style.each_socail}>
        <FiTwitter />
      </span>
    </div>
  );
};

export default Socialmedia;
