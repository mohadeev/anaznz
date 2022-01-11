import React, { useState } from "react";
import Style from "../styles/TourPartOne/SecondInfo.module.css";
import { HiLocationMarker } from "@react-icons/all-files/hi/HiLocationMarker";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import { IoIosPeople } from "@react-icons/all-files/io/IoIosPeople";
import { IoIosArrowDropdownCircle } from "@react-icons/all-files/io/IoIosArrowDropdownCircle";
import { AiFillCalendar } from "@react-icons/all-files/ai/AiFillCalendar";
import { FaMapSigns } from "@react-icons/all-files/fa/FaMapSigns";

const SecondInfo = ({
  TourName,
  Days,
  Nights,
  Price,
  Discount,
  Tag1,
  Tag2,
  Tag3,
  Tag4,
}) => {
  const [MainIcons, setMainIcons] = useState([
    {
      icon: <IoIosPeople />,
      name: "Privat / Shared",
    },
    {
      icon: <IoIosArrowDropdownCircle />,
      name: "Free Cancellation",
    },
    {
      icon: <FaMapSigns />,
      name: "Attractions",
    },
    {
      icon: <AiFillCalendar />,
      name: "Possibility to Modify",
    },
    {
      icon: <AiFillStar />,
      name: "Luxury / Standard",
    },
  ]);

  const Tag = (tags) => {
    return (
      <div className={Style.each_tage_item}>
        <p className={Style.iteeems_tags}>
          <span>#</span>
          {tags}
        </p>
      </div>
    );
  };
  return (
    <div className={Style.div_info_tour_second}>
      <div className={Style.div_info_tour_second_firstchild}>
        <h3 className={Style.h3_morocco_tours}>
          <HiLocationMarker /> Morocco Tours{" "}
        </h3>
        <h2 className={Style.tour_name_second_div}>{TourName}</h2>
        <span className={Style.span_duration_tour}>
          {Days} Days / {Nights} Nights
        </span>
        <span className={Style.span_rating_tour}>
          {Array(5)
            .fill()
            .map((_, i) => (
              <AiFillStar key={Math.random()} />
            ))}{" "}
          <span className={Style.span_duration_tour}>5.5</span>
        </span>
        <div className={Style.tag_item}>
          {Tag(Tag1)}
          {Tag(Tag2)}
          {Tag(Tag3)}
          {Tag(Tag4)}
        </div>
      </div>
      <div className={Style.div_info_tour_second_secondchild}>
        <div className={Style.div_second_firstchidl}>
          <p className={Style.just_book_now}>
            {"Just booked! Get your spot before it's too"}
            late.
          </p>
          <p className={Style.price_p_items}>
            <span className={Style.span_duration}>
              <span
                className={Style.fgklfglfglkfgl}
                style={{ color: "white", textDecoration: "none" }}
              >
                From :{" "}
              </span>
              {Price} $
            </span>
            <span className={Style.span_duration}>{Discount} $</span>
          </p>
        </div>
        <div className={Style.icons_items_tours_see}>
          {MainIcons.map(({ icon, name }) => (
            <span key={Math.random()} className={Style.icons_items_tour_see}>
              <i className={Style.icons_svg}>{icon}</i> {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondInfo;
