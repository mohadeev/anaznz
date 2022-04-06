import React, { useState } from "react";
import { BsList } from "@react-icons/all-files/bs/BsList";
import Style from "../../../../styles/Prancepales/Header/HeaderComponents/Menu.module.css";
import { HeaderMenuRuducer } from  '../../../../redux/HeaderSlice/HeadeMenu'
import {useDispatch} from 'react-redux'


const Notfy = () => {
  const dispatch = useDispatch();
  const ShowMenueFun=()=>{
    dispatch(HeaderMenuRuducer());
  }
  return (
    <div className={Style.icon_container}>
      <BsList onClick={ShowMenueFun} />
    </div>
  );
};

export default Notfy;
