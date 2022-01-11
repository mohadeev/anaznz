import React, { useState, useEffect } from "react";
import Link from "next/link";
import Style from "../../../styles/AbouComponent/Deslouyt.module.css";
import FirstPart from "../../../components/FirstPart/FirstPart";
import DetlaisDes from "../../../components/AbouComponent/DetlaisDes";
import { MarrakechData } from "../../../DaysData/MarrakechData";
import SomeText from "../../../components/AbouComponent/SomeText";

const Index = () => {
  const [DestantonArry, setDestantonArry] = useState([
    {
      image: "/../../../images/marrakech-images/marrakech-images-1.jpg",
      image1: "/../../../images/marrakech-images/marrakech-images-5.jpg",
      image2: "/../../../images/marrakech-images/marrakech-images-3.jpg",
      image3: "/../../../images/marrakech-images/marrakech-images-4.jpg",
      atraction: `Kutubiyya Mosque`,
      content: `The mosque was founded in 1147 by the Almohad caliph Abd
              al-Mu'min right after he conquered Marrakesh from the Almoravids.
              A second version of the mosque was entirely rebuilt by Abd
              al-Mu'min around 1158, with Ya'qub al-Mansur possibly finalizing
              construction of the minaret around 1195.[3] This second mosque is
              the structure that stands today. It is considered a classic and
              important example of Almohad architecture and of Moroccan mosque
              architecture generally`,
      atraction1: `Menara gardens`,
      content1: `The origin of the name Menara for the gardens is not firmly established. The name's first appearance (as Sahrij al-Manāra) in historical sources is in 1579, during the Saadian period.[3]: 196 [4] The Arabic word menara (منارَة) variously means "minaret", "lighthouse", "lantern/beacon" or other elevated structures of the kind. It is often suggested that this refers to the two-story pavilion standing on the edge of the main reservoir.`,
      atraction2: `Majorelle Garden`,
      content2: `The Majorelle Garden was designed by the French artist, Jacques Majorelle (1886-1962), son of the Art Nouveau ébéniste (cabinet-maker) of Nancy, Louis Majorelle. As a young aspiring painter,`,
      atraction3: `The Mellah, Jewish Quarter`,
      content3: `This neighborhood was created in 1559 and until 1936, it was the most important Jewish quarter in Morocco, having a population of 16,000 inhabitants. Since 1956 it is essentially Muslims who live there today. Currently it is said that there are just over 300 Jews living in the city and they do so mainly in Guéliz. Mellah, is the name by which the Jewish neighborhoods of Morocco are known,`,
    },
  ]);
  const [PpularTours, setPpularTours] = useState([{ ID: "MARR" }]);

  return (
    <div className={Style.about_dest_container}>
      <FirstPart
        TourName={"Marrakech"}
        Category={"Morocco Tour in , From Marrakech "}
        Tour_imnage={"/../../../images/marrakech-images/marrakech-images-2.jpg"}
      />
      {DestantonArry.map(
        ({
          image,
          image1,
          image2,
          image3,
          atraction,
          content,
          atraction1,
          content1,
          atraction2,
          content2,
          atraction3,
          content3,
        }) => (
          <DetlaisDes
            key={Math.random()}
            Atraction={atraction}
            Content={content}
            Atraction1={atraction1}
            Content1={content1}
            Atraction2={atraction2}
            Content2={content2}
            Atraction3={atraction3}
            Content3={content3}
            Image={image}
            Image1={image1}
            Image2={image2}
            Image3={image3}
          />
        )
      )}

      <SomeText TitleConntet={""} Content={""} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          columnGap: "5%",
          rowGap: "50px",
          width: "90%",
          margin: "auto",
          marginTop: "0",
          justifyContent: "center",
        }}
      >
        {PpularTours.map(({ ID, flexBase }) => (
          <MarrakechData
            WhatId={ID}
            SeletElennt={true}
            FlexBase={flexBase}
            key={Math.random()}
          />
        ))}        
      </div>
    </div>
  );
};

export default Index;
