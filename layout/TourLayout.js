import React from "react";
import MainTour from "../components/MainTour";
import SideBar from "../components/SideBar";
import TourPartOne from "../components/TourPartOne";
import Style from "../styles/Layout-css/TourLayout.module.css";

const TourLayout = ({
  children,
  Tour_imnage,
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  TourName,
  Category,
  Days,
  Nights,
  Price,
  Discount,
}) => {
  return (
    <div className={Style.div_layout_div_css}>
      <TourPartOne
        Tour_imnage={Tour_imnage}
        Image1={Image1}
        Image2={Image2}
        Image3={Image3}
        Image4={Image4}
        Image5={Image5}
        Image6={Image6}
        TourName={TourName}
        Category={Category}
        Days={Days}
        Nights={Nights}
        Price={Price}
        Discount={Discount}
      />
      <div className={Style.second_child}>
        <MainTour> {children}</MainTour>
        <SideBar />
      </div>
    </div>
  );
};

export default TourLayout;
