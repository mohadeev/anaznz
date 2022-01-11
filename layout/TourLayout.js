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
  BgPostion,
  Image1Postion,
  Image2Postion,
  Image3Postion,
  Image4Postion,
  Image5Postion,
  Image6Postion,
  TourName,
  Category,
  Days,
  Nights,
  Price,
  Discount,
  tag2,
  Tag1,
  Tag2,
  Tag3,
  Tag4,
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
        BgPostion={BgPostion}
        Image1Postion={Image1Postion}
        Image2Postion={Image2Postion}
        Image3Postion={Image3Postion}
        Image4Postion={Image4Postion}
        Image5Postion={Image5Postion}
        Image6Postion={Image6Postion}
        TourName={TourName}
        Category={Category}
        Days={Days}
        Nights={Nights}
        Price={Price}
        Discount={Discount}
        Tag1={Tag1}
        Tag2={Tag2}
        Tag3={Tag3}
        Tag4={Tag4}
      />
      <div className={Style.second_child}>
        <MainTour> {children}</MainTour>
        <SideBar />
        {/*this is was 4:55*/}
      </div>
    </div>
  );
};

export default TourLayout;
