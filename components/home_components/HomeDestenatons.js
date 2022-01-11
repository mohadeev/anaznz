import React, { useState, useRef, useEffect } from "react";
import Style from "../../styles/home_components/HomeDestenatons.module.css";
import Link from "next/link";

const HomeDestenatons = ({ LayoutName, ArraySlice }) => {
  const TourDest = ({ DeImage, Name, Number, Url, Desc }) => {
    const Ref = useRef();
    const [IsAnimation, setIsAnimation] = useState(true);
    const [FestMove, setFestMove] = useState(true);

    const Animation = () => {
      setIsAnimation(false);
    };

    const Animation2 = () => {
      setIsAnimation(true);
    };
    const aboutnarmal = Desc.slice(0, 1000);
    const aboutSliced = Desc.slice(0, 70);
    return (
      <Link href={`${Url}`} passHref={true}>
        <div
          onMouseOver={Animation}
          onMouseLeave={Animation2}
          className={Style.container_des_card}
        >
          <div
            className={Style.div_image}
            style={{ backgroundImage: `url(${DeImage})` }}
          >
            <div className={Style.div_is_fuetered}>Always Avalibe </div>
          </div>
          <div className={Style.div_container_des}>
            <h6 className={Style.tour_tour}>{Name}</h6>
            <p className={Style.some_content}>
              {" "}
              {Desc ? aboutSliced + "..." : aboutnarmal}
            </p>
            <p>{Number}</p>
          </div>
          <div
            ref={Ref}
            className={IsAnimation ? Style.animation_div : Style.animated_div}
          ></div>
        </div>
      </Link>
    );
  };
  const [DesnationsArry, setDesnationsArry] = useState([
    {
      name: "Marrakech",
      image: "/../../../images/marrakech-images/marrakech-images-2.jpg",
      desc: `
          The Best Desert Tours in Marrakech will enable you to explore the
          beauties of Southern Morocco and discover the desert of Sahara up
          Close and Personal. Take one of our Desert Tours in Marrakech and get
          to know original Morocco.`,
      url: "/tours-and-circuits/tours-from-marrakech",
    },
    {
      name: "Fes",
      desc: `
          Fes Desert Trips is among the popular Tours you can do if you start your Travel in Morocco by Fes. In Sahara Camel Trips, we organize the top Morocco Fes Desert Trips that will allow you to explore the most authentic Morocco. Take one of our desert tours in Fes to appreciate the beautiful scenery and the charm of the Sahara desert.`,
      image: "/../../../images/fes-images/fes-images.jpg",
      url: "/tours-and-circuits/tours-from-fes",
    },
    {
      name: "Merzouga / off Road",
      desc: `
          The Merzouga Desert Activities is something you should never miss during your trip to Morocco and has to be on the TOP of your bucket list. A lot of Travelers Travel to Morocco to visit the sahara desert`,
      image:
        "/../../../images/merzouga-images/camels-images/desert-camels-merzouga-10.jpg",
      url: "//tours-and-circuits/tours-from-merzouga",
    },
    {
      name: "Casablanca",
      desc: `
          The Morocco Casablanca Tours are perfect for anyone wishing to experience beautiful imperial cities, Atlas Mountains, verdant valleys, valleys, old kasbahs and Sahara Desert. Throughout our Tours in Casablanca you will experience the very best that the Morocco has to Offer.`,
      image: "/../../../images/casablanca-images/casablanca-images.jpg",
      url: "/coming-soon",
    },
    {
      name: "Tangier",
      desc: `
          With our Tangier Itineraries you can visit the Blue City of Morocco " Chefchaouen", take in the stunning views of the mountains of the Middle and High Atlas, enjoy camel trekking, and a night in the Sahara Desert. `,
      image: "/../../../images/tangier-images/tangier-images.jpg",
      url: "/coming-soon",
    },
    {
      name: "Ouarzazate",
      desc: `
          Errachidia Deserts offers To enjoy Camel Trekking in Merzouga Desert (Erg Chebbi Dunes) in Southeast Morocco, you need 6 - 7 hours from Fes or 8 - 9 hours from Marrakech, meaning many many hours in the car. To reduce the journey time, it is also possible to take a flight from Marrakech or Casablanca`,
      image:
        "/../../../images/ait-ben-haddou-images/ourzazate-aitbenhadou3.jpg",
      url: "/coming-soon",
    },
    {
      name: "Agadir",
      desc: `
          Agadir is a major contemporary city located in the southern region of  Morocco. It is especially attractive for its location, being surrounded by the Anti atlas. The Sahara Desert along the Atlantic coast with many National Parks and secluded beaches, all of which are easily accessible.`,
      image: "/../../../images/agadir-images/agadir-images.jpg",
      url: "/coming-soon",
    },

    {
      name: "Rabat",
      desc: `
          Rabat, the country's capital, the city merits a special mention. The city has been known as the "City of Gardens" since the beginning As we have already mentioned, Rabat is a perfect combination of an ancient and a modern city and one of the most dynamic and commercial cities in the country.`,
      image: "/../../../images/rabat-images/rabat-images.webp",
      url: "/coming-soon",
    },
    {
      name: "Errachidia",
      desc: `
          Errachidia Deserts offers To enjoy Camel Trekking in Merzouga Desert (Erg Chebbi Dunes) in Southeast Morocco, you need 6 - 7 hours from Fes or 8 - 9 hours from Marrakech, meaning many many hours in the car. To reduce the journey time, it is also possible to take a flight from Marrakech or Casablanca`,
      image: "/../../../images/errachidia-images/errachidia-images.jpg",
      url: "/coming-soon",
    },
    {
      name: "Ceuta",
      desc: `
          The Best Desert Tours in Marrakech will enable you to explore the
          beauties of Southern Morocco and discover the desert of Sahara up
          Close and Personal. Take one of our Desert Tours in Marrakech and get
          to know original Morocco.`,
      image: "/../../../images/choune/choune.jpg",
      url: "/coming-soon",
    },
    {
      name: "Theme Trips to Morocco",
      desc: `
          The Best Desert Tours in Marrakech will enable you to explore the
          beauties of Southern Morocco and discover the desert of Sahara up
          Close and Personal. Take one of our Desert Tours in Marrakech and get
          to know original Morocco.`,
      image:
        "https://turismomarruecos.net/wp-content/uploads/2020/10/viaje-de-novios-a-marruecos-home.jpg.webp",
      url: "/coming-soon",
    },
    {
      name: "Events and Fistival Tours",
      desc: `
          The Best Desert Tours in Marrakech will enable you to explore the
          beauties of Southern Morocco and discover the desert of Sahara up
          Close and Personal. Take one of our Desert Tours in Marrakech and get
          to know original Morocco.`,
      image: "/../../../images/event/event.jpg",
      url: "/coming-soon",
    },
    {
      name: "Luxury Travel to Morocco",
      desc: `
          The Best Desert Tours in Marrakech will enable you to explore the
          beauties of Southern Morocco and discover the desert of Sahara up
          Close and Personal. Take one of our Desert Tours in Marrakech and get
          to know original Morocco.`,
      image:
        "https://facibeni.com/i/2019/04/moroccan-bridal-inspiration-at-palais-namaskar-101-2048x1067.jpg",
      url: "/coming-soon",
    },
    {
      name: "Shared Trips / Group Trips",
      desc: `
          The Best Desert Tours in Marrakech will enable you to explore the
          beauties of Southern Morocco and discover the desert of Sahara up
          Close and Personal. Take one of our Desert Tours in Marrakech and get
          to know original Morocco.`,
      image:
        "/../../../images/merzouga-images/desert-images/desert-images5.jpg",
      url: "/coming-soon",
    },
    {
      name: "Cooking Class / Food Tours",
      desc: `
          The Best Desert Tours in Marrakech will enable you to explore the
          beauties of Southern Morocco and discover the desert of Sahara up
          Close and Personal. Take one of our Desert Tours in Marrakech and get
          to know original Morocco.`,
      image: "/../../../images/food-images/morocco-food5.jpg",
      url: "/coming-soon",
    },
  ]);

  return (
    <div>
      <div>
        {LayoutName ? (
          <h5 className={Style.what_to_know_about_tit}>{LayoutName}</h5>
        ) : (
          <h5 className={Style.what_to_know_about_tit}>
            Our Tours Departure Point
          </h5>
        )}
      </div>
      <div className={Style.HomeDestenatons}>
        <div className={Style.blue_corner_div}></div>
        <div className={Style.div_items_button}>
          <div className={Style.div_dest_items}>
            {DesnationsArry.slice(
              0,
              ArraySlice ? ArraySlice : DesnationsArry.length
            ).map(({ name, image, url, desc }) => (
              <>
                <TourDest DeImage={image} Name={name} Url={url} Desc={desc} />
              </>
            ))}{" "}
          </div>{" "}
          {LayoutName ? (
            ""
          ) : (
            <Link href="/tours-and-circuits" passHref={true}>
              <button className={Style.button_home_explore}>EXPLORE NOW</button>
            </Link>
          )}
        </div>
        <div className={Style.blue_corner_div}></div>
      </div>
    </div>
  );
};

export default HomeDestenatons;

export const CardName = ({ DeImage, Name, About, Massion }) => {
  const Ref = useRef();
  const [IsAnimation, setIsAnimation] = useState(true);
  const [FestMove, setFestMove] = useState(true);
  const BakcChange = useRef();
  const aboutnarmal = About.slice(0, 1000);
  const aboutSliced = About.slice(0, 70);
  const [SteledDiv, setSteledDiv] = useState({});

  const Animation = () => {
    setIsAnimation(false);
    setFestMove(false);
    setSteledDiv({
      transition: "1.5s",
      bottom: "100px",
      backgroundColor: "#fff",
    });
    BakcChange.current.style.backgroundColor = "#071c55be";
  };
  const Animation2 = () => {
    setSteledDiv({
      transition: "1.5s",
    });
    setIsAnimation(true);
    setFestMove(true);
    BakcChange.current.style.backgroundColor = "#071c5544";
  };
  return (
    <div
      // style={{width: "100%" }}
      onMouseOver={Animation}
      onMouseLeave={Animation2}
      className={Style.container_des_card2}
    >
      <div
        className={Style.div_image}
         style={{ backgroundImage: `url(${DeImage})`,height: "350px"}}
      >
        <div ref={BakcChange} className={Style.ovely}></div>
      </div>
      <div style={SteledDiv} className={Style.div_person_des}>
        <h6 className={Style.tour_tour}>{Name}</h6>
        <p className={Style.mastion}>{Massion}</p>
        <p className={Style.some_content_per}>
          {" "}
          {FestMove ? aboutSliced + "..." : aboutnarmal}
        </p>
      </div>{" "}
      <div
        ref={Ref}
        className={IsAnimation ? Style.animation_div : Style.animated_div}
      ></div>
    </div>
  );
};
