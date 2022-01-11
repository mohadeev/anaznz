import React, { useState } from "react";
import Link from "next/link";
import FirstPart from "../../components/FirstPart/FirstPart";
import HomeDestenatons from "../../components/home_components/HomeDestenatons";
import SomeText from "../../components/AbouComponent/SomeText";
import Style from '../../styles/Tours/ToursandCuits.module.css'
const Index = () => {
  const [WhatAboutSercuits, setWhatAboutSercuits] = useState([
    {
      name: "Trips to Morocco organized to measure and in private",
      contnet:
        "At Ur Excursions  we offer you the best offer of organized trips to Morocco. Packages and circuits in Morocco that will take you to know the essence of this African country, totally tailored for you, offering you the highest quality and safety so that you only have to worry about feeling and enjoying the experience to the fullest.",
    },
    {
      name: "",
      contnet: (
        <p>
          Traveling is one of the most rewarding experiences we can experience
          in life and we are also aware that few things can be compared to
          traveling the world accompanied by your loved ones. We know that
          finding packages that suit your tastes and budget is difficult.
          <br />
          Luckily, we offer you totally private and tailor-made tours to Morocco
          at the best price, designed to please the most demanding travelers and
          designed to satisfy your thirst for adventure. We also offer you
          routes, all-inclusive trips to Morocco and thematic circuits, such as
          yoga trips, photographic circuits, luxury trips or honeymoon.
        </p>
      ),
    },
    {
      name: "Why Trust Us For Your Circuit In Morocco",
      contnet:
        "At Ur Excursions we take care of all the details: planning and elaboration of the itinerary, management of vehicles and transport, drivers and tourist guides, accommodation in hotels, riad and tents in the desert ... We will advise and advise you on all the possibilities of your trip and we will be in contact, before during and after your tour so that you only have to worry about traveling to Morocco and enjoying all the attractions it offers, its imperial cities, towns and natural environments.",
    },
  ]);
  const WhyTrustUs =
    "We are a wholesale / retail receptive travel agency specialized in private and tailor-made routes and circuits throughout Morocco, and what we offer you is to discover Morocco in the best possible way: advised, guided and attended by authentic experts in a single destination so that you feel safe and in good hands.";
  return (
    <div className={Style.div_constainer_tours}
      style={{
        maxWidth: "1400px",
        margin: "auto",
        width: "100% ",
        overflow: "hidden",
      }}
    >
      <FirstPart
        TourName={"Discover The Morocco Tours and Circuits"}
        Tour_imnage={
          "https://www.moroccobytours.com/wp-content/uploads/2019/10/chegaga-desert-zagora-slide-copie.jpg"
        }
      />
      {WhatAboutSercuits.slice(0, 1).map(({ name, contnet }) => (
        <SomeText TitleConntet={name} Content={contnet} key={Math.random()} />
      ))}
      <HomeDestenatons LayoutName={"Customized Morocco Tours"} />
      {WhatAboutSercuits.slice(1, 3).map(({ name, contnet }) => (
        <SomeText TitleConntet={name} Content={contnet} key={Math.random()} />
      ))}
      <FirstPart
        Waves={true}
        MarginBottom={"100px"}
        BgPostion={"Top"}
        Tour_imnage={"/../../../images/ibrahim/ibrahim.jpg"}
        Desc={WhyTrustUs}
      />
    </div>
  );
};

export default Index;
