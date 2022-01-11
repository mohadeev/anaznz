import { useState } from "react";
import ToursCard from "../components/ToursCard/ToursCard";

export const MarrakechData = ({ WhatId, FlexBase, ByWhat, SeletElennt }) => {
  const [marrakechArray, setmarrakechArray] = useState([
    {
      ID: "MARR",
      id: "3-MARR-DES-MER-MARR",
      name: "3 Days From Marrakech Merzouga Desert ",
      image:
        "/../../../images/merzouga-images/camels-images/desert-camels-merzouga-3.jpg",
      url: "/tours-and-circuits/tours-from-marrakech/3-days-from-marrakech-to-merzouga",
      price: "200",
      descount: "20",
      days: 3,
      nights: 2,
      from: "Marrakech",
      popular: true,
      desc: "3 Days Morocco Tour From Marrakech to Merzouga gives you a magnificent oportunity to enjoy the very best of Morocco's top attractions,",
    },
    {
      ID: "MARR",
      id: "3-MARR-DES-MER-FES",
      name: "3 Days Tour from Marrakech Via Merzouga to Fes",
      image:
        "/../../../images/merzouga-images/desert-images/desert-images1.jpg",
      url: "/tours-and-circuits/tours-from-marrakech/3-days-from-marrakech-via-merzougato-fes",
      price: "200",
      descount: "20",
      days: 3,
      nights: 2,
      from: "Marrakech",
      popular: true,
      desc: "The 3 Days Tour from Marrakech Via Merzouga to Fes gives you the chance to experience southern Morocco's beauty, like the magnificent high Atlas Mountains,",
    },
    ,
    {
      ID: "MARR",
      id: "4-MARR-DES-MER-MARR",
      name: "4 Days Round Tour from Marrakech Via Merzouga Sahara Desert",
      image: "/../../../images/merzouga-images/camp-mages/camp-images-3.jpg",
      url: "/tours-and-circuits/tours-from-marrakech/4-days-from-marrakech-to-merzouga",
      price: "200",
      descount: "20",
      days: 3,
      nights: 2,
      from: "Marrakech",
      popular: true,
      desc: "The 4 Days Round Tour from Marrakech Via Merzouga Sahara Desert is among the most extensive Marrakech Desert Tours that come with us. It is the best option available for people",
    },

    {
      ID: "MARR",
      id: "4-MARR-DES-MER-FES",
      name: "4 Day Merzouga Desert Trip Marrakech to Fes.",
      image:
        "/../../../images/merzouga-images/camels-images/desert-camels-merzouga-7.jpg",
      url: "/tours-and-circuits/tours-from-marrakech/4-days-from-marrakech-via-merzouga-to-fes",
      price: "200",
      descount: "20",
      days: 3,
      nights: 2,
      from: "Marrakech",
      popular: true,
      desc: "The 4 Day Merzouga Desert Trip Marrakech to Fes. is among the most extensive Marrakech Desert Tours that come with us. It is the best option available for people who have",
    },
    {
      ID: "MARR",
      id: "5-MARR-DES-MER-MARR",
      name: "5 Days Round Tour from Marrakech Via Merzouga Sahara Desert",
      image:
        "/../../../images/merzouga-images/camels-images/desert-camels-merzouga-10.jpg",
      url: "/tours-and-circuits/tours-from-marrakech/5-days-from-marrakech-to-merzouga",
      price: "250",
      descount: "30",
      days: 5,
      nights: 4,
      from: "Marrakech",
      popular: true,
      desc: "5 Days Round Tour from Marrakech Via Merzouga Sahara Desert is one of the major Marrakech desert tours which we offer and the best option for travelers who have plenty of time to spend in Morocco and would like to break the",
    },
    {
      ID: "MARR",
      id: "5-MARR-DES-MER-FES",
      name: "5 Days Tour from Marrakech Via Merzouga Desert to Fes",
      image:
        "/../../../images/merzouga-images/desert-images/desert-images7.jpg",
      url: "/tours-and-circuits/tours-from-marrakech/5-days-from-marrakech-via-merzouga-to-fes",
      price: "250",
      descount: "30",
      days: 5,
      nights: 4,
      from: "Marrakech",
      popular: true,
      desc: "5 Days Round Tour from Marrakech Via Merzouga Sahara Desert is one of the major Marrakech desert tours which we offer and the best option for travelers who have plenty of time to spend in Morocco and would like to break the",
    },
    {
      ID: "MARR",
      id: "6-MARR-DES-MER-MARR",
      name: "6 Days Round Tour from Marrakech Via Merzouga Sahara Desert",
      image:
        "/../../../images/merzouga-images/desert-images/desert-images10.jpg",
      url: "/tours-and-circuits/tours-from-marrakech/6-days-from-marrakech-to-merzouga",
      price: "280",
      descount: "35",
      days: 6,
      nights: 4,
      from: "Marrakech",
      popular: true,
      desc: "",
    },
    {
      ID: "MARR",
      id: "6-MARR-DES-MER-FES",
      name: "6 Days Tour From Marrakech Via  Sahara Desert to Fes",
      image: "/../../../images/fes-images/fes-images3.webp",
      url: "/tours-and-circuits/tours-from-marrakech/6-days-from-marrakech-via-merzouga-to-fes",
      price: "250",
      descount: "30",
      days: 5,
      nights: 4,
      from: "Marrakech",
      popular: false,
      desc: "6 Days Tour from Marrakech Via Merzouga Desert to Fes is one of the major Marrakech desert tours which we offer and the best option for travelers who have plenty of time to spend in Morocco and would like to break the Long",
    },
    {
      ID: "MARR",
      id: "7-MARR-DES-MER-MARR",
      name: "7 Days Round Tour from Marrakech Via Merzouga Sahara Desert",
      image:
        "/../../../images/merzouga-images/desert-images/desert-images10.jpg",
      url: "/tours-and-circuits/tours-from-marrakech/7-days-from-marrakech-to-merzouga",
      price: "280",
      descount: "35",
      days: 7,
      nights: 6,
      from: "Marrakech",
      popular: false,
      desc: "6 Days Round Tour from Marrakech Via Merzouga Sahara Desert is one of the major Marrakech desert tours which we offer and the best option for travelers who have plenty of time to spend in Morocco and would like to break the" , },
    //--------------------------------Marrakech end --------------------------------//
    //----------------------------------------------------------------------------//

    //----------------------------------------------------------------------------//
    //--------------------------------Fes begin--------------------------------//
    //--------------------------------Fes begin--------------------------------//
    //--------------------------------Fes begin--------------------------------//
    //----------------------------------------------------------------------------//
    {
      ID: "FES",
      id: "3-FES-MER-FES",
      name: " 3 Days Tour from Fes to Merzouga Desert ",
      image:
        "/../../../images/merzouga-images/camels-images/desert-camels-merzouga-11.jpg",
      url: "/tours-and-circuits/tours-from-fes/3-days-from-fes-to-merzouga",
      price: "280",
      descount: "35",
      days: 7,
      nights: 6,
      from: "Fes",
      popular: true,
      desc: "",
    },
    {
      ID: "FES",
      id: "3-FES-DES-MER-MARR",
      name: "3 Days Tour from Fes via Merzouga to Marrakech",
      image: "/../../../images/altas-images/altas-images-10.jpg",
      url: "/tours-and-circuits/tours-from-fes/3-days-from-fes-via-merzouga-to-marrakech",
      price: "280",
      descount: "35",
      days: 3,
      nights: 2,
      from: "Fes",
      popular: true,
      desc: "",
    },
    {
      ID: "FES",
      id: "7-MARR-DES-MER-MARR",
      name: " 4 Days Tour from Fes to Merzouga Desert ",
      image:
        "/../../../images/merzouga-images/camels-images/desert-camels-merzouga-16.jpg",
      url: "/tours-and-circuits/tours-from-fes/4-days-from-fes-to-merzouga",
      price: "280",
      descount: "35",
      days: 4,
      nights: 3,
      from: "Marrakech",
      popular: true,
      desc: "",
    },
    {
      ID: "FES",
      id: "7-MARR-DES-MER-MARR",
      name: " 4 Days Tour from Fes to Marrakech via Merzouga Desert ",
      image:
        "/../../../images/merzouga-images/camels-images/desert-camels-merzouga-19.jpg",
      url: "/tours-and-circuits/tours-from-fes/4-days-from-from-via-merzouga-to-marrakech",
      price: "280",
      descount: "35",
      days: 4,
      nights: 3,
      from: "Marrakech",
      popular: true,
      desc: "",
    },
    {
      ID: "FES",
      id: "7-MARR-DES-MER-MARR",
      name: " 5 Days Tour from Fes to Sahara Deser",
      image: "/../../../images/fes-images/fes-images4.jpg",
      url: "/tours-and-circuits/tours-from-fes/5-days-from-fes-to-merzouga",
      price: "280",
      descount: "35",
      days: 5,
      nights: 4,
      from: "Marrakech",
      popular: true,
      desc: "",
    },
    {
      ID: "FES",
      id: "7-MARR-DES-MER-MARR",
      name: " 5 Day Merzouga Desert Trip Marrakech to Fes. ",
      image:
        "/../../../images/merzouga-images/camels-images/desert-camels-merzouga-23.jpg",
      url: "/tours-and-circuits/tours-from-fes/5-days-from-from-via-merzouga-to-marrakech",
      price: "280",
      descount: "35",
      days: 5,
      nights: 4,
      from: "Marrakech",
      popular: true,
      desc: "",
    },
    {
      ID: "MER",
      id: "7-MARR-DES-MER-MARR",
      name: "3 Days From Merzouga to Ouarzazate via Zagroura",
      image:
        "/../../../images/merzouga-images/desert-images/desert-images21.jpg",
      url: "/coming-soon",
      price: "280",
      descount: "35",
      days: 5,
      nights: 4,
      from: "Marrakech",
      popular: true,
      desc: "",
    },
  ]);

  const ById = marrakechArray.filter((item) => item.id === WhatId);
  const BYID = marrakechArray.filter((item) => item.ID === WhatId);

  return (
    <>
      {(SeletElennt ? BYID : ById).map(
        ({
          name,
          image,
          url,
          desc,
          price,
          descount,
          nights,
          days,
          from,
          popular,
        }) => (
          <ToursCard
            Popular={popular}
            Desc={desc.slice(0, 70) + "..."}
            Image={image}
            TourName={name}
            Days={days}
            Url={url}
            Price={price}
            Descount={descount}
          />
        )
      )}
    </>
  );
};
