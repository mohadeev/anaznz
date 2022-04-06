import Style from "../../../styles/pages/Search/components/searchsidebar.module.css";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import {
  HeaderMenuSearch,
  HeaderSearsch,
} from "../../../redux/HeaderSlice/HeadeMenu";
import SearchByStarts from "./SearchByStarts";
import SearchByCategories from "./SearchByCategories";
import ModelYear from "./ModelYear";
import Condesition from "./Condesition";
import Color from "./Color";



const SearchSideBar = () => {
  const InputSearch = useSelector(
    (state) => state.HeaderMenuRuducer.InputSearch
  );

  return (
    <div className={Style.conainer}>
      {/* <SearchByCategories />    */}
      <SearchByStarts />
      <ModelYear />
      <Condesition />
      <Color />
    </div>
  );
};

export default SearchSideBar;
