import React from "react";
import Style from "../../styles/toursModal/FirstPart.module.css";

const FirstPart = ({ Tour_imnage, TourName, Category, Desc, BgPostion }) => {
  return (
    <div>
      <div className={Style.tourpaertone_container1}>
        <div
          style={{
            backgroundImage: `url(${Tour_imnage})`,
            backgroundPosition: `${BgPostion}`,
          }}
          className={Style.div_image_banner}
        >
          <div className={Style.div_overley_tour}>
            <div>
              <h1 className={Style.tour_title}>{TourName}</h1>
              <h2 className={Style.tour_category}>{Category}</h2>
              {Desc ? <p className={Style.text_contnet}>{Desc}</p> : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPart;
