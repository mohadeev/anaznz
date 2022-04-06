import React from 'react'
import Style from "../../../../styles/Prancepales/Header/HeaderComponents/SearchArea.module.css";
import { useSelector, useDispatch } from "react-redux";


const SearchArea = () => {
      const MenuSearchValue = useSelector(
        (state) => state.HeaderMenuRuducer.MenuSearchValue
      );
  return (
    <div className={Style.div_search}>{MenuSearchValue}</div>
  )
}

export default SearchArea