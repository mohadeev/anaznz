import React from "react";
import Style from "../../styles/ReviewCss/Review.module.css";
import Image from "next/image";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";

const Review = ({ TextReview, PersonName, PostDate }) => {
  return (
    <div className={Style.div_review}>
      <div className={Style.div_image}>
        <Image
          width={"50px"}
          height={"50px"}
          role="img"
          alt="images"
          className={Style.emoji}
          src="https://moroccoeverywheretours.com/wp-content/plugins/wordpress-whatsapp-support/assets/img/user.svg"
        />
      </div>
      <div className={Style.review_info}>
        <h5 className={Style.title_tour_bem}>{PersonName}</h5>

        <span className={Style.title_tour_content}>{PostDate}</span>
        <div className={Style.div_staricons}>
          {Array(5)
            .fill()
            .map(() => (
              <AiFillStar key={Math.random()} />
            ))}
        </div>
        <p id={Style.overview} className={Style.title_tour_content}>
          {TextReview}
        </p>
      </div>
    </div>
  );
};

export default Review;
