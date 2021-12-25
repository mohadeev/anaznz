import React from "react";
import Style from "../../styles/ReviewCss/Review.module.css";
import Image from "next/image";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";

const Review = ({ TextReview }) => {
  return (
    <div>
      <div className={Style.div_review}>
        <Image
          width={"50px"}
          height={"50px"}
          role="img"
          className={Style.emoji}
          src="https://moroccoeverywheretours.com/wp-content/plugins/wordpress-whatsapp-support/assets/img/user.svg"
        />
        <div className={Style.div_staricons}>
          {Array(5)
            .fill()
            .map(() => (
              <AiFillStar key={Math.random()} />
            ))}
        </div>
        <p id={Style.overview} className={Style.title_tour_content}>
          {TextReview}
          {/*8:40*/}
        </p>
      </div>
    </div>
  );
};

export default Review;
