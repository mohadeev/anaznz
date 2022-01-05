import React, { useState, useEffect } from "react";
import Style from "../../styles/home_components/Chooseus.module.css";
import { FaMedal } from "@react-icons/all-files/fa/FaMedal";
import { FaTrophy } from "@react-icons/all-files/fa/FaTrophy";
import { FaThumbsUp } from "@react-icons/all-files/fa/FaThumbsUp";
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";

const Chooseus = () => {
  const [WhyUsItems, setWhyUsItems] = useState([
    {
      name: "Licensed tour operator",
      image: <FaMedal />,
      text: "We are a fully licensed and registered Moroccan tour company.",
    },
    {
      name: "Satisfaction guaranteed",
      image: <FaTrophy />,
      text: "We follow the strict guide lines set by our mother company: EXTRA MILE.",
    },
    {
      name: "Best price guaranteed",
      image: <FaThumbsUp />,
      text: "Take advantage of our buying power and benefit from the best rates.",
    },
    {
      name: "Instant confirmation",
      image: <FaCheck />,
      text: "Check availability, book your tour and receive an instant confirmation.",
    },
  ]);
  // useEffect(() => {
  //   if (WhyUsItems.length === 5) {
  //     setArrylengh("Four");
  //   } else {
  //     setArrylengh(WhyUsItems.length);
  //   }
  // }, []);

  var Value = WhyUsItems.length;

  return (
    <div className={Style.div_Cooseus_container}>
      <h5 className={Style.what_to_know_about_tit}>
        <span>Four Reason </span> Why Choose Us
      </h5>
      <div className={Style.why_us_items_container}>
        {WhyUsItems.map(({ name, image, text }) => (
          <div key={Math.random()} className={Style.item_conainer}>
            <div className={Style.item_container_image}>
              {" "}
              <span className={Style.icoooonn}>{image}</span>
            </div>
            <span className={Style.itme_name}>{name}</span>
            <p className={Style.item_desc}>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chooseus;
