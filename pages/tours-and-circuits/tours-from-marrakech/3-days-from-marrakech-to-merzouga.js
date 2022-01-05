import React, { useState, useEffect } from "react";
import Seo from "../../../components/Seo";
import TourLayout from "../../../layout/TourLayout";
import Style from "../../../styles/toursModal/tourItinerary.module.css";
import SingleItit from "../../../components/SingleItit/SingleItit";
import { DayTour } from "../../../DaysData/Days";

import Review from "../../../components/Reviews/Review";
import {
  IncludesConatainer,
  NotIncludesConatainer,
} from "../../../components/includes/Includes";
import ReviewNote, {
  ReviewAlays,
} from "../../../components/ReviewNote/ReviewNote";
import Tags, { TagItm } from "../../../components/Tags/Tags";
import Note from "../../../components/Note/Note";

const Index = () => {
  const id = "3-MARR-DES-MER-MAR";
  const SeoTitle = " 3 Days Morocco Tour From Marrakech to Merzouga ";
  const ProgramName = " 3 Days Morocco Tour From Marrakech to Merzouga ";
  const FocuseKeyone = " 3 Days From  Marrakech Trip to Merzouga Desert ";
  const FocuseKeyTwo = " 3 Days Sahara Desert Tour in Morocco ";
  const FocuseKeyTree = " Morocco 3 Days Traveling from Marrakech ";
  const FocuseKeyFour = " Sahara Desert 3 Days Holiday ";

  //INFO ABOUT FIRST PART OF THE TOUR GO HERE
  const [TourArray, setTourArray] = useState([
    {
      // FIRST IMAGES HERE / MARRAKECH - OR DESERT /
      image:
        "/../../../images/merzouga-images/camels-images/desert-camels-merzouga-3.jpg",
      //THIS IMAGES SECOND IMAGES / FAMOUSE PLACE //
      image1:
        "/../../../images/ait-ben-haddou-images/ourzazate-aitbenhadou2.jpg",
      // A FOOD IMAGES /
      image2: "/../../../images/food-images/morocco-food1.jpg",
      // "https://www.corazondemarruecos.com/wp-content/uploads/2019/02/marrakech-corazon-de-marruecos.jpg"
      // ACTIVTIES 1 / ANIMALS
      image3:
        // ACTIVTIES 2 CALM OR NATUTRE PLACE
        "/../../../images/merzouga-images/camels-images/desert-camels-merzouga-4.jpg",
      //"/../../../images/activties-images/activties-images.jpg"
      image4:
        // ACTIVTIES 3 GROUP PEOPLPE
        "/../../../images/altas-images/altas-images-1.jpg",
      // "https://www.corazondemarruecos.com/wp-content/uploads/2019/02/luna-de-miel-corazon-de-marruecos-viajes-1.jpg",
      // CITY
      image5: "/../../../images/merzouga-images/camp-mages/camp-images-1.jpg",
      // ACTIVTIES 4 QUAD BIKE OR Sky
      image6: "/../../../images/merzouga-images/quad-images/quad-images-1.jpg",
      tourname: ProgramName,
      category: "Tours From Marrakech",
      days: 3,
      nights: 2,
      price: 170,
      discount: 25,
    },
  ]);
  //SEO GO HERE
  const [SeoArray, setSeoArray] = useState([
    {
      descmeta: ` ${SeoTitle + FocuseKeyone + FocuseKeyTwo + FocuseKeyTree}`,
      seotitle: SeoTitle,
      imageseo:
        "https://www.topsaharatrips.com/images/merzouga-quad-biking.webp",
    },
  ]);
  // THIS IS OVERVIEW TEXT
  const [TourItinirary, setTourItinirary] = useState([
    {
      overview: (
        <p>
          <b>{ProgramName}</b> gives you a magnificent oportunity to enjoy the
          very best of Morocco&apos;s top attractions, including the massive
          Atlas Mountains, spectacular scenery and genuine Berber villages.Your{" "}
          <b>{FocuseKeyone}</b> will take you on to the Ksar ( walled village)
          of Ait ben Haddou, the famous Kasbah, declared a World Heritage Site
          by UNESCO in 1986. Several films have been filmed in this most
          spectacular place, including Gladiator, Obelix, The Mummy, The Jewel
          of the Nile, Sahara with Penélope Cruz... etc. we continue to
          Ouarzazate to visit the Oscar Atlas Film Studio, the largest film
          studio in Morocco, and the Taourirt Kasbah. Then our desert carry on
          from Marrakech to Merzouga continues through the Palm Grove of Skoura,
          the Rose Valley, famous for its yearly Rose Festival and its beauty
          products, The verdant Dades Gorge and the mesmerizing Todra Valley, a
          renowned site for rock rock climbing. Finally we arrive at our most
          wonderful place &quot; Merzouga - Erg Chebbi desert, where we take a
          camel ride to see the beautiful sunset and enjoy a magical overnight
          in a Berber camp. The following day we will return to Marrakech,
          making stops on the way to appreciate the scenery and take pictures...
          we will pass through the Draa Valley, the Anti-Atlas and drive back to
          Marrakech, where will be end of your
          <b>{FocuseKeyTwo}</b>.
        </p>
      ),
    },
  ]);
  //REVIEWS GO HERE
  const [ReviewArray, setReviewArray] = useState([
    {
      personname: "JULIA T",
      postdate: "15/02/2020",
      textreview: (
        <p>
          I have booked a trip with Ur Excursions with my friends. We have been
          3 days in Merzouga and on the Sahara Desert. The attention is
          incredible, all the worker guys are really kind and funny, I have felt
          really comfortable. We have done a excursion with 4x4 by the dunes,
          surf on the dunes, meet the berber culture and share nice moments with
          the guides. At night we joy of a delicious dinner and of a music and
          dance moments at the middle of the desert, on the tents with the fire
          camp. I hope i will repeat this beautiful experience in my life.
          Absolutly amazing! Thank you to all the worker guys. I recommend Ur
          Excursions!
        </p>
      ),
    },
    {
      personname: "Devi__65",
      postdate: "22/08/2018",
      textreview: (
        <p>
          As a rather cynical traveller, I usually avoid these types of
          activities, which I call tourist traps but these guys were great. Very
          laid back but attentive, they took care of every detail. The food was
          excellent, the whole experience just overwhelms you and the desert
          camp is something I will remember for a long time to come. Value for
          money? Absolutely!!.
        </p>
      ),
    },
    {
      personname: "Matthew Marama",
      postdate: "12/01/2020",
      textreview: (
        <p>
          We have visited Morocco for the first time, and we have found it to be
          an absolutely beautiful place (North and South) and rich in amazing
          culture. The people of Morocco have their mix of good and bad as do
          any country. When we visited Fes before our tour, we had a bad
          experience that made us worried about the Desert tour to come. When we
          first met Lhou, we had no expectations other than just surviving our
          trek through the Sahara and trying to have fun. For putting up with us
          for 3 days, he has shown us hospitality that completely blew our
          minds. He was very friendly, helpful, considerate, knowledgeable, good
          at what he does, and overall he has made our Morocco experience that
          much better as our tour guide. We praise Ur Excursions for providing
          with us the best tour experience that we could have ever asked for,
          especially with Lhou. For 2 quiet guys wanting to go on adventure and
          trying to live our Sahara Desert dreams, I strongly recommend this
          tour company and driver.
        </p>
      ),
    },
    {
      personname: "Tomoe H",
      postdate: "02/04/2019",
      textreview: (
        <p>
          Said put this trip together at the very last minute for my 11 year old
          son and myself. The trip was certainly beyond our expectations. Our
          guide, Mohamed, was very kind and knowledgeable about life in Atlas,
          the desert and Nomad people. We spent a night at Riad Dades where the
          chef prepared wonderful Moroccan dishes. Riding camel in the sunset
          was such a memorable moment and the night stay in a camp with other
          travelers with dinner and music entertainment was a highlight of our
          trip. We spent 3 nights in Fez. We had another guide Said who is a
          local resident in Medina and a historian who took us though the
          Medina. We enjoyed historic sites, artisans, food and shopping. On the
          last day, Mohamed took us to Chefchaouen for a day trip. We recommend
          you take a day to visit this blue city! Special thank you to Mohamed
          who drove us for 5 days. You are such a warm and kind person. Thank
          you for stopping every time we requested to care for stray cats and
          dogs! I would love to bring the rest of my family to Morocco again.
        </p>
      ),
    },
    {
      personname: "MaikeM",
      postdate: "25/05/2019",
      textreview: (
        <p>
          We did not know what to expect in advance. But we certainly did not
          expect this great experience. We were so warmly welcomed by our driver
          Hassan and by the tour leader Ibrahim. They gave us a glimpse into
          life in the desert and they looked after us super well with great food
          and fun activities. Climbing the highest dune in the desert was the
          real highlight for us. We had a super nice view over the desert and
          afterwards we ran down the dune. After two nights in the desert,
          campfires, music after dinner, trips with the camel, lunch at the
          locals and playing soccer with all the tour leaders, it was time to
          return to the bustle of the city and then go back to the Netherlands.
          Ibrahim and the rest, thank you so much for this wonderful experience
          that we will never forget!
        </p>
      ),
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
    SeoTitle,
    "Desert Desert Tours",
  ]);
  const [AllDays, setAllDays] = useState([
    {
      dayNumer: "1",
      tourId: "MAR-OUR-DES",
      Isfirst: true,
      blockstyle: "none",
    },
    {
      dayNumer: "2",
      tourId: "DES-GOR-MER",
      blockstyle: "block",
    },
    {
      dayNumer: "3",
      tourId: "MER-HIG-MARR",
      blockstyle: "block",
    },
    ,
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
            Tag1={FocuseKeyone}
            Tag2={FocuseKeyTwo}
            Tag3={FocuseKeyTree}
            Tag4={FocuseKeyFour}
          >
            {SeoArray.map(({ descmeta, seotitle, imageseo }) => (
              <Seo
                SeoTitle={seotitle}
                DescMeta={descmeta}
                ImageSeo={imageseo}
                key={Math.random() * 12}
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
                    key={tourId}
                    Blockstyle={blockstyle}
                    TourName={ProgramName}
                    FocuseOne={FocuseKeyone}
                    FocuseTwo={FocuseKeyTwo}
                    FocuseTree={FocuseKeyTree}
                    FocuseFour={FocuseKeyFour}
                  />
                ))}
              </div>
              <Note />
              {/*DIV INCLUDES GO HERE */}
              <h5 className={Style.title_tour_bem}>
                Tour Price Includes and Excludes
              </h5>
              <div className={Style.div_includes}>
                <IncludesConatainer WhatType={""} />
                <NotIncludesConatainer />
              </div>
              {/* DIV / REVIEWS GO HERE*/}
              <div>
                <Tags>
                  {TagsArrau.map((item) => (
                    <TagItm NewTag={item} key={Math.random() / 3} />
                  ))}
                </Tags>
                <h5 className={Style.title_tour_bem}>Reviews</h5>
                <ReviewAlays />
                {ReviewArray.map(({ textreview, personname, postdate }) => (
                  <Review
                    TextReview={textreview}
                    PersonName={personname}
                    PostDate={postdate}
                    key={Math.random() * 1034}
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
