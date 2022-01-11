import React, { useState, useEffect } from "react";
import Link from "next/link";
import Style from "../../../styles/AbouComponent/Deslouyt.module.css";
import FirstPart from "../../../components/FirstPart/FirstPart";
import DetlaisDes from "../../../components/AbouComponent/DetlaisDes";
import { MarrakechData } from "../../../DaysData/MarrakechData";
import SomeText, { Button } from "../../../components/AbouComponent/SomeText";


const Index = () => {
  const [DestantonArry, setDestantonArry] = useState([
    {
      image:
        "/../../../images/merzouga-images/desert-images/desert-images20.jpg",
      image1:
        "/../../../images/merzouga-images/desert-images/desert-images16.jpg",
      Image1Postion: "",
      image2:
        "/../../../images/merzouga-images/desert-images/merzouga-oises.webp",
      image3:
        "/../../../images/merzouga-images/desert-images/desert-images17.jpg",
      atraction: `Nomads Area (Deep Morocco)`,
      content: `nomadic peoples found in the vastness of the Merzouga desert.  they live in the middle of the desert with nothing but their livestock and in small houses made of adobe and wood`,
      atraction1: `Erg Chaabi (Merzouga Dunes)`,
      content1: `Erg Chebbi is one of Morocco's several ergs – large seas of dunes formed by wind-blown sand. There are several other ergs such as Erg Chigaga near M'hamid. Technically all these ergs are within an area of semi-arid Pre-Saharan Steppes and not part of the Sahara desert which lies some distance to the south.`,
      atraction2: `Merzouga Oasis`,
      content2: `Merzouga Oasis, it's a tiny piece of green land located between the village and dunes, where there's water, comes from into Desert, to past from between those larges palmers trees.`,
      atraction3: `Khamlia (African Village)`,
      content3: `Between Merzouga and Taouz we find Khamlia or the so-called 'black town', located in the shadow of the dunes of Erg Chebbi. It is a town of just over 300 inhabitants, of people with a much darker complexion due to the mixture of Berbers, Arabs and different tribes of sub-Saharan`,
    },
  ]);
  const [PpularTours, setPpularTours] = useState([{ ID: "MER" }]);

  return (
    <div className={Style.about_dest_container}>
      <FirstPart
        TourName={"Marrakech"}
        Category={"Morocco Tour in , From Marrakech "}
        Tour_imnage={
          "/../../../images/merzouga-images/camels-images/desert-camels-merzouga-10.jpg"
        }
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
          Image1Postion,
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
            Image1Postion={Image1Postion}
          />
        )
      )}

      <Button
        UlrButton={"/coming-soon"}
        Width={"300px"}
        className={Style.style_explore_button}
        TextButton="Exmpore More About Merzouga"
      />
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
