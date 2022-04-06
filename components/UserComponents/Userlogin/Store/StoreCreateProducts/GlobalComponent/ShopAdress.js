import React, { useState, useRef } from "react";
import Style from "../../../../../../styles/pages/user/userprofile/Userlogin/Store/Components/BoyFafstion8to20/clothing.module.css";
import { AiOutlineQuestionCircle } from "@react-icons/all-files/ai/AiOutlineQuestionCircle";
import { FcInfo } from "@react-icons/all-files/fc/FcInfo";
import { useSelector, useDispatch } from "react-redux";
import { ReducerShopAdress } from "../../../../../../redux/StoreSlice/StoreSlice";

const ShopAdress = ({ Top, Bottom, CompanyArray }) => {
  const dispatch = useDispatch();
  const HandleChange = (e) => {
    if (e.target.id === "input") {
      dispatch(ReducerShopAdress({ shopadress: e.target.value }));
    } else {
      dispatch(ReducerShopAdress({ ShopAdress: BrandRef.current.value }));
    }
  };

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
                Shopp Address <AiOutlineQuestionCircle />{" "}
              </p>
            </div>
            <input
              id="input"
              className={Style.input}
              placeholder="enter your local Store address"
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

export default ShopAdress;
