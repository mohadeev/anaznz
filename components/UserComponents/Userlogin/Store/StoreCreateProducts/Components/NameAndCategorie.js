import React, { useState, useRef } from "react";
import Style from "../../../../../../styles/pages/user/userprofile/Userlogin/Store/Components/BoyFafstion8to20/clothing.module.css";
import { AiOutlineQuestionCircle } from "@react-icons/all-files/ai/AiOutlineQuestionCircle";
import { FcInfo } from "@react-icons/all-files/fc/FcInfo";
import { AllDepatment } from "../../../../../../backend/AllDepatment";
import { useRouter } from "next/router";
import { ReducerRCategorie } from "../../../../../../redux/StoreSlice/StoreSlice";
import { useSelector, useDispatch } from "react-redux";


const NameAndCategorie = ({ Top, Bottom }) => {
  const Router = useRouter();
  const { asPath, pathname } = useRouter();
  const Ref = useRef();
  const [Name, setName] = useState("");
  const [BrandName , setBrandName] = useState("")
  const dispatch = useDispatch();
  const HandelCHange = (e) => {
    setName(e.target.value);
    dispatch(ReducerRCategorie({ RCategorie: BrandRef.current.value}));
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
        <h3 className={Style.title}>
          Create Product Sellect your Categorie and your Produjct name:{" "}
        </h3>
        {Top && <div className={Style.devided}> </div>}
        <div className={Style.second_container}>
          <div className={Style.div_info_about_product}>
            <div className={Style.lable_info}>
              <p className={Style.p}>
                Categorie & Name <AiOutlineQuestionCircle />{" "}
              </p>
            </div>
            <select
              ref={BrandRef}
              onChange={HandelCHange}
              className={Style.button_catgory}
            >
              {AllDepatment.map((item, index) => (
                <option key={index}>{item.name} </option>
              ))}
            </select>
            <input
              className={Style.input}
              placeholder="enter your product name"
              style={{ width: "400px" }}
            />
          </div>
        </div>
        {Bottom && <div className={Style.devided}> </div>}
      </div>
    </>
  );
};

export default NameAndCategorie;
