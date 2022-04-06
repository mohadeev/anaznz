import React, { useEffect, useState, useRef } from "react";
import Style from "../../../../../../styles/pages/user/userprofile/Userlogin/Store/Components/BoyFafstion8to20/clothing.module.css";
import { AiOutlineQuestionCircle } from "@react-icons/all-files/ai/AiOutlineQuestionCircle";
import { FcInfo } from "@react-icons/all-files/fc/FcInfo";
import { ReducerSheppingType } from "../../../../../../redux/StoreSlice/StoreSlice";
import { useDispatch } from "react-redux";
import ShopAdress from "./ShopAdress";
import SheppingCompany from "./SheppingCompany";

const SheppingAndLocation = ({ Top, Bottom }) => {
  const dispatch = useDispatch();
  const [RefValue, setRefValue] = useState("");
  const Note = (date) => {
    return (
      <p className={Style.note}>
        <FcInfo />
        tell us how you want to sell your product, whither you are selling in
        local store or you want to shepp it
      </p>
    );
  };

  const BrandRef = useRef();
  const Sheping = ["product supply", "Shepping", "Pick up at Store"];
  const HandelChange = (e) => {
    dispatch(ReducerSheppingType({ sheppingtype: BrandRef.current.value }));
  };
  useEffect(() => {
    setRefValue(BrandRef.current.value);
  }, [dispatch]);
  return (
    <>
      <div className={Style.container}>
        <h3 className={Style.title}>Shepping and Product Location: </h3>
        {Top && <div className={Style.devided}> </div>}
        <div className={Style.second_container}>
          <div className={Style.div_info_about_product}>
            <div className={Style.lable_info}>
              <p className={Style.p}>
                {" "}
                Product Condestion <AiOutlineQuestionCircle />{" "}
              </p>
            </div>
            <select
              ref={BrandRef}
              onChange={HandelChange}
              className={Style.button_catgory}
              style={{
                borderRadius: "5px",
              }}
            >
              {Sheping.map((item, index) => (
                <option key={index}>{item} </option>
              ))}
            </select>
          </div>
          {Note("Brand")}
        </div>
        {(() => {
          if (RefValue === "Pick up at Store") {
            return <ShopAdress />;
          } else if (RefValue === "Shepping") {
            return <SheppingCompany />;
          }
        })()}
        {Bottom && <div className={Style.devided}> </div>}{" "}
      </div>
    </>
  );
};

export default SheppingAndLocation;
