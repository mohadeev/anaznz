import React from "react";
import Style from "../../../styles/Modals/laoding/LoadlingComponents.module.css";

const LoadlingComponents = () => {
  return (
    <div>
      <div className={Style.container}>
        <div className={Style.div_links}>
          <div className={Style.user_image}></div>
          <span className={Style.details}></span>
        </div>
      </div>
      <div className={Style.container_divs}>
        {Array(6)
          .fill()
          .map((i , index ) => (
            <div key={index} className={Style.div_links_second}>
              <span className={Style.icon}></span>
              <span className={Style.details}></span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LoadlingComponents;
