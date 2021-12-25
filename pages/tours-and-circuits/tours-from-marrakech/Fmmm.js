import React, { useState, useEffect } from "react";
import Seo from "../../../components/Seo";
import TourLayout from "../../../layout/TourLayout";
import Style from "../../../styles/toursModal/tourItinerary.module.css";
import SingleItit from "../../../components/SingleItit/SingleItit";
import {
  MarrakechtoDades,
  MarrakechtMerzouga,
} from "../../../DaysData/FromMarrakech";
import {
  NoralDay,
  StyledalDay,
} from "../../../components/SingleItit/SingleItit";
import Review from "../../../components/Reviews/Review";

const Fmmm = () => {
  const id = "fmmf";
  const [TourArray, setTourArray] = useState([
    {
      image:
        "https://www.corazondemarruecos.com/wp-content/uploads/2019/02/ISS_10716_02559.jpg",

      image1:
        "https://www.corazondemarruecos.com/wp-content/uploads/2019/02/ait-ben-haddouX10.jpg",
      image2:
        "https://www.corazondemarruecos.com/wp-content/uploads/2019/02/marrakech-corazon-de-marruecos.jpg",
      image3:
        "https://www.corazondemarruecos.com/wp-content/uploads/2019/02/shutterstock_109143641.jpg",
      image4:
        "https://www.corazondemarruecos.com/wp-content/uploads/2019/02/luna-de-miel-corazon-de-marruecos-viajes-1.jpg",
      image5:
        "data:image/jpeg;base64,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",
      image6: "https://www.topsaharatrips.com/images/merzouga-quad-biking.webp",
      tourname: "5 Days from Marrakech to merzouga back to Marrakech",
      category: "Tours From Marrakech",
      days: 5,
      nights: 4,
      price: 123,
      discount: 20,
      tag1: "Tours From Marrakech",
      tag2: "Tours From Marrakech",
      tag3: "Tours From Marrakech",
      tag4: "Tours From Marrakech",
    },
  ]);

  const [SeoArray, setSeoArray] = useState([
    {
      seotile: "THis this the seo title",
      desc: "this is the descreption of seo",
      meta: "this is meta about twiter and facebook",
    },
  ]);
  const [TourItinirary, setTourItinirary] = useState([
    {
      overview:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis harum similique fugiat temporibus libero commodi aspernatur quasi doloremque, velit molestias! Enim molestiae eos accusantium placeat quisquam pariatur voluptas deleniti minima. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis harum similique fugiat temporibus libero commodi aspernatur quasi doloremque, velit molestias! Enim molestiae eos accusantium placeat quisquam pariatur voluptas deleniti minima.",
    },
  ]);
  const [ReviewArray, setReviewArray] = useState([
    {
      textreview:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis harum similique fugiat temporibus libero commodi aspernatur quasi doloremque, velit molestias! Enim molestiae eos accusantium placeat quisquam pariatur voluptas deleniti minima. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis harum similique fugiat temporibus libero commodi aspernatur quasi doloremque, velit molestias! Enim molestiae eos accusantium placeat quisquam pariatur voluptas deleniti minima.",
    },
    {
      textreview:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis harum similique fugiat temporibus libero commodi aspernatur quasi doloremque, velit molestias! Enim molestiae eos accusantium placeat quisquam pariatur voluptas deleniti minima. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis harum similique fugiat temporibus libero commodi aspernatur quasi doloremque, velit molestias! Enim molestiae eos accusantium placeat quisquam pariatur voluptas deleniti minima.",
    },
  ]);
  return (
    <>
      {TourArray.map(
        ({
          image,
          image1,
          image2,
          image3,
          image4,
          image5,
          image6,
          tourname,
          category,
          days,
          nights,
          price,
          discount,
          tag1,
          tag2,
          tag3,
          tag4,
        }) => (
          <TourLayout
            TourName={tourname}
            key={id}
            Tour_imnage={image}
            Image1={image1}
            Image2={image2}
            Image3={image3}
            Image4={image4}
            Image5={image5}
            Image6={image6}
            TourName={tourname}
            Category={category}
            Days={days}
            Nights={nights}
            Price={price}
            Discount={discount}
            Tag1={tag1}
            Tag2={tag2}
            Tag3={tag3}
            Tag4={tag4}
          >
            <div className={Style.div_itenbery}>
              {/*oOVERVIEW GO HERE*/}
              {TourItinirary.map(({ overview }) => (
                <SingleItit key={id} Overview={overview} />
              ))}
              {/*NORMAL DAYS GO HERE*/}
              <div>
                {MarrakechtoDades.map(({ day, tour }) => (
                  <NoralDay key={id} Day={day} DayNumer={"11"} TourDay={tour} />
                ))}

                {MarrakechtMerzouga.map(({ day, tour, id }) => (
                  <StyledalDay
                    key={id}
                    sDay={day}
                    sDayNumer={"02"}
                    sTourDay={tour}
                  />
                ))}

                {MarrakechtMerzouga.map(({ day, tour, id }) => (
                  <StyledalDay
                    key={id}
                    sDay={day}
                    sDayNumer={"03"}
                    sTourDay={tour}
                  />
                ))}
                {MarrakechtMerzouga.map(({ day, tour, id }) => (
                  <StyledalDay
                    key={id}
                    sDay={day}
                    sDayNumer={"03"}
                    sTourDay={tour}
                  />
                ))}
              </div>
              <div>
                <h5 className={Style.title_tour_bem}>Reviews</h5>
                {ReviewArray.map(({ textreview }) => (
                  <Review TextReview={textreview} />
                ))}
      
              </div>
            </div>
          </TourLayout>
        )
      )}
    </>
  );
};

export default Fmmm;
