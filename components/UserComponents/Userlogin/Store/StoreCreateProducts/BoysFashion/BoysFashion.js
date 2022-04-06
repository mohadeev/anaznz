import React, { useState } from "react";
import { useRouter } from "next/router";
import From8to20 from "./From8to20";
import { ButtonNext } from "../Components/Buttons";
import SellectButtons from "../Components/SellectButtons";
import Style from "../../../../../../styles/pages/user/userprofile/Userlogin/Store/Components/boysFashion.module.css";

const BoysFashion = () => {
  const { asPath, pathname } = useRouter();
  const Router = useRouter();
  const [sunbCategorie, setsunbCategorie] = useState([
    "Clothing",
    "Shoes",
    "Accessories",
  ]);

  const [WhichAge, setWhichAge] = useState([
    { name: "BIG BOYS (8-20)", age: "8-20" },
    { name: "LITTLE BOYS (2-7)", age: "2-7" },
    { name: "BABY BOYS (0-24M)", age: "0-2" },
  ]);

  return (
    <>
      {(() => {
        if (!asPath.includes("&age=")) {
          return (
            <>
              <div className={Style.div_container_buttons}>
                {WhichAge.map(({ name, age }, index) => (
                  <SellectButtons
                    UrlKey={"&age="}
                    LinkItem={age}
                    key={index}
                    Item={name}
                  />
                ))}
              </div>
              <ButtonNext DisableNext={true} />
            </>
          );
        }
      })()}

      {(() => {
        if (asPath.includes("&age=8-20")) {
          return <From8to20 />;
        } else if (asPath.includes("&age=2-7")) {
          return (
            <div>
              <p>Hello ages of 2-7</p>
            </div>
          );
        } else if (asPath.includes("&age=0-2")) {
          return (
            <div>
              <p>Hello ages of 2-7</p>
            </div>
          );
        }
      })()}
    </>
  );
};

export default BoysFashion;
