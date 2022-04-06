import React, { useState } from "react";
import Style from "../../../styles/pages/Search/components/condesition.module.css";
import SearchByCategories from "./SearchByCategories";
import { useRouter } from "next/router";

const Condesition = () => {
  const { asPath, pathname } = useRouter();
  const [condestion, setcondestion] = useState(["New", "Used"]);
  const [Display, setDisplay] = useState(true);
  const Router = useRouter();
  const HandleClick = () => setDisplay(!Display);
  const HandelCHange = (data) => {
    if (!asPath.includes(`$cs=`)) {
      Router.push(asPath + `$cs=${data}$ce=`);
    } else if (asPath.includes(`$cs=`)) {
      if (asPath.includes(`$cs=${data}$ce=`)) {
        let data1 = asPath.split("");
        let data2 = asPath.split("");
        let data3 = asPath.split("");
        let place1;
        let place2;
        const Filtered = data1.filter((item) => item === "$");
        const Func = () => {
          Filtered.map(() => {
            let SplceFromHere = data2.findIndex((item) => item === "$");
            const Sliced = data2.splice(SplceFromHere, 4);
            if (Sliced.includes("$" && "c" && "s")) {
              place1 = SplceFromHere;
            } else if (Sliced.includes("$" && "c" && "e")) {
              place2 = SplceFromHere;
            }
          });
        };

        Func();
        let MowManyIndexes = place2 - place1;
        console.log(MowManyIndexes);
        MowManyIndexes = MowManyIndexes + 8;
        console.log(MowManyIndexes);
        const Spliced = data3.splice(place1, MowManyIndexes);
        console.log(MowManyIndexes);
        console.log(Spliced);

        Router.push(data3.join(""));
      } else if (!asPath.includes(`$cs=${data}$ce=`)) {
        let data1 = asPath.split("");
        let data2 = asPath.split("");
        let data3 = asPath.split("");
        let place1;
        let place2;
        const Filtered = data1.filter((item) => item === "$");
        const Func = () => {
          Filtered.map(() => {
            let SplceFromHere = data2.findIndex((item) => item === "$");
            const Sliced = data2.splice(SplceFromHere, 4);
            if (Sliced.includes("$" && "c" && "s")) {
              place1 = SplceFromHere;
            } else if (Sliced.includes("$" && "c" && "e")) {
              place2 = SplceFromHere;
            }
          });
        };

        Func();
        let MowManyIndexes = place2 - place1;
        console.log(MowManyIndexes);
        MowManyIndexes = MowManyIndexes + 8;
        console.log(MowManyIndexes);
        const Spliced = data3.splice(place1, MowManyIndexes);
        console.log(MowManyIndexes);
        console.log(Spliced);

        Router.push(data3.join("") + `$cs=${data}$ce=`);
        // alert("not includes");
      }
    }
  };
  return (
    <div className={Style.container}>
      <div onClick={HandleClick}>
        <SearchByCategories Category={"Condestion"} />
      </div>
      {Display && (
        <div className={Style.input_conainer}>
          {condestion.map((item, index) => (
            <label className={Style.lable} htmlFor={item} key={index}>
              <input
                id={item}
                className={Style.input}
                onChange={() => HandelCHange(item)}
                type="checkbox"
              />
              <span className={Style.span}>{item}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};
export default Condesition;
