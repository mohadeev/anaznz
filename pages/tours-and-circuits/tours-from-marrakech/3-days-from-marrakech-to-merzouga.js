import React, { useState, useEffect } from "react";
import Seo from "../../../components/Seo";
import TourLayout from "../../../layout/TourLayout";
import Style from "../../../styles/toursModal/tourItinerary.module.css";
import SingleItit from "../../../components/SingleItit/SingleItit";
import { DayTour } from "../../../DaysData/Days";
import { useSelector } from "react-redux";

import Review from "../../../components/Reviews/Review";
import {
  Included,
  IncludesConatainer,
  NotIncludesConatainer,
} from "../../../components/includes/Includes";
import ReviewNote, {
  ReviewAlays,
} from "../../../components/ReviewNote/ReviewNote";
import Tags, { TagItm } from "../../../components/Tags/Tags";
import Note from "../../../components/Note/Note";

const Index = () => {
  const Counter = useSelector((state) => state.main);
  const id = "5MMF";
  //INFO ABOUT FIRST PART OF THE TOUR GO HERE
  const [TourArray, setTourArray] = useState([
    {
      //FIRST IMAGE
      image: "https://images6.alphacoders.com/533/thumb-1920-533594.jpg",
      //IMAGES OF FAMOUSE PLACE
      image1: "https://images8.alphacoders.com/545/545350.jpg",
      //IMAGES : PRINTREST ATTRACTION
      image2: "https://images5.alphacoders.com/109/thumb-1920-1096789.jpg",
      //IMAGE OF FOOOD
      image3:
        "https://www.corazondemarruecos.com/wp-content/uploads/2019/02/shutterstock_109143641.jpg",
      //IMAGE OF ANIMALS PLACE
      image4:
        "https://www.corazondemarruecos.com/wp-content/uploads/2019/02/luna-de-miel-corazon-de-marruecos-viajes-1.jpg",
      //IMAGE OF NATURE
      image5: "https://images6.alphacoders.com/414/thumb-1920-414651.jpg",
      // IMAGE OF QUAD BIKE 
      image6: "https://www.topsaharatrips.com/images/merzouga-quad-biking.webp",
      tourname: "5 Days from Marrakech to merzouga back to Marrakech",
      category: "Tours From Marrakech",
      days: 5,
      nights: 4,
      price: 123,
      discount: 20,
      tag1: "Tours From Sahara Desert Tours",
      tag2: "Tours From Marrakech",
      tag3: "Tours From Marrakech",
      tag4: "Tours From Marrakech",
    },
  ]);
  //SEO GO HERE
  const [SeoArray, setSeoArray] = useState([
    {
      descmeta: "this is the meta data for seo",
      seotile: "Sahara Desert Tours",
      imageseo:
        "https://www.topsaharatrips.com/images/merzouga-quad-biking.webp",
    },
  ]);
  // THIS IS OVERVIEW TEXT
  const [TourItinirary, setTourItinirary] = useState([
    {
      overview:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis harum similique fugiat temporibus libero commodi aspernatur quasi doloremque, velit molestias! Enim molestiae eos accusantium placeat quisquam pariatur voluptas deleniti minima. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis harum similique fugiat temporibus libero commodi aspernatur quasi doloremque, velit molestias! Enim molestiae eos accusantium placeat quisquam pariatur voluptas deleniti minima.",
    },
  ]);
  //REVIEWS GO HERE
  const [ReviewArray, setReviewArray] = useState([
    {
      personname: "Mohamed Skendoul",
      postdate: "20/12/2010",
      textreview:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis harum similique fugiat temporibus libero commodi aspernatur quasi doloremque, velit molestias! Enim molestiae eos accusantium placeat quisquam pariatur voluptas deleniti minima. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis harum similique fugiat temporibus libero commodi aspernatur quasi doloremque, velit molestias! Enim molestiae eos accusantium placeat quisquam pariatur voluptas deleniti minima.",
    },
  ]);
  // HIGHTLIGHT GO HERE
  const [TagsArrau, setTagsArrau] = useState([
    "Morocco",
    "Desert Tours",
    "Desert Tours",
    "Desert Tours",
    "Desert Tours",
    "Desert Tours",
  ]);
  const [AllDays, setAllDays] = useState([
    {
      dayNumer: "1",
      tourId: "MAR-OUR-DES",
      Isfirst: true,
      blockstyle: "none",
    },
    { dayNumer: "2", tourId: "MARR-HIG-OUR", blockstyle: "block" },
    {
      dayNumer: "3",
      tourId: "DES-GOR-MER",
      blockstyle: "block",
    },
    {
      dayNumer: "4",
      tourId: "DES-OUR-MARR",
      blockstyle: "block",
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
            // First Area of the Tour
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
            {SeoArray.map(({ descmeta, seotile, imageseo }) => (
              <Seo
                SeoTile={seotile}
                DescMeta={descmeta}
                ImageSeo={imageseo}
                key={Math.random()}
              />
            ))}
            <div className={Style.div_itenbery}>
              {/*OVERVIEW GO HERE*/}
              {TourItinirary.map(({ overview }) => (
                <SingleItit key={id} Overview={overview} MytourName="sdkjsd" />
              ))}
              {/*NORMAL DAYS GO HERE*/}
              <div>
                {AllDays.map(({ dayNumer, tourId, Isfirst, blockstyle }) => (
                  <DayTour
                    DayNumer={dayNumer}
                    TourId={tourId}
                    IsFirst={Isfirst}
                    Blockstyle={blockstyle}
                  />
                ))}
              </div>
              <Note />
              {/*DIV INCLUDES GO HERE */}
              <h5 className={Style.title_tour_bem}>
                Tour Price Includes and Excludes
              </h5>
              <div className={Style.div_includes}>
                <IncludesConatainer></IncludesConatainer>
                <NotIncludesConatainer />
              </div>
              {/* DIV / REVIEWS GO HERE*/}
              <div>
                <Tags>{TagsArrau.map((item) => TagItm(item))}</Tags>
                <h5 className={Style.title_tour_bem}>Reviews</h5>
                <ReviewAlays />
                {ReviewArray.map(({ textreview, personname, postdate }) => (
                  <Review
                    TextReview={textreview}
                    PersonName={personname}
                    PostDate={postdate}
                    key={Math.random()}
                  />
                ))}
                <ReviewNote />
              </div>
            </div>
          </TourLayout>
        )
      )}
    </>
  );
};

export default Index;
