import React, { useState } from "react";
import Style from "../styles/gellary/gellary.module.css";
import { ArrayImages } from "./ArrayImages";

const Gellary = ({ Gellary1, Gellary2, Gellary3, Gellary4 }) => {
  const [sGellary1, setsGellary1] = useState(ArrayImages[0]);
  const [sGellary2, setsGellary2] = useState(ArrayImages[1]);
  const [sGellary3, setsGellary3] = useState(ArrayImages[2]);
  const [sGellary4, setsGellary4] = useState(ArrayImages[3]);

  return (
    <div className={Style.Gellary_container}>
      <div
        id="Gellary1"
        className={Style.Gellary_item}
        style={{ backgroundImage: `url(${sGellary1})` }}
      ></div>
      <div
        id="Gellary2"
        className={Style.Gellary_item}
        style={{ backgroundImage: `url(${sGellary2})` }}
      ></div>
      <div
        id="Gellary3"
        className={Style.Gellary_item}
        style={{ backgroundImage: `url(${sGellary3})` }}
      ></div>
      <div
        id="Gellary4"
        className={Style.Gellary_item}
        style={{ backgroundImage: `url(${sGellary4})` }}
      ></div>
    </div>
  );
};

export default Gellary;
