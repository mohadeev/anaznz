import React, { useEffect, useState } from "react";
import Style from "../../styles/Products/UserStoreProduct/UserStoreProduct.module.css";
import Link from "next/link";
import { BsStarFill } from "@react-icons/all-files/bs/BsStarFill";
import { BsStar } from "@react-icons/all-files/bs/BsStar";
import { BsStarHalf } from "@react-icons/all-files/bs/BsStarHalf";

import { BsChevronDown } from "@react-icons/all-files/bs/BsChevronDown";
// BsStar;
const UserStoreProduct = ({ Id, Url, Price, Name, Rate, Image, Desc }) => {
  const [isIn, setisIn] = useState(false);
  const { rate } = Rate;
  const { count } = Rate;
  const [Rated  , setRated ] = useState(parseInt(rate, 10))
  const rating = Rated - 5;
  const rray = rating.toString();
  const ArrayOfRate = rray.slice(1, 2);
  const [ParseInt , setParseInt] = useState(0);

  useEffect(() => {
    // const DATAATA=()=>{
    setParseInt(parseInt(ArrayOfRate));
    function number_test(n) {
      let result = n - Math.floor(n); //!== 0;
      if (result) {
        console.log(`${result}Number has a decimal place.`);
        setParseInt(ParseInt - 1);
        setisIn(true);
      } else if (result) {
        console.log(`${result}Number has a decimal place.`);
        setParseInt(ParseInt - 1);
        setisIn(true);
      } else {
        console.log("It is a whole number.");
        setisIn(false);
      }
    }
    number_test(rate);

    // DATAATA()
  }, [ArrayOfRate, ParseInt, rate]);

  return (
    <div id={Id} className={Style.container}>
      <div
        style={{ backgroundImage: `url(${Image})` }}
        className={Style.div_products_image}
      ></div>
      <div className={Style.div_info}>
        <b className={Style.name}>
          {Name
            ? Name
            : "REVLON One-Step Volumizer Original 1.0 Hair Dryer and Hot Air Brush,Black"}
        </b>

        <p className={Style.desc}>
          <b>Decreption: </b> {Desc && Desc.slice(0, 120)}
          ....
        </p>
        <p className={Style.price}>
          <span className={Style.price_price}> {Price} $</span>
          <span className={Style.rating}>
            {Array(Rated).fill().map(( i , index)=>(<BsStarFill key={index}/>))}
            {isIn && <BsStarHalf />}
            {/* {Rated < 5 ? Array(1).fill().map((i , index)=>(<BsStar key={index}/>)) : ""} */}
            <small className={Style.small_review}>
              <BsChevronDown /> ( {count}.00 )
            </small>
          </span>
        </p>
        <div className={Style.div_buttons}>
          <button className={Style.button}>Edite</button>{" "}
          <button
            style={{ backgroundColor: "#071c34" }}
            className={Style.button}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserStoreProduct;
