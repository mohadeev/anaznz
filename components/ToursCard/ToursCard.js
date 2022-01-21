import React, { useState } from "react";
import Link from "next/link";
import Style from "../../styles/toursModal/ToursCard.module.css";
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import { FaCalendarCheck } from "@react-icons/all-files/fa/FaCalendarCheck";
import { FaClock } from "@react-icons/all-files/fa/FaClock";
const ToursCard = ({
  Image,
  TourName,
  Url,
  FlexBase,
  Desc,
  Popular,
  Days,
  Nights,
  Price,
  Descount,
}) => {
  const [Liicins, setLiicins] = useState([
    {
      icon: <FaCalendarCheck />,
      name: "Available",
    },
    {
      icon: <FaStar />,
      name: "5.5",
    },
    {
      icon: <FaClock />,
      name: `${Days} Days / ${Nights} Nights`,
    },
  ]);
  return (
    <Link href={`${Url ? Url : "#"}`} passHref={true}>
      <div
        style={{ backgroundImage: `${FlexBase}`, maxWidth: `${FlexBase}` }}
        className={Style.div_tourcard_contaainer}
      >
        <div
          className={Style.card_image}
          style={{ backgroundImage: `url(${Image})` }}
        >
          {Popular ? <div className={Style.div_is_fuetered}>Popular</div> : ""}
        </div>
        <div className={Style.div_info_about_this_tour}>
          <div>
            <span className={Style.tour_name}>{TourName}</span>
            <p className={Style.p_dec_tour}>{Desc}</p>
          </div>
          <div className={Style.div_of_border}>
            {Liicins.map(({ icon, name }) => (
              <div key={Math.random()} className={Style.li_each_items}>
                {icon} {name}
              </div>
            ))}
          </div>
          <div className={Style.div_info_price}>
            <p className={Style.pof_tour_deatails}>
              {" "}
              From : <span className={Style.price_text}>{Price} $</span>
            </p>
            <p>
              Off <span className={Style.descount}>{Descount} $</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ToursCard;
