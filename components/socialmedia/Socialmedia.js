import React from "react";
import { FiInstagram } from "@react-icons/all-files/fi/FiInstagram";
import { AiOutlineYoutube } from "@react-icons/all-files/ai/AiOutlineYoutube";
import { AiOutlineWechat } from "@react-icons/all-files/ai/AiOutlineWechat";

import { FiFacebook } from "@react-icons/all-files/fi/FiFacebook";
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";
import { FiTwitter } from "@react-icons/all-files/fi/FiTwitter";

import Style from "../../styles/SocialmediaCss/Socialmedia.module.css";

export const SocailMediaData = [
  { icon: <FiInstagram />, link: "https://www.instagram.com/urxcursions/" },
  {icon : <AiOutlineWechat /> , link : ""},
  { icon: <AiOutlineYoutube />, link: "" },
  { icon: <FiFacebook />, link: "" },
  { icon: <FiTwitter />, link: "" },
];
const Socialmedia = () => {
  return (
    <div className={Style.div_Socialmedia}>
      {SocailMediaData.map(({ icon, link }) => (
        <a
          key={Math.random()}
          href={link}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className={Style.each_socail}>{icon}</span>
        </a>
      ))}
    </div>
  );
};

export default Socialmedia;
