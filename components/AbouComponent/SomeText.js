import React from "react";
import Link from "next/link";
import Style from "../../styles/AbouComponent/someText.module.css";

const SomeText = ({ TitleConntet, Content, Flag }) => {
  return (
    <div className={Style.SomeText}>
      <h3 >{TitleConntet}</h3>
      <p>{Content}</p>
      {Flag ? <h4>&quot;Flag&quot;</h4> : ""}
    </div>
  );
};

const Title3 = ({ TitleConntet }) => {
  return (
    <div className={Style.SomeText}>
      <h3>{TitleConntet}</h3>
    </div>
  );
};
export default SomeText;
export const Button = ({ UlrButton, TextButton, Width }) => {
  return (
    <Link href={`${UlrButton ? UlrButton : "#"}`} passHref={true}>
      <button
        style={{ width: `${Width}` }}
        className={Style.button_home_explore}
      >
        {TextButton}
      </button>
    </Link>
  );
};
