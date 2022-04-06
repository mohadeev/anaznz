import React, { useState, useRef } from "react";
import {ClothingArrayColor} from "../../StroeArrays/ClothingBrands";
import Style from "../../../../../../styles/pages/user/userprofile/Userlogin/Store/Components/BoyFafstion8to20/clothing.module.css";
import { AiOutlineQuestionCircle } from "@react-icons/all-files/ai/AiOutlineQuestionCircle";
import { FcInfo } from "@react-icons/all-files/fc/FcInfo";
import { ReducerColor } from "../../../../../../redux/StoreSlice/StoreSlice";
import { useDispatch } from "react-redux";


const Color = ({ Top, Bottom, CompanyArray }) => {
    const dispatch = useDispatch();

  const Note = (date) => {
    return (
      <p className={Style.note}>
        <FcInfo />
        Please note that we don't review your {date} name , make you write
        corrently
      </p>
    );
  };
  const BrandRef = useRef();
  const HandelChange = (e) => {
    if (e.target.id === "input") {
      dispatch(ReducerColor({ color: e.target.value }));
    } else {
      dispatch(ReducerColor({ color: BrandRef.current.value }));
    }
  };
  return (
    <>
      <div className={Style.container}>
        <h3 className={Style.title}>Product listing: </h3>
        {Top && <div className={Style.devided}> </div>}
        <div className={Style.second_container}>
          <div className={Style.div_info_about_product}>
            <div className={Style.lable_info}>
              <p className={Style.p}>
                Product Color <AiOutlineQuestionCircle />{" "}
              </p>
            </div>
            <select
              ref={BrandRef}
              onChange={HandelChange}
              className={Style.button_catgory}
            >
              {ClothingArrayColor.map((item, index) => (
                <option key={index}>{item} </option>
              ))}
            </select>
            <input
              id="input"
                            onChange={HandelChange}

              className={Style.input}
              
              placeholder="enter your cusstom Brand name"
            />
          </div>
        </div>
        {Bottom && <div className={Style.devided}> </div>}
      </div>
    </>
  );
};

export default Color;
