import React, { useState, useEffect } from "react";
import Link from "next/link";
import Style from "../../../styles/AbouComponent/Deslouyt.module.css";
import FirstPart from "../../../components/FirstPart/FirstPart";
import DetlaisDes from "../../../components/AbouComponent/DetlaisDes";
// import { MarrakechData } from "../../../DaysData/MarrakechData";
import SomeText, { Button } from "../../../components/AbouComponent/SomeText";
import { Fliter } from "../../../DaysData/Fliter/Fliter";

const Index = () => {
  const [DestantonArry, setDestantonArry] = useState([
    {
      image: "/../../../images/fes-images/fes-images5.jpg",
      image1: "/../../../images/fes-images/bluegatepanoramic.jpg",
      image2: "/../../../images/fes-images/fes-images6.jpg",
      image3: "/../../../images/fes-images/fes-images8.jpg",
      atraction: `Jnan Sbil Gardens`,
      content: `According to scholars, the gardens were created in the 19th century by Sultan Moulay Hassan I (ruled 1873-1894), who was responsible for building the walls which connected Fes el-Jdid with Fes el-Bali for the first time.: 296 : 100  (Though regional tourism authorities claim the gardens date to the earlier reign of Moulay Abdallah in the 18th century.) The gardens were placed inside the corridor between these walls, where the sultan also erected new summer palaces, such as the nearby Dar al-Beida ("White Palace" or "White House").`,
      atraction1: `Bab Bou Jeloud (Blue Gate)`,
      content1: `The name Bou Jeloud dates from well before the existence of the current gate. By one account, the name is a vernacular corruption of the expression Abu al-Junud ("Father of the troops"), referring to a parade ground or military square, in this case, the large square known as Place Bou Jeloud (now also called Place el-Baghdadi) just west of the gate. It is also located near the site of what used to be one of the main citadels of Fes el-Bali, the Kasbah Bou Jeloud, as well as near the Kasbah en-Nouar`,
      atraction2: `University of al-Qarawiyyin`,
      content2: `The University of al-Qarawiyyin is a university located in Fez, Morocco. It was founded as a mosque by Fatima al-Fihri in 857–859 and subsequently became one of the leading spiritual and educational centers of the historic Muslim world. It was incorporated into Morocco's modern state university system in 1963 and was officially renamed "University of Al Quaraouiyine" two years later.`,
      atraction3: `The Mellah, Jewish Quarter`,
      content3: `The Mellah (Jewish Quarter): the first official mellah was established in the city of Fez in 1438. On that date, the Jews were transferred from the old part of Fes to Hims, which had been built in a place known as al-Mallah , 'El salinar'. Over time, the term was used to designate the Jewish neighborhoods of other cities in Morocco.`,
    },
  ]);
  const [PpularTours, setPpularTours] = useState([{ ID: "FES" }]);

  return (
    <div className={Style.about_dest_container}>
      <FirstPart
        TourName={"Fes"}
        Category={"Morocco Tour  : From Fes & in Fes"}
        Tour_imnage={"/../../../images/fes-images/fes-images.jpg"}
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

      <Button
        UlrButton={"/coming-soon"}
        Width={"250px"}
        className={Style.style_explore_button}
        TextButton="Exmpore More About Fes"
      />

      <div className={Style.div_tours}>
        {/* {PpularTours.map(({ ID, flexBase }) => (
          <MarrakechData
            WhatId={ID}
            SeletElennt={true}
            FlexBase={flexBase}
            key={Math.random()}
          />
        ))} */}
        <Fliter FromWhere={1} />
      </div>
    </div>
  );
};

export default Index;
