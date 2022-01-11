import React, { useState, useEffect, useRef } from "react";
import Style from "../../styles/AbouComponent/DetlaisDes.module.css";

const DetlaisDes = ({
  Image,
  Image1,
  Image2,
  Image3,
  Atraction,
  Content,
  Atraction1,
  Content1,
  Atraction2,
  Content2,
  Atraction3,
  Content3,
  Image1Postion,
}) => {
  const BakcChange = useRef();
  const BakcChange1 = useRef();
  const BakcChange2 = useRef();
  const BakcChange3 = useRef();

  const CheckIF = (e) => {
    if (e.target.id === "div_modal") {
      BakcChange.current.style.display = "flex";
      BakcChange.current.addEventListener("mouseleave", () => {
        BakcChange.current.style.display = "none";
      });
    } else if (e.target.id === "div_modal_1") {
      BakcChange1.current.style.display = "flex";
      BakcChange1.current.addEventListener("mouseleave", () => {
        BakcChange1.current.style.display = "none";
      });
    } else if (e.target.id === "div_modal_2") {
      BakcChange2.current.style.display = "flex";
      BakcChange2.current.addEventListener("mouseleave", () => {
        BakcChange2.current.style.display = "none";
      });
    } else if (e.target.id === "div_modal_3") {
      BakcChange3.current.style.display = "flex";
      BakcChange3.current.addEventListener("mouseleave", () => {
        BakcChange3.current.style.display = "none";
      });
    }
  };
  return (
    <div className={Style.div_DetlaisDes}>
      <div
        onMouseEnter={CheckIF}
        style={{
          backgroundImage: `url(${Image})`,
          backgroundSize: `${Image1Postion}`,
        }}
        className={Style.div_DetlaisDes1}
      >
        <div id={"div_modal"} className={Style.overlay}>
          <div ref={BakcChange} className={Style.div_modal_contact}>
            <h4>{Atraction}</h4>
            <p>{Content}...</p>
          </div>
        </div>
      </div>
      <div className={Style.div_DetlaisDe2}>
        <div
          onMouseEnter={CheckIF}
          style={{ backgroundImage: `url(${Image1})` }}
          className={Style.div_DetlaisDes21}
        >
          <div id={"div_modal_1"} className={Style.overlay}>
            <div ref={BakcChange1} className={Style.div_modal_contact}>
              <h4>{Atraction1}</h4>
              <p>{Content1}...</p>
            </div>
          </div>
        </div>
        <div className={Style.div_DetlaisDes22}>
          <div
            onMouseEnter={CheckIF}
            style={{ backgroundImage: `url(${Image2})` }}
            className={Style.div_DetlaisDes222}
          >
            <div id={"div_modal_2"} className={Style.overlay}>
              <div ref={BakcChange2} className={Style.div_modal_contact}>
                <h4>{Atraction2}</h4>
                <p>{Content2}...</p>
              </div>
            </div>
          </div>
          <div
            onMouseEnter={CheckIF}
            style={{ backgroundImage: `url(${Image3})` }}
            className={Style.div_DetlaisDes222}
          >
            <div id={"div_modal_3"} className={Style.overlay}>
              <div ref={BakcChange3} className={Style.div_modal_contact}>
                <h4>{Atraction3}</h4>
                <p>{Content3}...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetlaisDes;
