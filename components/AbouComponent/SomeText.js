import React from "react";
import Style from "../../styles/AbouComponent/DivRaf.module.css";

const SomeText = ({ TitleConntet , Content , Flag }) => {
  return (
    <div className={Style.SomeText}>
      <h3>{TitleConntet}</h3>
      <p>{Content}</p>
      {Flag ? <h4>&quot;Flag&quot;</h4> : ""}
    </div>
  );
};

export default SomeText;
