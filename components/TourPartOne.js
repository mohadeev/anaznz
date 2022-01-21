import React, { useState, useRef, useEffect, useCallback } from "react";

import Style from "../styles/TourPartOne/TourPartOne.module.css";
import { IoIosArrowBack } from "@react-icons/all-files/io/IoIosArrowBack";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import FirstPart from "./FirstPart/FirstPart";
import SecondInfo from "./SecondInfo";

const TourPartOne = ({
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
  Tag1,
  Tag2,
  Tag3,
  Tag4,
  TourNameDis,
  ImageTour,
  PriceTour,
}) => {
  const [ArrayImages, setArrayImages] = useState([
    Tour_imnage,
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
  ]);

  const DivSlider = useRef();
  const [i, seti] = useState(0);
  const [SlideImage, setSlideImage] = useState(ArrayImages[0]);

  const ojb = useRef();

  const SlideimageHide = () => {
    DivSlider.current.style.visibility = "hidden";
    seti(0);
  };
  const [SlideBackP, setSlideBackP] = useState("");

  const SlideimagesHow = (e) => {
    DivSlider.current.style.visibility = "visible";
    if (e.target.id === "imaga_1") {
      seti(0);
      setSlideImage(ArrayImages[0]);
    } else if (e.target.id === "imaga_2") {
      seti(i + 1);
      setSlideImage(ArrayImages[1]);
      ojb.current.style.backgroundSize = "cover";
      setSlideBackP(Image1Postion);
    } else if (e.target.id === "imaga_3") {
      seti(i + 2);
      setSlideImage(ArrayImages[2]);
      ojb.current.style.backgroundSize = "contain";

      setSlideBackP(Image2Postion);
    } else if (e.target.id === "imaga_4") {
      seti(i + 3);
      setSlideImage(ArrayImages[3]);
      ojb.current.style.backgroundSize = "cover";
      setSlideBackP(Image3Postion);
    } else if (e.target.id === "imaga_5") {
      seti(i + 4);
      setSlideImage(ArrayImages[4]);
      setSlideBackP(Image4Postion);
    } else if (e.target.id === "imaga_6") {
      seti(i + 5);
      setSlideImage(ArrayImages[5]);
      setSlideBackP(Image5Postion);
    } else if (e.target.id === "imaga_7") {
      seti(i + 6);
      setSlideImage(ArrayImages[6]);
      setSlideBackP(Image6Postion);
    }
    ojb.current.style.right = "100px";
  };
  // useEffect(() => {
  //   document.addEventListener("scroll", SlideimageHide);
  // });
  const SlideRight = () => {
    if (i === ArrayImages.length - 1) {
      seti(0);
      setSlideImage(ArrayImages[0]);
    } else if (i === 0) {
      setSlideImage(ArrayImages[1]);
      seti(i + 1);
      setSlideBackP(Image1Postion);
      ojb.current.style.backgroundSize = "cover";
    } else if (i === 1) {
      setSlideImage(ArrayImages[2]);
      seti(i + 1);
      setSlideBackP(Image2Postion);
      ojb.current.style.backgroundSize = "contain";
    } else if (i === 2) {
      setSlideImage(ArrayImages[3]);
      ojb.current.style.backgroundSize = "cover";
      setSlideBackP(Image3Postion);
      seti(i + 1);
    } else if (i === 3) {
      setSlideImage(ArrayImages[4]);
      setSlideBackP(Image4Postion);

      seti(i + 1);
    } else if (i === 4) {
      setSlideImage(ArrayImages[5]);
      setSlideBackP(Image5Postion);
      seti(i + 1);
    } else if (i === 5) {
      setSlideImage(ArrayImages[6]);
      seti(i + 1);
      setSlideBackP(Image6Postion);
    }
  };

  const SlideLeft = () => {
    if (i === 0) {
      setSlideImage(ArrayImages[6]);
      seti(6);
    } else if (i === 6) {
      seti(i - 1);
      setSlideImage(ArrayImages[5]);
    } else if (i === 5) {
      seti(i - 1);
      setSlideImage(ArrayImages[4]);
    } else if (i === 4) {
      seti(i - 1);
      ojb.current.style.backgroundSize = "cover";
      setSlideImage(ArrayImages[3]);
    } else if (i === 3) {
      seti(i - 1);
      ojb.current.style.backgroundSize = "contain";
      setSlideImage(ArrayImages[2]);
    } else if (i === 2) {
      seti(i - 1);
      setSlideImage(ArrayImages[1]);
      ojb.current.style.backgroundSize = "cover";

      setSlideBackP(Image1Postion);
    } else if (i === 1) {
      seti(i - 1);
      setSlideImage(ArrayImages[0]);
    }
  };
  const Tag = (tags) => {
    return (
      <div className={Style.each_tage_item}>
        <p className={Style.iteeems_tags}>
          <span>#</span>
          {tags}
        </p>
      </div>
    );
  };
  return (
    <div className={Style.tourpaertone_container}>
      <div ref={DivSlider} className={Style.div_slide_images_container}>
        {" "}
        <button onMouseDown={SlideLeft} className={Style.slide_row}>
          {" "}
          <IoIosArrowBack />{" "}
        </button>
        <div
          ref={ojb}
          style={{
            backgroundImage: `url(${SlideImage})`,
            backgroundPosition: `${SlideBackP}`,
          }}
          className={Style.div_slide_images}
        >
          <div className={Style.div_overley_tour_slider}>
            <AiOutlineClose className={Style.close} onClick={SlideimageHide} />
          </div>
        </div>{" "}
        <button className={Style.slide_row} onMouseDown={SlideRight}>
          {" "}
          <IoIosArrowForward />{" "}
        </button>
      </div>

      <FirstPart
        TourName={TourName}
        BgPostion={BgPostion}
        Category={Category}
        Tour_imnage={Tour_imnage}
        Tour={true}
      />

      <div className={Style.div_second_father}>
        <div className={Style.div_info_tour}>
          {/* //start of the div  */}
          <div
            onClick={SlideimagesHow}
            id="imaga_2"
            className={Style.div_info_1}
            style={{
              backgroundImage: `url(${Image1})`,
              backgroundPosition: `${Image1Postion ? Image1Postion : "center"}`,
            }}
          ></div>
          <div
            onClick={SlideimagesHow}
            id="imaga_3"
            className={Style.div_info_2}
            style={{
              backgroundImage: `url(${Image2})`,
              backgroundPosition: `${Image2Postion ? Image2Postion : "center"}`,
            }}
          ></div>
          <div className={Style.div_info_3}>
            <div
              onClick={SlideimagesHow}
              id="imaga_4"
              style={{
                backgroundImage: `url(${Image3})`,
                backgroundPosition: `${
                  Image3Postion ? Image3Postion : "center"
                }`,
              }}
              className={Style.div_info_3_1}
            ></div>
            <div
              onClick={SlideimagesHow}
              id="imaga_5"
              style={{
                backgroundImage: `url(${Image4})`,
                backgroundPosition: `${
                  Image4Postion ? Image4Postion : "center"
                }`,
              }}
              className={Style.div_info_3_1}
            ></div>

            <div
              onClick={SlideimagesHow}
              id="imaga_6"
              style={{
                backgroundImage: `url(${Image5})`,
                backgroundPosition: `${
                  Image5Postion ? Image5Postion : "center"
                }`,
              }}
              className={Style.div_info_3_1}
            ></div>
            <div
              onClick={SlideimagesHow}
              id="imaga_7"
              style={{
                backgroundImage: `url(${Image6})`,
                backgroundPosition: `${
                  Image6Postion ? Image6Postion : "center"
                }`,
              }}
              className={Style.div_info_3_1}
            ></div>
          </div>
          {/* //end of the div  */}
        </div>
        <SecondInfo
          TourNameDis={TourName}
          PriceTour={Price}
          ImageTour={Tour_imnage}
          Discount={Discount}
          TourName={TourName}
          Days={Days}
          Nights={Nights}
          Price={Price}
          Tag1={Tag1}
          Tag2={Tag2}
          Tag3={Tag3}
          Tag4={Tag4}
        />{" "}
      </div>
    </div>
  );
};

export default TourPartOne;
