import React from "react";
import { FaLocationArrow } from "@react-icons/all-files/fa/FaLocationArrow";
import { HiLocationMarker } from "@react-icons/all-files/hi/HiLocationMarker";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import { IoIosPeople } from "@react-icons/all-files/io/IoIosPeople";
import { IoIosArrowDropdownCircle } from "@react-icons/all-files/io/IoIosArrowDropdownCircle";
import { AiFillCalendar } from "@react-icons/all-files/ai/AiFillCalendar";
import { FaMapSigns } from "@react-icons/all-files/fa/FaMapSigns";
import Style from "../styles/TourPartOne/TourPartOne.module.css";

const TourPartOne = ({
  Tour_imnage,
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  TourName,
  Category,
  Days,
  Nights,
  Price,
  Discount,
  Tag1,
  Tag2,
  Tag3,
  Tag4,
}) => {
  const Tag = (tags) => {
    return (
      <div className={Style.each_tage_item}>
        <p>
          <span>#</span>
          {tags}
        </p>
      </div>
    );
  };
  return (
    <div className={Style.tourpaertone_container}>
      <div className={Style.tourpaertone_container1}>
        <div
          style={{ backgroundImage: `url(${Tour_imnage})` }}
          className={Style.div_image_banner}
        >
          <div className={Style.div_overley_tour}>
            <div>
              <h1 className={Style.tour_title}>{TourName}</h1>
              <h2 className={Style.tour_category}>
                <FaLocationArrow /> {Category}
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className={Style.div_info_tour}>
        {/* //start of the div  */}
        <div className={Style.div_info_images}>
          <div
            className={Style.div_info_1}
            style={{ backgroundImage: `url(${Image1})` }}
          ></div>
          <div
            className={Style.div_info_2}
            style={{ backgroundImage: `url(${Image2})` }}
          ></div>
          <div className={Style.div_info_3}>
            <div className={Style.firstchild_images}>
              <div
                style={{ backgroundImage: `url(${Image3})` }}
                className={Style.div_info_3_1}
              ></div>
              <div
                style={{ backgroundImage: `url(${Image4})` }}
                className={Style.div_info_3_1}
              ></div>
            </div>

            <div className={Style.lastchild_images}>
              <div
                style={{ backgroundImage: `url(${Image5})` }}
                className={Style.div_info_3_1}
              ></div>
              <div
                style={{ backgroundImage: `url(${Image6})` }}
                className={Style.div_info_3_1}
              ></div>
            </div>
          </div>
        </div>
        {/* //end of the div  */}
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
              <span className={Style.icons_items_tour_see}>
                <IoIosPeople className={Style.icons_svg} /> Privat / Shared
              </span>
              <span className={Style.icons_items_tour_see}>
                <IoIosArrowDropdownCircle className={Style.icons_svg} /> Free
                Cancellation
              </span>
              <span className={Style.icons_items_tour_see}>
                <FaMapSigns className={Style.icons_svg} /> Attractions
              </span>
              <span className={Style.icons_items_tour_see}>
                <AiFillCalendar className={Style.icons_svg} /> Possibility to
                Modify
              </span>
              <span className={Style.icons_items_tour_see}>
                <AiFillStar className={Style.icons_svg} /> Luxury / Standard
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPartOne;
