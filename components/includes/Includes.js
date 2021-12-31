import React, { useState } from "react";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { GiWaterBottle } from "@react-icons/all-files/gi/GiWaterBottle";
import { BiSupport } from "@react-icons/all-files/bi/BiSupport";
import { MdHotel } from "@react-icons/all-files/md/MdHotel";
import { BiRestaurant } from "@react-icons/all-files/bi/BiRestaurant";
import { FaSnowboarding } from "@react-icons/all-files/fa/FaSnowboarding";
import { RiBus2Line } from "@react-icons/all-files/ri/RiBus2Line";
import { FaGasPump } from "@react-icons/all-files/fa/FaGasPump";
import { FaCampground } from "@react-icons/all-files/fa/FaCampground";
import { GiCamel } from "@react-icons/all-files/gi/GiCamel";
import { TiGroup } from "@react-icons/all-files/ti/TiGroup";
import { GrAttraction } from "@react-icons/all-files/gr/GrAttraction";

export const Included = ({ Icon, Whatinclude }) => {
  return (
    <>
      <p>
        {Icon} {Whatinclude}
      </p>
    </>
  );
};

const Sttl = {
  color: "#071c55",
  fontSize: "16px",
  position: "relative",
  top: "0PX",
};
const St_div ={
  position : "relative", 
}
export const IncludesConatainer = ({ children }) => {
  return (
    <div style={St_div}>
      <h6 style={Sttl}>Includes : </h6>

      <Included Icon={<RiBus2Line />} Whatinclude="Transport." />
      <Included Icon={<MdHotel />} Whatinclude="Accommodation (Half board)." />
      <Included Icon={<BiRestaurant />} Whatinclude="Dinners." />
      <Included Icon={<BiRestaurant />} Whatinclude="Breakfasts." />
      <Included
        Icon={<FaSnowboarding />}
        Whatinclude="Sandbording (Optional)."
      />
      <Included Icon={<FaGasPump />} Whatinclude="fuel." />
      <Included Icon={<FaCampground />} Whatinclude="Nightin Desert Camp." />
      <Included Icon={<GiCamel />} Whatinclude="Transport." />
      <Included Icon={<BiSupport />} Whatinclude="Support Team 24/h." />
      <Included Icon={<TiGroup />} Whatinclude="Guid." />
      <Included Icon={<GrAttraction />} Whatinclude="Attraction." />

      <Included
        Icon={<GiWaterBottle />}
        Whatinclude="Bottel of Water Per PX each Day."
      />
      {children}
    </div>
  );
};
export const NoIncluded = ({ Icon, WhatNotinclude }) => {
  const persons = [
    "Drinks.",
    "Lunches.",
    "Entrance to monuments (Optional).",
    "Tipping(Optional).",
    "Flights.",
    "Any Privat Expenses.",
  ];
  return (
    <>
      <>
        {WhatNotinclude}
        {persons.map((NotIncludes) => (
          <p key={Math.random()}>
            <AiOutlineClose /> {NotIncludes}
          </p>
        ))}
      </>
    </>
  );
};

export const NotIncludesConatainer = () => {
  return (
    <div>
      <h6 style={Sttl}>not Includes : </h6>
      <NoIncluded />
    </div>
  );
};
