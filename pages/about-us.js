import React from "react";
import DivRaf from "../components/AbouComponent/DivRaf";
import FirstPart from "../components/FirstPart/FirstPart";
import Style from "../styles/AbouComponent/aboutpage.module.css";
import { CardName } from "../components/home_components/HomeDestenatons";
import SomeText from "../components/AbouComponent/SomeText";
import { ReviewComponet } from "../components/Reviews/Review";
import WeAreUe from "../components/AbouComponent/WeAreUe.js";

const index = () => {
  const AboutGuids = [
    {
      image: "/../../../images/team/said.jpg",
      name: "Said",
      massion: "Founder / CEO , Service Coordinator",
      about: ``,
    },
    {
      image: "/../../../images/team/mohamed.jpg",
      name: "Mohamed",
      massion: "Software Engineer / Technical Manager",
      about: ``,
    },
    {
      image: "/../../../images/team/ibrahim.jpg",
      name: "Ibrahim",
      massion: "co-founder / Program Manager at UE",
      about: ``,
    },
    {
      image: "/../../../images/team/ali.jpg",
      name: "Ali",
      massion: "Tourism expert / Document Manager",
      about: ``,
    },
    {
      image: "/../../../images/team/mohamed-saadi.jpg",
      name: "Mohamed",
      massion: "Tourism expert / Financial Director",
      about: ``,
    },
    {
      image: "/../../../images/team/hami-saadi.jpg",
      name: "Hammi",
      massion: "Tourism expert /Profesional Guid / Diver at UE",
      about: ``,
    },
    {
      image: "/../../../images/team/mohamed-elbaz.jpg",
      name: "Mohamed",
      massion: "Tourism expert / Commercial / Marketing manager",
      about: ``,
    },
  ];
  const Team = (
    <p>
      We are a team of people who will do their best to carry out the tour of
      your dreams, so that you can choose what you want to visit and get to know
      about Morocco. This country is full of beautiful secrets that are hidden
      in the desert, behind the Gorges, of the original peoples of the place and
      of those who joined in legendary years. Therefore, from the Heart of
      Morocco you will live experiences that you will keep forever in your
      memory.
      <br /> Our slogan… <br />- Because the most important thing is that you
      enjoy your trip, the most important thing is you. … <br />- Because we
      listen to you and advise you to offer you the best option. … <br />-
      Because we take you wherever you want and make it a rewarding experience.
      … <br />- Because we organize everything from a weekend getaway to a
      complete trip.
    </p>
  );
  return (
    <div className={Style.index_container}>
      <div className={Style.div_firstpart}>
        <FirstPart
          BgPostion={"bottom"}
          TourName={"About Us"}
          Tour_imnage={
            "https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/71/28/39/marruecos-star-tour.jpg"
          }
        />
      </div>{" "}
      <WeAreUe />
      <DivRaf />
      <ReviewComponet />
      <div className={Style.div_some_text}>
        {" "}
        <SomeText TitleConntet={"Our Team"} Content={Team} />
      </div>
      <div className={Style.people_container}>
        {AboutGuids.map(({ image, name, about, massion }) => (
          <CardName
            key={Math.random()}
            DeImage={image}
            Name={name}
            Massion={massion}
            About={about}
          />
        ))}
      </div>
    </div>
  );
};

export default index;
