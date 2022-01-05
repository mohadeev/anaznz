import React, { useState, useEffect } from "react";
import Link from "next/link";
import Style from "../../../styles/AbouComponent/Deslouyt.module.css";
import FirstPart from "../../../components/FirstPart/FirstPart";
import DetlaisDes from "../../../components/AbouComponent/DetlaisDes";
import { MarrakechData } from "../../../DaysData/MarrakechData";
import SomeText from "../../../components/AbouComponent/SomeText";

const Index = () => {
  const [PpularTours, setPpularTours] = useState([{ ID: "MARR" }]);
  return (
    <div className={Style.about_dest_container}>
      <FirstPart
        TourName={"Marrakech"}
        Category={"Morocco Tour in , From Marrakech "}
        Tour_imnage={"/../../../images/marrakech-images/marrakech-images-2.jpg"}
      />
      <DetlaisDes
        image1={"/../../../images/marrakech-images/marrakech-images-1.jpg"}
        image2={"/../../../images/marrakech-images/marrakech-images-5.jpg"}
        image3={"/../../../images/marrakech-images/marrakech-images-3.jpg"}
        image4={"/../../../images/marrakech-images/marrakech-images-4.jpg"}
      />
      <SomeText TitleConntet={""} Content={""} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          columnGap: "5%",
          margin: " ' 40PX",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {PpularTours.map(({ ID, flexBase }) => (
          <MarrakechData WhatId={ID} SeletElennt={true} FlexBase={flexBase} key={Math.random()} />
        ))}
      </div>
    </div>
  );
};

export default Index;
