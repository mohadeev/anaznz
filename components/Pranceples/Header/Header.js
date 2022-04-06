import React, { useEffect } from "react";
import InputSearch from './HeaderComponents/InputSearch';
import HeaderUserInfo from './HeaderComponents/HeaderUserInfo';
import Logo from './HeaderComponents/Logo';
import Country from './HeaderComponents/Country';
import Style from "../../../styles/Prancepales/Header/Header.module.css";
import Menu from "./HeaderComponents/Menu";

const Header = () => {
  return (
    <div className={Style.container}>      
    <Menu />
      <Logo />
      <InputSearch />
      <HeaderUserInfo />      
    </div>
  );
};

export default Header;
