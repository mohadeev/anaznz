import React from "react";
import Style from "../../styles/toursModal/FirstPart.module.css";
import { FaLocationArrow } from "@react-icons/all-files/fa/FaLocationArrow";

const FirstPart = ({
  Tour_imnage,
  TourName,
  Category,
  Desc,
  BgPostion,
  Waves,
  MarginBottom,
}) => {
  return (
    <div
      style={{ marginBottom: `${MarginBottom}` }}
      className={Style.tourpaertone_container1}
      id="imaga_1"
    >
      <div
        id="imaga_1"
        style={{
          backgroundImage: `url(${Tour_imnage})`,
          backgroundPosition: `${BgPostion}`,
        }}
        className={Style.div_image_banner}
      >
        <div className={Style.div_overley_tour} id="imaga_1">
          <div className={Style.div_dicoration}>
            <h3 className={Style.tour_title}>{TourName}</h3>{" "}
            <div className={Style.dicoration_heart}></div>
          </div>
          <h2 className={Style.tour_category}>
            {Category ? <FaLocationArrow /> : ""} {Category}
          </h2>
          {Desc ? <p className={Style.text_contnet}>{Desc}</p> : ""}{" "}
          {Waves ? (
            ""
          ) : (
            <div className={Style.div_buttom}>
              <div className={Style.to_border}></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FirstPart;
