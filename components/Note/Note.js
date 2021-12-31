import React, { useState, useRef } from "react";
import Style from "../../styles/NoteCss/NoteCss.module.css";
import { AiFillInfoCircle } from "@react-icons/all-files/ai/AiFillInfoCircle";
import { ImPlus } from "@react-icons/all-files/im/ImPlus";
import { ImMinus } from "@react-icons/all-files/im/ImMinus";

const Note = () => {
  return (
    <div className={Style.div_note}>
      <div className={Style.NOTE}>
        {" "}
        <AiFillInfoCircle /> <h5 className={Style.title_tour_bem}>Note</h5>
      </div>
      <p id={Style.overview} className={Style.title_tour_content}>
        If this current itinerary from Marrakech does not match what you’re
        looking for, Contact us We provide customized trips in Morocco according
        to your duration of stay and your preferences. You can come with your
        family, relatives, friends or all of them. Just let us know your
        duration, what you wish to do in the state and we’ll plan the itinerary
        according to your interests
      </p>
    </div>
  );
};

export default Note;

export const GoodTopKnow = () => {
  const [goodToknow, setgoodToknow] = useState([
    "The tour includes stops and visits to sights and attractions that may be very touristy in the high season.",
    "You may spend more time in the car than you will be visiting on some days of the tour due to long distances.",
    "You may stop in places and attractions with small local stores, but you are not obliged to buy anything.",
    "We may stop at local restaurants that serve fresh food that can be touristy during peak season. However, you can choose one on your own and have your driver take you there anytime you like.",
    "We don’t recommend riding a camel for people over the age of 70, people with back and leg issues, and pregnant women.",
    "It’s possible to miss the sunset, sunrise, or a part of the camel excursion if there’s a sandstorm.",
  ]);
  return (
    <>
      <div className={Style.NOTE}>
        <h5 className={Style.title_tour_bem}>Good to Know</h5>
      </div>
      <div className={Style.first_item}>
        {goodToknow.map((item) => (
          <h3 key={Math.random()} className={Style.good_toknow}>
            {" "}
            * {item}
          </h3>
        ))}
      </div>
    </>
  );
};

