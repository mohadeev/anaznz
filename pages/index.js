import React from "react";
import Style from "../styles/Home.module.css";
import Seo from "../components/Seo";
import Link from "next/link";
import HomeDestenatons from "../components/home_components/HomeDestenatons";
import HeaderMedaiVideo from "../components/home_components/HeaderMedaiVideo";
import Chooseus from "../components/home_components/Chooseus";
import DivRaf from "../components/AbouComponent/DivRaf";
import ShortAboutUrEx from "../components/AbouComponent/ShortAboutUrEx";
import FamouseDest from "../components/home_components/FamouseDest";

const index = ({ datas }) => {
  return (
    <div className={Style.home_container}>
      <head>
        <title>Ur Excuersions || Home</title>
      </head>
      <Seo />
      <HeaderMedaiVideo />
      {/*---------------------------------------------------------------------------------*/}
      <ShortAboutUrEx />
      <Chooseus />
      <HomeDestenatons ArraySlice={3} />
      <DivRaf />
      <FamouseDest ByWhat={"id"} />
    </div>
  );
};

export default index;
