import React, { useState, useRef } from "react";
import Style from "../../styles/NoteCss/NoteCss.module.css";
import { FiPlus } from "@react-icons/all-files/fi/FiPlus";
import { FiMinus } from "@react-icons/all-files/fi/FiMinus";
import { FaQuoteLeft } from "@react-icons/all-files/fa/FaQuoteLeft";

export const FaqTour = ({ Answer, FaqTour }) => {
  const hidElenet = useRef();
  const [HideElment, setHideElment] = useState(true);
  const HideElementFunc = () => {
    setHideElment(!HideElment);
  };
  return (
    <>
      <div className={Style.first_item}>
        <div className={Style.first_child_item}>
          <h3 onClick={HideElementFunc} className={Style.title_tour_title}>
            {FaqTour}
          </h3>
          <button onClick={HideElementFunc} className={Style.button_tour_show}>
            {HideElment ? <FiPlus /> : <FiMinus />}
          </button>
        </div>
        <div>
          <p
            className={Style.title_tour_content}
            ref={hidElenet}
            style={HideElment ? { display: "none" } : { display: "block" }}
          >
            {Answer}
          </p>
        </div>
      </div>
    </>
  );
};

export const Faq = () => {
  const [FaqTourArray, setFaqTour] = useState([
    {
      faqtour: "Do I need a sleeping bag for the overnight in the Desert?",
      answer:
        "No, you don’t need a sleeping bag, at our 3 days Marrakech to Fes desert tour, you will stay at an equipped desert camp with all amenities.",
    },
    {
      faqtour: "Do I need a sleeping bag for the overnight in the Desert?",
      answer:
        "No, you don’t need a sleeping bag, at our 3 days Marrakech to Fes desert tour, you will stay at an equipped desert camp with all amenities.",
    },
  ]);

  return (
    <>
      <div className={Style.NOTE}>
        <FaQuoteLeft /> <h5 className={Style.title_tour_bem}>FAQ</h5>
      </div>
      {FaqTourArray.map(({ faqtour, answer }) => (
        <FaqTour key={Math.random()} FaqTour={faqtour} Answer={answer} />
      ))}
    </>
  );
};
