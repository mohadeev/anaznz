import React, { useState, useEffect } from "react";
import Style from "../../styles/Header.module.css";
import Link from "next/link";
import LiveCHat from "../LiveChat/LiveCHat";
import { TiThMenu } from "@react-icons/all-files/ti/TiThMenu";
import { AiOutlineClose } from "@react-icons/all-files/Ai/AiOutlineClose";

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
    if (WindowScreen > 400) {
      setHide(true);
    }
  };
  const HideMenu = () => {
    if (WindowScreen <= 400) {
      setHide(!Hide);
    }
  };

  return (
    <>
      <LiveCHat />
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

        <div className={Hide ? Style.div_nav_bar : Style.div_nav_bar_hide }>
          <ul className={Style.ul_nav_bar}>
            
            <li className={Style.li_nav_bar}>
              <Link href="/" passHref={true}>
                Home
              </Link>
            </li>
            <li className={Style.li_nav_bar}>
              <Link href="/tours-and-circuits/tours-from-marrakech/Fmmf">
                Tours & Cuircuits
              </Link>
            </li>
            <li className={Style.li_nav_bar}>
              <Link href="/">Excursions</Link>
            </li>
            <li className={Style.li_nav_bar}>
              <Link href="/tours-and-circuits/tours-from-marrakech/Fmmf">
                About us
              </Link>
            </li>
            <li className={Style.li_nav_bar}>
              <Link href="/">
                Contact us
              </Link>
            </li>
            <li className={Style.li_nav_bar}>
              <Link href="">
                FaQ
              </Link>
            </li>
            <li className={Style.li_nav_bar}>
              <Link href="/">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </>
  );
};
export default Header;
