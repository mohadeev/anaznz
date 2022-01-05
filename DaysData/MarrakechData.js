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
            FlexBase={"50%"}
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
