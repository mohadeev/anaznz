import React ,{useState,  useEffect} from "react";
import Style from "../../../../../../styles/Modals/components/Button.module.css";
import {IoMdArrowDropright}from '@react-icons/all-files/io/IoMdArrowDropright'
import {IoMdArrowDropleft}from '@react-icons/all-files/io/IoMdArrowDropleft'



export const ButtonNext = ({ NextOnClick ,DisableNext }) => {
  const Func = ()=>{history.back()}
  return (
    <div className={Style.container}>
      <button className={Style.button} onClick={Func}>
        <IoMdArrowDropleft /> Previews
      </button>
      <button style={{backgroundColor :DisableNext && "#dddddd"}} className={Style.button} onClick={NextOnClick}>
        Next <IoMdArrowDropright />
      </button>
    </div>
  );
};


