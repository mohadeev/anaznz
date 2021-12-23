import React, { useEffect } from "react";
import Style from "../../styles/Header.module.css";
import Link from "next/link";
import LiveCHat from "../LiveChat/LiveCHat";
import Image from "next/image";



const Header = () => {

  return (
    <>
      <LiveCHat />

      <div
        className={Style.header}
        style={{
          backgroundImage: `url('/images/header.png')`,
        }}
      >
          <div
            className={Style.logo}
            style={{
              backgroundImage: `url('/images/800px-Amazon_logo.svg.c2a7d719.png')`,
            }}
          ></div>
        <div className={Style.div_nav_bar}>
          <ul className={Style.ul_nav_bar}>
            <li className={Style.li_nav_bar}>
              <Link href="/">Home</Link>
            </li>
            <li className={Style.li_nav_bar}>
              <Link href="http://localhost:3000/tours-and-circuits/">
                Tours & Cuircuits
              </Link>
            </li>
            <li className={Style.li_nav_bar}>
              <Link href="http://localhost:3000/tours-and-circuits/tours-from-marrakech/Fmmf">
                Excursions
              </Link>
            </li>
            <li className={Style.li_nav_bar}>
              <Link href="http://localhost:3000/tours-and-circuits/tours-from-marrakech/Fmmf">
                About us
              </Link>
            </li>
            <li className={Style.li_nav_bar}>
              <Link href="http://localhost:3000/tours-and-circuits/tours-from-marrakech/Fmmf">
                Contact us
              </Link>
            </li>
            <li className={Style.li_nav_bar}>
              <Link href="http://localhost:3000/tours-and-circuits/tours-from-marrakech/Fmmf">
                FaQ
              </Link>
            </li>
            <li className={Style.li_nav_bar}>
              <Link href="http://localhost:3000/tours-and-circuits/tours-from-marrakech/Fmmf">
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
