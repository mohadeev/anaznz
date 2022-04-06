import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import BoysFastionClothing from "./BoysFastionClothing";
import { ButtonNext } from "../Components/Buttons";
import SellectButtons from "../Components/SellectButtons";
import Style from "../../../../../../styles/pages/user/userprofile/Userlogin/Store/Components/boysFashion.module.css";

const From8to20 = () => {
  const { asPath, pathname } = useRouter();
  const Router = useRouter();

  const [Category, setCategory] = useState("");
  const [SubCategory, setSubCategory] = useState("");

  useEffect(() => {
    let Params = new URL(window.location.href).searchParams;
    const categoryconst = Params.get("subcategory");
    setSubCategory(categoryconst);
  }, [asPath]);
  const [subCategory, setsubCategory] = useState([
    "Clothing",
    "Shoes",
    "Accessories",
  ]);
  const Ref = useRef();
  const HandleChange = (data) => {
    Router.push(asPath + `&subcategory=${data}`);
  };
  return (
    <>
      {(() => {
        if (!asPath.includes(`&subcategory=`)) {
          return (
            <>
              <div className={Style.div_container_buttons}>
                {subCategory.map((item, index) => (
                  <SellectButtons
                    UrlKey={"&subcategory="}
                    LinkItem={item}
                    key={index}
                    Item={item}
                  />
                ))}
              </div>
              <ButtonNext DisableNext={true} />
            </>
          );
        }
      })()}
      {(() => {
        if (SubCategory === "Shoes") {
          return <p>shose</p>;
        } else if (SubCategory === "Clothing") {
          return (
            <>
              <BoysFastionClothing />
            </>
          );
        } else if (SubCategory === "Accessories") {
          return <p>Accessories</p>;
        }
      })()}
    </>
  );
};

export default From8to20;
