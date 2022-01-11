import React from "react";
import Style from "../../styles/ReviewCss/Review.module.css";
import Image from "next/image";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import Link from "next/link";

const Review = ({ TextReview, PersonName, PostDate, FlexBase }) => {
  return (
    <div className={Style.div_review} style={{ flexBasis: `${FlexBase}` }}>
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









export const ReviewComponet = ({ ReviwIMage }) => {
  const TextContntReview =
    "Without a doubt an extraordinary experience, it has exceeded all my expectations. We toured the great hidden south by the hand of the best guides, both Ibrahim and Hammi made us feel at home at all times, they showed us Morocco from their eyes and that has undoubtedly made it a special trip, bsaha! It is a precious trip that I will remember all my life and that I recommend to everyone who wants to really know the South. ";
  return (
    <div
      className={Style.div_ReviewComponet}
      style={{
        backgroundImage: `url(${
          ReviwIMage
            ? ReviwIMage
            : "https://www.turismomarruecos.net/wp-content/uploads/2020/09/IMG_Fondo_Formulario.jpg"
        })`,
      }}
    >
      <div className={Style.div_review_container}>
        <Review
          FlexBase={"100%"}
          TextReview={TextContntReview}
          PersonName={"MARIANGELSEL"}
          PostDate={"15/10/2020"}
        />
        <Link href="/comaing-soon" passHref={true}>
          <button className={Style.anamimationbbbb}> Read More </button>
        </Link>
      </div>

      <div className={Style.div_photo_cleint}></div>
    </div>
  );
};
