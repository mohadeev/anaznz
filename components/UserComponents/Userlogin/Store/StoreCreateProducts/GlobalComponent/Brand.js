import React, { useState, useRef } from "react";
import Style from "../../../../../../styles/pages/user/userprofile/Userlogin/Store/Components/BoyFafstion8to20/clothing.module.css";
import { AiOutlineQuestionCircle } from "@react-icons/all-files/ai/AiOutlineQuestionCircle";
import { FcInfo } from "@react-icons/all-files/fc/FcInfo";
import { useSelector, useDispatch } from "react-redux";
import { ReducerBrand } from "../../../../../../redux/StoreSlice/StoreSlice";



const Brand = ({ Top, Bottom , CompanyArray}) => {
  const dispatch = useDispatch()
  const HandleChange =(e)=>{
    if(e.target.id === "input"){
      dispatch(ReducerBrand({brand : e.target.value}));
    }else{
      dispatch(ReducerBrand({ brand: BrandRef.current.value }));
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
        <h3 className={Style.title}>Product listing: </h3>

        {Top && <div className={Style.devided}> </div>}
        <div className={Style.second_container}>
          <div className={Style.div_info_about_product}>
            <div className={Style.lable_info}>
              <p className={Style.p}>
                {" "}
                Producing company <AiOutlineQuestionCircle />{" "}
              </p>
            </div>
            <select
              ref={BrandRef}
              onChange={HandleChange}
              className={Style.button_catgory}
            >
              {CompanyArray.map((item, index) => (
                <option key={index}>{item} </option>
              ))}
            </select>
            <input
            id="input"
              className={Style.input}
              placeholder="enter your cusstom Brand name"
              onChange={HandleChange}
            />
          </div>
          {Note("Brand")}
        </div>
        {Bottom && <div className={Style.devided}> </div>}
      </div>
    </>
  );
};

export default Brand;
