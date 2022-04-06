import React, { useState, useRef } from "react";
import Style from "../../../../../../styles/pages/user/userprofile/Userlogin/Store/Components/BoyFafstion8to20/clothing.module.css";
import { AiOutlineQuestionCircle } from "@react-icons/all-files/ai/AiOutlineQuestionCircle";
import { FcInfo } from "@react-icons/all-files/fc/FcInfo";
import { ReducerType } from "../../../../../../redux/StoreSlice/StoreSlice";
import { useSelector, useDispatch } from "react-redux";

const InfoAboutProduct = ({ Top, Bottom, TypeArray, Title, DisplayNote }) => {
  const dispatch = useDispatch()
  const HandleChange =(e)=>{
    if(e.target.id ==="input"){
      dispatch(ReducerType({type : e.target.value}));
    }else{
      dispatch(ReducerType({type : BrandRef.current.value}));
    }
  }
  const Note = (date) => {
    return (
      <p className={Style.note}>
        <FcInfo />
        Please note that we don&apos;t review your {date} name , make you write
        corrently
      </p>
    );
  };
  const BrandRef = useRef();

  return (
    <>
      <div className={Style.container}>
        {Title && <h3 className={Style.title}>Product listing: </h3>}{" "}
        {Top && <div className={Style.devided}> </div>}
        <div className={Style.second_container}>
          <div className={Style.div_info_about_product}>
            <div className={Style.lable_info}>
              <p className={Style.p}>
                {" "}
                Product Type <AiOutlineQuestionCircle />{" "}
              </p>
            </div>
            <select
              ref={BrandRef}
              onChange={HandleChange}
              className={Style.button_catgory}
            >
              {TypeArray &&
                TypeArray.map((item, index) => (
                  <option key={index}>{item} </option>
                ))}
            </select>
            <input
            id="input"
              onChange={HandleChange}
              className={Style.input}
              placeholder="enter your cusstom Brand name"
            />
          </div>
          {DisplayNote && Note("Brand")}
        </div>
        {Bottom && <div className={Style.devided}> </div>}
      </div>
    </>
  );
};

export default InfoAboutProduct;
