import React, { useState } from "react";
import Style from "../../styles/AbouComponent/WeAreUe.module.css";
import { RiBus2Line } from "@react-icons/all-files/ri/RiBus2Line";
import { RiMapPin5Line } from "@react-icons/all-files/ri/RiMapPin5Line";
import { RiHotelBedLine } from "@react-icons/all-files/ri/RiHotelBedLine";
import { RiTicket2Line } from "@react-icons/all-files/ri/RiTicket2Line";
import { RiContactsLine } from "@react-icons/all-files/ri/RiContactsLine";
import Link from "next/link";

const WeAreUe = () => {
  const [WreUeArray, setWreUeArray] = useState([
    {
      icon: <RiBus2Line />,
      name: "Private Transport / Shared",
      text: "Wre Always waititng to You AND Pick up you to your Accommodation....",
    },
    {
      icon: <RiMapPin5Line />,
      name: "Always There",
      text: "Wre Always waititng to You AND Pick up you to your Accommodation....",
    },
    {
      icon: <RiHotelBedLine />,
      name: "Always There",
      text: "Wre Always waititng to You AND Pick up you to your Accommodation....",
    },
    {
      icon: <RiTicket2Line />,
      name: "Always There",
      text: "Wre Always waititng to You AND Pick up you to your Accommodation....",
    },
    {
      icon: <RiContactsLine />,
      name: "Tell Us What We Forget Offer Your",
      text: "Wre Always waititng to You AND Pick up you to your Accommodation....",
      url: "/contact-us",
    },
  ]);
  return (
    <div className={Style.WeAreUe_container}>
      <div className={Style.to_docoraton}>
        <h4 className={Style.powered_our_team}>
          {" "}
          <span style={{ color: "#f3941e" }}>Wre Are Ur </span>Excursions
        </h4>
        <div className={Style.span_dicoration}></div>
      </div>
      <div className={Style.we_are_ue_container_icons}>
        {WreUeArray.map(({ icon, name, text, url }) => (
          <Link key={Math.random()} href={url ? url : "#"}>
            <div className={Style.item}>
              <span className={Style.icon}>{icon}</span>
              <span className={Style.name}>{name}</span>
              <p className={Style.text}>{text}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WeAreUe;
