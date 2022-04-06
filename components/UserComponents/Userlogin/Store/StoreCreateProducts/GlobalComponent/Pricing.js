import React, { useState, useRef } from "react";
import Style from "../../../../../../styles/pages/user/userprofile/Userlogin/Store/Components/BoyFafstion8to20/pricing.module.css";
import { AiOutlineQuestionCircle } from "@react-icons/all-files/ai/AiOutlineQuestionCircle";
import { FcInfo } from "@react-icons/all-files/fc/FcInfo";
import {
  ReducerPricing,
  ReducerDescount,
} from "../../../../../../redux/StoreSlice/StoreSlice";
import {useDispatch} from 'react-redux'

// import Pricing from './Pricing';




const Pricing = ({Top , Bottom}) => {
    const dispatch = useDispatch();
  const BrandRef = useRef();
  const HandelChange = (e) => {
    if (e.target.id === "input1") {
      dispatch(ReducerPricing({ price: e.target.value }));
    } else {
      dispatch(ReducerDescount({ descount: e.target.value }));
    }
  };
  return (
    <div className={Style.container}>
      <h3 className={Style.title}>Pricing: </h3>
      {Top && <div className={Style.devided}> </div>}{" "}
      <div className={Style.second_container}>
        <div className={Style.div_info_about_product}>
          <div className={Style.lable_info}>
            <p className={Style.p}>
              * Your Price <AiOutlineQuestionCircle />
            </p>
          </div>
          <div
            className={Style.button_catgory}
          >
            Price $
          </div>
          <input
          id="input1"
                      onChange={HandelChange}

            type="number"
            min="0"
            className={Style.input}
            // placeholder=""
          />
        </div>
      </div>
      <div className={Style.second_container}>
        <div className={Style.div_info_about_product}>
          <div className={Style.lable_info}>
            <p className={Style.p}>
              Price Descount <AiOutlineQuestionCircle />
            </p>
          </div>
          <div ref={BrandRef} id="input1" className={Style.button_catgory}>
            Descount $
          </div>
          <input
            onChange={HandelChange}
            type="number"
            min="0"
            className={Style.input}
            // placeholder=""
          />
        </div>
      </div>
      {Bottom && <div className={Style.devided}> </div>}{" "}
    </div>
  );
};

export default Pricing;
