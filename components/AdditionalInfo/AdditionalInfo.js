import React, { useState, useRef } from "react";
import Style from "../../styles/NoteCss/NoteCss.module.css";
import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";

export const FaqTour = ({ Info, Moreinfo }) => {
  const hidElenet = useRef();
  const [HideElment, setHideElment] = useState(true);
  const HideElementFunc = () => {
    setHideElment(!HideElment);
  };
  return (
    <>
      <div className={Style.first_item}>
        <div className={Style.first_child_item}>
          <h3 onClick={HideElementFunc} className={Style.title_tour_title}>
            {Info}
          </h3>
          <button onClick={HideElementFunc} className={Style.button_tour_show}>
            {HideElment ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </button>
        </div>
        <div>
          <p
            className={Style.title_tour_content}
            ref={hidElenet}
            style={HideElment ? { display: "none" } : { display: "block" }}
          >
            {Moreinfo}
          </p>
        </div>
      </div>
    </>
  );
};

export const AdditionalInfo = () => {
  const [FaqTourArray, setFaqTour] = useState([
    {
      info: "Additional Info",
      moreinfo: [
        "Confirmation will be received at time of booking",
        "At the accommodations, you will be staying in a private room at your preferred type",
        "At the desert camp, you will be staying in a private tent at your fancied type",
        "Vegetarian option is available, please advise at time of booking if required.",
        "Wheelchair accessible",
        "Stroller accessible",
        "Service animals allowed",
        "Near public transportation",
        "Infants must be accompanied by an adult.",
        "Comfortable shoes for walking and Sandboarding, sport sneakers for example. Long sleeves and long pants or skirts are appropriate for the camel trek.",
        "Quad bike & Buggies in the dunes can be included as an extra.",
        "Infants must sit on laps",
        "Infant seats available",
        "Transportation is wheelchair accessible",
        "Surfaces are wheelchair accessible",
        "No heart problems or other serious medical conditions",
        "Most travelers can participate",
      ],
    },
    {
      info: "Good to Know ",
      moreinfo: [
        "The tour includes stops and visits to sights and attractions that may be very touristy in the high season.",
        "You may spend more time in the car than you will be visiting on some days of the tour due to long distances.",
        "You may stop in places and attractions with small local stores, but you are not obliged to buy anything.",
        "We may stop at local restaurants that serve fresh food that can be touristy during peak season. However, you can choose one on your own and have your driver take you there anytime you like.",
        "We don’t recommend riding a camel for people over the age of 70, people with back and leg issues, and pregnant women.",
        "It’s possible to miss the sunset, sunrise, or a part of the camel excursion if there’s a sandstorm.",
      ],
    },
    {
      info: "Payment process",
      moreinfo: [
        "To confirm This tour, we require a small deposit to be paid over PayPal or Payoneer or Stripe or any other Payment method to our account, the balance is payable in cash at the pick-up, to be paid to your driver in euros, or equal in dollars or dirhams.",
        "Usually, we request the balance payments in cash because PayPal also has many transaction fees and operational delays since it’s a world institution. We can in some cases accept the complete payment via Paypal however a 5% fee is going to be applied to hide the additional transaction charges. just in case you’re considering this method, it’s best to rearrange the payment before the tour.",
        "we accept the entire cost with Payoneer in some cases and it is free of charge.",
      ],
    },
    {
      info: "Cancellation Policy",
      moreinfo: [
        "You can cancel up to 48 hours in advance of the Tour for a full refund.",
        "For a full refund, you must cancel at least 24 hours before the Tour’s start time.",
        "If you cancel less than 24 hours before the Tour’s start time, the amount you paid will not be refunded.",
        "Any changes made less than 24 hours before the Tour’s start time will not be accepted.",
        "Cut-off times are based on the Tour’s local time.",
        "This experience requires good weather. If it’s canceled due to poor weather, you’ll be offered a different date or a full refund.",
      ],
    },
  ]);

  return (
    <>
      <div className={Style.NOTE}>
        <h5 className={Style.title_tour_bem}>FAQ</h5>
      </div>
      {FaqTourArray.map(({ info, moreinfo }) => (
        <FaqTour
          key={Math.random()}
          Info={info}
          Moreinfo={moreinfo.map((item) => (
            <li key={Math.random()}>
              {item} <br />
            </li>
          ))}
        />
      ))}
    </>
  );
};
