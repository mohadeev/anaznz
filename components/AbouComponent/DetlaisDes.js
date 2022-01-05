import React from "react";
import Style from "../../styles/AbouComponent/DetlaisDes.module.css";

const DetlaisDes = ({ image1, image2, image3, image4 }) => {
  return (
    <div className={Style.div_DetlaisDes}>
      <div
        style={{ backgroundImage: `url(${image1})` }}
        className={Style.div_DetlaisDes1}
      >
        <div className={Style.overlay}></div>
      </div>
      <div className={Style.div_DetlaisDe2}>
        <div
          style={{ backgroundImage: `url(${image2})` }}
          className={Style.div_DetlaisDes21}
        >
          <div className={Style.overlay}></div>
        </div>
        <div className={Style.div_DetlaisDes22}>
          <div
            style={{ backgroundImage: `url(${image3})` }}
            className={Style.div_DetlaisDes222}
          >
            <div className={Style.overlay}></div>
          </div>
          <div
            style={{ backgroundImage: `url(${image4})` }}
            className={Style.div_DetlaisDes222}
          >
            <div className={Style.overlay}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetlaisDes;
