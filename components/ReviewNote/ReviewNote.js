import React from "react";
import Style from "../../styles/ReviewCss/Review.module.css";
import { IoMdInformationCircle } from "@react-icons/all-files/io/IoMdInformationCircle";

const ReviewNote = () => {
  return (
    <div className={Style.div_ReviewNote}>
      <p>
        <IoMdInformationCircle /> Please note that all reviews were writen by
        our clinets in many websites and we gather them here so you will not be
        able to leave this site
      </p>
      <button className={Style.contact_us_btn} type="submit">
        Write Your Review
      </button>
    </div>
  );
};

export default ReviewNote;
export const ReviewAlays = () => {
  return (
    <div className={Style.div_ReviewAlays}>
      <div className={Style.div_exllent}>
        <p className={Style.paragraf_div_exllent}>
          <span className={Style.big_span}>5</span>/5
        </p>
        <span className={Style.excllent}>Excellent</span>
        <p>Based on 5 reviews</p>
      </div>
      <div className={Style.vr_lin_div}></div>
      <div className={Style.div_nonStars}>
        <div className={Style.five_stars}></div>
        {Array(4)
          .fill()
          .map(() => (
            <div key={Math.random()} className={Style.nostarts}></div>
          ))}
      </div>
    </div>
  );
};
