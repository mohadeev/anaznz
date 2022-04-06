import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addtoBasket } from "../../../redux/BasketSlice/Basket";
import Style from "../../styles/AbouComponent/someText.module.css";

const ReduxComp = ({ TourNameDis, ImageTour, PriceTour, Descount, Days , id}) => {
  const [Url, setUrl] = useState("");
  useEffect(() => {
    setUrl(window.location.href);
  });
  const dispatch = useDispatch();
  const Dispt = () => {
    dispatch(
      addtoBasket({
        name: TourNameDis,
        image: ImageTour,
        price: PriceTour,
        url: Url,
        descount: Descount,
        days: Days,
        id : id
      })
    );
  };
  return (
    <div>
      <button className={Style.button_home_explore} onClick={Dispt}>
        Add this Tour your Basket
      </button>
    </div>
  );
};

export default ReduxComp;
