import React, { useState } from "react";
import Style from "../../../styles/pages/Search/components/color.module.css";
import SearchByCategories from "./SearchByCategories";
import DispalyData from "./DispalyData";

const Condesition = () => {
  const [condestion, setcondestion] = useState([
    { name: "red", },
    { name: "black" },
    { name: "white" },
    { name: "gold" },
    { name: "silver" },
    { name: "pink" },
    { name: "Custom" ,color : "#f8f8f800" },
  ]);
  const [Display, setDisplay] = useState(true);

  const HandleClick = () => setDisplay(!Display);

  const HandelCHange = (data) => {
    alert(data);
  };
  return (
    <div className={Style.container}>
      <div onClick={HandleClick}>
        <SearchByCategories Category={"Color"} />
      </div>
      {Display && (
        <div className={Style.input_conainer}>
          {condestion.map(({ name, color }, index) => (
            <DispalyData ColorName={name} ItemColor={color ? color : name} Key={index} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Condesition;
