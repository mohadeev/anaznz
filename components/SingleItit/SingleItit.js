import React, { useState, useEffect, useRef } from "react";
import { FaMapSigns } from "@react-icons/all-files/fa/FaMapSigns";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";
import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp";
import Style from "../../styles/toursModal/Tour-ItitniretyItems.module.css";

//666;
const SingleItit = ({ Overview  }) => {
  return (
    <div>
      <h5 className={Style.title_tour_bem}>Overview</h5>
      <p id={Style.overview} className={Style.title_tour_content}>
        {Overview}
      </p>
      <h5 className={Style.title_tour_bem}>
        {" "}
        <FaMapSigns /> Itinirery{" "}
      </h5>
    </div>
  );
};

export default SingleItit;

export const NoralDay = ({ Day, DayNumer, TourDay }) => {
  return (
    <div className={Style.first_item}>
      <div className={Style.first_child_item}>
        <span className={Style.day_tour_name_item}>{DayNumer}</span>
        <h3 className={Style.title_tour_title}>{Day}</h3>
      </div>
      <div>
        <p className={Style.title_tour_content}>{TourDay}</p>
      </div>
    </div>
  );
};

export const StyledalDay = ({ sDay, sDayNumer, sTourDay }) => {
  const hidElenet = useRef();

  const [HideElment, setHideElment] = useState(true);
  useEffect(() => {}, []);

  const HideElement = () => {
    setHideElment(!HideElment);
  };

  return (
    <div className={Style.first_item}>
      <div className={Style.first_child_item}>
        <span className={Style.day_tour_name_item}>{sDayNumer}</span>
        <h3 onClick={HideElement} className={Style.title_tour_title}>
          {sDay}
        </h3>
        <button onClick={HideElement} className={Style.button_tour_show}>
          {HideElment ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </button>
      </div>
      <div>
        {HideElment ? (
          <p className={Style.title_tour_content}>...Read More</p>
        ) : null}
        <p
          className={Style.title_tour_content}
          ref={hidElenet}
          style={HideElment ? { display: "none" } : { display: "block" }}
        >
          {sTourDay}
        </p>
      </div>
    </div>
  );
};
