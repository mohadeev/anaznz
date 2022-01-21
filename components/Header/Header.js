import React, { useState, useEffect } from "react";
import Style from "../../styles/Header.module.css";
import Link from "next/link";
import LiveCHat from "../LiveChat/LiveCHat";
import { TiThMenu } from "@react-icons/all-files/ti/TiThMenu";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import Socialmedia from "../socialmedia/Socialmedia";
import Basket from "../Basket/Basket";
import Search from "../../DaysData/Fliter/Search";

export const MenuData = [
  { name: "Home", link: "/" },
  { name: "Tours & Excursions", link: "/tours-and-circuits" },
  { name: "About us", link: "/about-us" },
  { name: "Contact us", link: "/contact-us" },
  { name: "FaQ", link: "/coming-soon" },
  { name: "Our Shop", link: "/coming-soon" },
  { name: "Blog", link: "/coming-soon" },
];

const Header = () => {
  const [Window, setWindow] = useState("");
  const [Hide, setHide] = useState(true);
  const [WindowScreen, setWindowScreen] = useState("");

  useEffect(() => {
    setWindowScreen(window.screen.width);
    setWindow(window);
    if (WindowScreen > 400) {
      setHide(true);
    } else if (WindowScreen <= 400) {
      setHide(false);
    } else {
      setHide(true);
    }
  }, []);

  const LogoMenuShow = () => {
    if (WindowScreen > 1000) {
      setHide(true);
    }
  };
  const HideMenu = () => {
    if (WindowScreen <= 1000) {
      setHide(!Hide);
    }
  };

  const [ArrayItemsHeader, setArrayItemsHeader] = useState([
    { name: "Home", link: "/" },
    { name: "Tours & Excursions", link: "/tours-and-circuits" },
    { name: "About us", link: "/about-us" },
    { name: "Contact us", link: "/contact-us" },
    { name: "FaQ", link: "/coming-soon" },
    { name: "Our Shop", link: "/coming-soon" },
    { name: "Blog", link: "/coming-soon" },
  ]);
  return (
    <>
      <div
        className={Style.header}
        style={{
          backgroundImage: `url('/images/header.png')`,
        }}
        onClick={LogoMenuShow}
      >
        <Link href="/" passHref={true}>
          <div
            className={Style.logo}
            style={{
              backgroundImage: `url('/images/800px-Amazon_logo.svg.c2a7d719.png')`,
            }}
          ></div>
        </Link>
        <div className={Style.div_nav_bar_mobile_icon}>
          {Hide ? (
            <AiOutlineClose onClick={HideMenu} />
          ) : (
            <TiThMenu onClick={HideMenu} />
          )}
        </div>
        <div className={Hide ? Style.div_nav_bar : Style.div_nav_bar_hide}>
          <ul className={Style.ul_nav_bar}>
            {MenuData.map(({ link, name }) => (
              <li key={Math.random()} className={Style.li_nav_bar}>
                <Link href={link} passHref={true}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Search />
        <Basket />
      </div>
      <LiveCHat />
    </>
  );
};
export default Header;
