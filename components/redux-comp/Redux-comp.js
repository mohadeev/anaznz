import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addtoBasket } from "../../redux/BasketSlice/Basket";

const ReduxComp = ({ TourNameDis, ImageTour, PriceTour, Descount }) => {
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
      })
    );
  };
  return (
    <div>
      <button onClick={Dispt}>Add to Basket</button>
    </div>
  );
};

export default ReduxComp;
