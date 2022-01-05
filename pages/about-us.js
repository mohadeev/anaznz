import React from "react";
import DivRaf from "../components/AbouComponent/DivRaf";
import FirstPart from "../components/FirstPart/FirstPart";
import Style from "../styles/AbouComponent/aboutpage.module.css";
import { CardName } from "../components/home_components/HomeDestenatons";
import SomeText from "../components/AbouComponent/SomeText";

const Index = () => {
  const AboutGuids = [
    {
      image: "/../../../images/team/ibrahim.jpg",
      name: "Ibrahim",
      massion: "CEO and Pro Guid of UE",
      about: `Ibrahim CEO and Founder of Ur Excursion Company, he at age of 28 years old.  born and raised in southeastern Morocco which Desert. he has been working in tourism for over the last 10 years. He works as a camel guide in the Desert, then to the expert driver/guide, and now he is the CEO of Ur Excursion Company. Likewise, he is humorous and active all the time. Ibrahim speaks several languages such as Berber, Arabic, English, Franche , and Spanish.`,
    },
    {
      image: "/../../../images/team/mohamed.jpg",
      name: "Mohamed",
      massion: "Pro Web-Full Stuck Devloper , Technical Director in UE",
      about: `Mohamed is 24 years old. born in southeastern Morocco, He is Pro Developer. and he is living in Spain, and he Build UE`,
    },
    {
      image: "/../../../images/team/said.jpg",
      name: "Said",
      massion: "profesional Tourism expert / co-founder of UE",
      about: `Said is 38 year old, born and raised in the southeast of Morocco. He has been working in tourism for 15 over last years and his first job was a camel guide as must of resaidence of  Merzouga Desert. He is also an experienced driver/guide. Moreover, he is humorous and always active. Last but not least, he speaks several languages such as Berber, Arabic, English, French, Spanish, Italian, a little Chinese and Japanese.`,
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
      <FirstPart
        TourName={"About Us"}
        Tour_imnage={
          "https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/71/28/39/marruecos-star-tour.jpg"
        }
      />{" "}
      <DivRaf />
      <SomeText TitleConntet={"Our Team"} Content={Team} />
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

export default Index;
