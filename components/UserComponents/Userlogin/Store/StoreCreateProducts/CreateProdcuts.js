import React, { useState, useRef } from "react";
import { AllDepatment } from "../../../../../backend/AllDepatment";
import Style from "../../../../../styles/pages/user/userprofile/Userlogin/Store/Components/createprodcuts.module.css";
import { useRouter } from "next/router";
import {useSelector , useDispatch} from 'react-redux'
import BoysFashion from "./BoysFashion/BoysFashion";
import GoogelAds from "../../../../Pranceples/GoogelAds/index";
import NameAndCategorie from './Components/NameAndCategorie';
import { ButtonNext} from "./Components/Buttons";

const CreateProdcuts = () => {
  const Router = useRouter();
  const { asPath, pathname } = useRouter();
  const dispatch= useDispatch()
  const Ref = useRef();
  const [Name, setName] = useState("");
    const Categorie = useSelector((state) => state.StoreSliceReducer.RCategorie);

  const HandleSubmite = (e) => {
    e.preventDefault();
    Router.push(asPath + `?&categori=${Categorie}` + `&name=${Name}`);
  };
  const HandelCHange = (e) => {
    setName(e.target.value);
  };
  return (
    <div className={Style.container}>
      <div className={Style.second_container}>
        {(() => {
          if (!asPath.includes("categori=")) {
            return (
              <>
                <NameAndCategorie Top={true} />

                <ButtonNext
                  PreviewsOnClick={() => {
                    alert("Hellotwo");
                  }}
                  NextOnClick={HandleSubmite}
                />
              </>
            );
          }
        })()}
        {(() => {
          if (asPath.includes("categori=Boy%27s%20Fashion")) {
            return <BoysFashion />;
          }
        })()}
      </div>
      <GoogelAds />
    </div>
  );
};

export default CreateProdcuts;
