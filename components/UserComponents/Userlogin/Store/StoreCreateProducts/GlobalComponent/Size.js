import React, { useState, useRef } from "react";
import { ClothingArraySize } from "../../StroeArrays/ClothingBrands";
import Style from "../../../../../../styles/pages/user/userprofile/Userlogin/Store/Components/BoyFafstion8to20/clothing.module.css";
import { AiOutlineQuestionCircle } from "@react-icons/all-files/ai/AiOutlineQuestionCircle";
import { FcInfo } from "@react-icons/all-files/fc/FcInfo";
import { ReducerSize } from "../../../../../../redux/StoreSlice/StoreSlice";
import { useSelector, useDispatch } from "react-redux";

const Size = ({ Top, Bottom, ClothingSize, Title }) => {
  const dispatch = useDispatch();
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
  const HandelChange = (e) => {
    if (e.target.id === "input") {
      dispatch(ReducerSize({ size: e.target.value }));
    } else {
      dispatch(ReducerSize({ size: BrandRef.current.value }));
    }
  };
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
                Product Size <AiOutlineQuestionCircle />{" "}
              </p>
            </div>
            <select
              ref={BrandRef}
              onChange={HandelChange}
              className={Style.button_catgory}
            >
              {ClothingSize.map((item, index) => (
                <option key={index}>{item} </option>
              ))}
            </select>
            <input
              className={Style.input}
              id="input"
              onChange={HandelChange}
              placeholder="enter your cusstom product size"
            />
          </div>
        </div>
        {Bottom && <div className={Style.devided}> </div>}
      </div>
    </>
  );
};

export default Size;
