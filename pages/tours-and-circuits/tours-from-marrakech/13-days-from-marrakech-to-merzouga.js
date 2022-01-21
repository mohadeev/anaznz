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
  const id = "5MMF";
  const SeoTitle =
    "13 Days Grand Tour from Marrakech South East Merzouga and impirail Cities.";
  const ProgramName =
    "13 Days Grand Tour from Marrakech South East Merzouga & impirail Cities.";

  const FocuseKeyOne = " 13 Day Dorocco Itinerary ";
  const FocuseKeyTwo = " 13 Day to Merzouga Desert Tour Morocco ";
  const FocuseKeyTree = " 13 Days Tour Package from Marrakech ";
  const FocuseKeyFour = " 13 Days Marrakech to Fes Via Merzouga Desert ";

  //INFO ABOUT FIRST PART OF THE TOUR GO HERE
  const [TourArray, setTourArray] = useState([
    {
      // FIRST IMAGES HERE / MARRAKECH - OR DESERT /
      image:
        "/../../../images/ait-ben-haddou-images/ourzazate-aitbenhadou25.jpg",
      imagepostion: "",
      //THIS IMAGES SECOND IMAGES / FAMOUSE PLACE //
      image1: "/../../../images/choune/choune-2.jpg",
      image1postion: "",

      // A FOOD IMAGES /

      image2: "/../../../images/casablanca-images/casablanca-images-2.jpg",
      image2postion: "center",
      // ACTIVTIES 1 / ANIMALS
      image3:
        // ACTIVTIES 2 CALM OR NATUTRE PLACE
        "/../../../images/merzouga-images/camels-images/desert-camels-merzouga-36.jpg",

      image3postion: "center",
      image4:
        // ACTIVTIES 3 GROUP PEOPLPE

        "/../../../images/essaouira-images/essaouira-images-5.jpg",
      image4postion: "",

      // CITY
      image5: "/../../../images/marrakech-images/marrakech-images-16.jpg",
      image5postion: "",

      // ACTIVTIES 4 QUAD BIKE OR Sky
      image6: "/../../../images/altas-images/altas-images-25.jpg",
      image6postion: "bottom",
      tourname: ProgramName,
      category: "Tours From Marrakech",
      days: 6,
      nights: 4,
      price: 250,
      discount: 30,
    },
  ]);
  //SEO GO HERE
  const [SeoArray, setSeoArray] = useState([
    {
      descmeta: ` ${
        SeoTitle + FocuseKeyOne + FocuseKeyTwo + FocuseKeyTree + FocuseKeyFour
      }`,
      seotitle: SeoTitle,
      imageseo:
        "https://www.topsaharatrips.com/images/merzouga-quad-biking.webp",
    },
  ]);
  // HIGHTLIGHT GO HERE
  const [TagsArrau, setTagsArrau] = useState([
    "Night in Desert Camp",
    ProgramName,
    "Camel Trekkin in Desert",
    FocuseKeyOne,
    FocuseKeyTwo,
    "Ouarzazate City Visit",
    SeoTitle,
    "Visit Rissani",
    "Luxury Desert Camp",
    FocuseKeyTree,
    "Visit AitBenHaddou",

    FocuseKeyFour,
  ]);
  const [AllDays, setAllDays] = useState([
    //  day 1 : mrr - cs
    // day 2 : cs chef
    // days 3:  chf vit : evning : fes
    //day : 4 :
    // day 5 : fes visit
    // day 6 : fes - mer
    // day 7 : mer - vist
    // day 8 : mer - des
    // day 9 : des - marr
    // day 10 : marr - essa
    // day 11 : marr - vist
    {
      dayNumer: "1",
      tourId: "MARR-IPR-CSB",
      Isfirst: true,
    },
    {
      dayNumer: "2",
      tourId: "CSB-RBT-CHF",
      blockstyle: "block",
    },
    {
      dayNumer: "3",
      tourId: "CHF-VIT-DAY",
      blockstyle: "block",
    },
    {
      dayNumer: "4",
      tourId: "CHF-MKS-FES",
      blockstyle: "block",
    },
    {
      dayNumer: "5",
      tourId: "VIT-FES-DAY",
      blockstyle: "block",
    },
    {
      dayNumer: "6",
      tourId: "FES-IFR-MER",
      blockstyle: "block",
    },
    {
      dayNumer: "7",
      tourId: "VIT-MER-DAY",
      blockstyle: "block",
    },
    {
      dayNumer: "8",
      tourId: "MER-SAF-MER",
      blockstyle: "block",
    },
    {
      dayNumer: "9",
      tourId: "MER-GOR-DES",
      blockstyle: "block",
    },
    {
      dayNumer: "10",
      tourId: "DES-OUR-MARR",
      blockstyle: "block",
    },
    {
      dayNumer: "11",
      tourId: "MARR-VIT",
      blockstyle: "block",
      IsLast: true,
    },
    {
      dayNumer: "12",
      tourId: "MARR-ORK-MARR",
      blockstyle: "block",
    },
    {
      dayNumer: "13",
      tourId: "MARR-CHI-ESS-MARR",
      blockstyle: "block",
      IsLast: true,
    },
  ]);
  // THIS IS OVERVIEW TEXT
  const [TourItinirary, setTourItinirary] = useState([
    {
      overview: (
        <p>
          <b>{ProgramName}</b> is one of the major Marrakech desert tours which
          we offer and the best option for travelers who have plenty of time to
          spend in Morocco and would like to break the Long distances traveling
          from Marrakech to Merzouga and to spend more time at every destination
          they will visit. The <b>{FocuseKeyOne}</b> will let you do an
          astonishing tour across the High Atlas Mountains with genuine Berber
          villages, ravines, palm trees, lush valleys, antique Kasbahs, and
          without a shadow of a doubt the Sahara Desert of Erg Chebbi where
          you&apos;ll live a camel Trekking Experience. The perfect{" "}
          <b>{FocuseKeyTwo}</b> will give you the opportunity also to visit the
          nomadic Berber families, have a cup of mint tea, and learn about their
          lifestyle under the tent, for the ones who wish to explore the true
          Morocco and hope this <b>{FocuseKeyTree}</b> allow you to enjoy you
          valuable Vocation to Morocco .
        </p>
      ),
    },
  ]);
  //REVIEWS GO HERE
  const [ReviewArray, setReviewArray] = useState([
    {
      personname: "Richard J",
      postdate: "04/02/2020",
      textreview: (
        <p className={Style.Review_content}>
          <b className={Style.review_title}>
            UR Excursions Tours in Morocco: outstanding
          </b>
          <br />
          Having traveled extensively to other countries, I find that nothing
          helps more in remote places than capable and communicative local tour
          companies and guides. UR Excursions and guide Hassan gave my wife and
          me a memorable three days in the Atlas Mountains and Sahara Desert
          regions of Morocco. Hassan picked us up at our hotel in Marrakech and
          proceeded to show us a dozen or so places — from movie settings to
          dramatic canyons to underground irrigation caves — before delivering
          us to a UR Excursions desert camp in the Sahara. Hassan, who grew up
          in a village not far from the MouHou camp and who tended camels in his
          earlier years, imparted to us from his own upbringing a nuanced
          understanding of the local Berber people, culture, history,
          architecture, agriculture, and customs— all in well spoken English and
          good humor. We cannot say enough about him. We also met Ibrahim
          Skendoul, the local entrepreneur behind the company, and we found him
          open and reassuring. The desert camp was a splendid site among the
          dunes — with large tents, comfortable beds and warm showers. Overall
          the experience has been a tremendous one thanks to the exotic and yet
          comfortable character of Morocco and the superb ambassadors at UR
          Excursions. We located UR Excursions through TripAdvisor and are
          thrilled that we did.
        </p>
      ),
    },
    {
      personname: "MJWComms",
      postdate: "09/06/2019",
      textreview: (
        <p className={Style.Review_content}>
          <b className={Style.review_title}>
            Outstanding local tour company best way to experience the Atlas
            Mountains and the desert!!{" "}
          </b>
          <br />
          Ibrahim Skendoul started Ur Excursions with first hand experience -as
          a camel guy. He then built a first class tour company. His tour guides
          like Hassan are locals and experienced They know the terrain, the
          locals and both the Atlas Mountains and The Sahara Desert and speak
          excellent English. They deliver on their promise of personalized
          service, insights into Morocco and comfortable lodgings. I was able to
          make good personal connections with both Ibrahim and Hassan which
          added greatly to our experience when considering a tour company I
          would strongly suggest using a local company and in particular Ur
          Excursions.
        </p>
      ),
    },
    {
      personname: "P.B.",
      postdate: "23/03/2018",
      textreview: (
        <p className={Style.Review_content}>
          <b className={Style.review_title}>
            Best Private Sahara Desert Tour from Marrakesh to Fes. Ask for Hammi
            as your driver/guide!
          </b>
          <br />
          After a lot of research (reaching out to 5 other companies) I settled
          on Ur Excursions because of the way they responded to my
          questions/requests and the reasonable prices. Still, I felt nervous
          going in as I would take my elderly parents with me (both are over 65)
          and I wasn&apos;t sure if the Sahara Desert trip would prove to be too
          demanding of them. As it turned out, this 3-day private Sahara tour
          from Marrakesh to Fes would be the most relaxing and most enjoyable
          part of our whole 2-week long trip in Morocco, all because we had an
          awesome driver/guide Hammi. He made everything so easy - at the
          beginning of each day, he would briefly lay out the itinerary of each
          day so we know exactly what to expect; we never felt rushed anywhere,
          and were always able to linger longer around some interesting places,
          while skipping other spots that were less interesting; he was always
          there to answer any questions we had, and made sure our interactions
          with the locals went smooth.. Because Hammi did such a great job
          taking care of everything else, we were able to just completely focus
          on enjoying the scenery and the ride, which is a luxury we didn&apos;t
          have (and greatly missed) after this tour. There was also something
          about Hammi&apos;s driving that was almost magical - I read enough
          blog reviews before the trip to know that it would take A LOT of
          driving to get to the desert and part of the roads through High Atlas
          mountain were incredibly curvy, therefore many blogs warned about
          getting car sick and advised taking motion-sickness pills, which I
          did. As it turned out, we did not need to use any (and my dad is the
          type that easily gets car sick)! Meanwhile we constantly heard people
          from other tour groups complain about getting car sick. We just felt
          really fortunate to have Hammi drive for us. My whole family had the
          best 3-day in Hammi&apos;s care and I would recommend Ur Excursions
          Co. and especially Hammi to all my friends without any hesitation!
        </p>
      ),
    },
    {
      personname: "Katheriny H.",
      postdate: "29/08/2018",
      textreview: (
        <p className={Style.Review_content}>
          <b className={Style.review_title}>
            Three day private desert tour Marrakech to Fes
          </b>
          <br />
          We had a really amazing three day tour with Ur excursions. We booked
          the private tour from Marrakech to Fes. We had a great experience
          overnight in Merzouga as well as the night we spent in the Dades
          Valley. The desert tent (we booked the standard one) was more
          luxurious than we were expecting and the camp had running water with
          toilets. Our trip wouldn’t have been possible without Mohammed our
          excellent driver who made the trip very memorable! Only one comment
          about the food- the restaurants at which we stopped for lunch along
          the way each day were overpriced, mediocre quality, and clearly exist
          only for tourists. We understand options are limited but just want
          others to be prepared. It seems that every single tour operator stops
          at these places. Our dinner in the desert and at the dades valley
          hotel were excellent. We still would absolutely recommend this company
          to anyone looking to visit the desert on their trip to Morocco as it
          was the perfect conclusion to a weeklong holiday and made our trip to
          Morocco one to remember!
        </p>
      ),
    },
    {
      personname: "akosjia",
      postdate: "07/11/2019",
      textreview: (
        <p className={Style.Review_content}>
          <b className={Style.review_title}>Ask for Mohamed and Hammi!</b>
          <br />
          We have just returned from a two night/three day trip from Marrakech
          to Merzouga with Ur excursions and have only good things to say about
          them. Most of that was down to our guide Mohamed and driver Hammi who
          were professional, great fun and really went above and beyond to make
          sure we enjoyed our visit. We will definitely use them again for our
          next Moroccan adventure. They made sure we kept to time - eg, so we
          could ride camels at sunset - but the tour never felt hurried or like
          a production line. Mohamed is clearly proud of nomad culture and was
          happy to share information about anything we were interested in, and
          to add unscheduled stops as and when. I was also very pleasantly
          surprised by the atmosphere in the desert camp. Again, it did not feel
          too touristy, even though it is clearly part of the tourist trade. The
          staff at the camp seemed to genuinely enjoy telling stories and
          playing drums in the evening. This tour was definitely the highlight
          of our trip.
        </p>
      ),
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
          imagepostion,
          image1postion,
          image2postion,
          image3postion,
          image4postion,
          image5postion,
          image6postion,
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
            BgPostion={imagepostion}
            Image1Postion={image1postion}
            Image2Postion={image2postion}
            Image3Postion={image3postion}
            Image4Postion={image4postion}
            Image5Postion={image5postion}
            Image6Postion={image6postion}
            TourName={tourname}
            Category={category}
            Days={days}
            Nights={nights}
            Price={price}
            Discount={discount}
            Tag1={FocuseKeyOne}
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
                {AllDays.map(
                  ({ dayNumer, tourId, Isfirst, blockstyle, IsLast }) => (
                    <DayTour
                      DayNumer={dayNumer}
                      TourId={tourId}
                      IsFirst={Isfirst}
                      key={tourId}
                      Blockstyle={blockstyle}
                      TourName={ProgramName}
                      FocuseOne={FocuseKeyOne}
                      FocuseTwo={FocuseKeyTwo}
                      FocuseTree={FocuseKeyTree}
                      FocuseFour={FocuseKeyFour}
                      IsLast={IsLast}
                    />
                  )
                )}
              </div>
              <Note TourName={ProgramName} />
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
                <Tags TourName={ProgramName}>
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
