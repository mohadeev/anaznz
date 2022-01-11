import React, { useState, useEffect } from "react";
import Style from "../../styles/home_components/Chooseus.module.css";
import { FaMedal } from "@react-icons/all-files/fa/FaMedal";
import { FaTrophy } from "@react-icons/all-files/fa/FaTrophy";
import { FaThumbsUp } from "@react-icons/all-files/fa/FaThumbsUp";
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";
import { GiTeamIdea } from "@react-icons/all-files/gi/GiTeamIdea";
import { FaComments } from "@react-icons/all-files/fa/FaComments";
import { RiTeamFill } from "@react-icons/all-files/ri/RiTeamFill";
import { FaMapSigns } from "@react-icons/all-files/fa/FaMapSigns";





const Chooseus = () => {
  const [WhyUsItems, setWhyUsItems] = useState([
    {
      name: "Licensed tour operator.",
      image: <FaMedal />,
      text: "We are a fully licensed and registered Moroccan tour company.",
    },
    {
      name: "Expert Local Berber Team.",
      image: <GiTeamIdea />,
      text: "Our expert team will assist you 24/7 to answer your questions quickly, clearly and help you to book your suitable Tour.",
    },
    {
      name: "Excellent Customer Reviews.",
      image: <FaComments />,
      text: "We are recommended by our happy clients on Tripadvisor, Travel blogs, Guidebooks and many other worldwide websites...",
    },
    {
      name: "Friendly & Knowledgeable Guides.",
      image: <RiTeamFill />,
      text: "Our local Guides will ensure your safety & comfort while you are enjoying your Morocco desert trips visiting the most spectacular sights around the country.",
    },
    {
      name: "Years of Experciance.",
      image: <FaTrophy />,
      text: " we have more than 12 years of experience in the Tourism center fields and the necessary know-how to offer the best Travel company.",
    },
    {
      name: "Best price guaranteed.",
      image: <FaThumbsUp />,
      text: "Take advantage of our buying power and benefit from the best rates.",
    },
    {
      name: "Instant confirmation.",
      image: <FaCheck />,
      text: "Check availability, book your tour and receive an instant confirmation.",
    },
    {
      name: <p> Best Accommodation  <br /> & Custom Tours.</p> ,
      image: <FaMapSigns />,
      text: "We offer the best Tours & Accommodation that suit your needs and requirements.",
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
        <span>Eight Reason </span> Why Choose Us
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
