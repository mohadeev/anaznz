import React from "react";
import { useSelector } from "react-redux";
import ToursCard from "../../components/ToursCard/ToursCard";
// import ToursCard from "../components/ToursCard/ToursCard";
import { useDispatch } from "react-redux";
import { removetoBasket } from "../../redux/BasketSlice/Basket";

const Index = () => {
  const AllItems = useSelector((state) => state.Basket.basket);
  const AllPrice = AllItems.map((itme) => itme.price);
  const Dispatch = useDispatch();

  const ClearStore = () => {
    Dispatch(removetoBasket());
  };
  const AllDescounts = AllItems.map((itme) => itme.descount);
  const sum = AllPrice.reduce(add, 0);
  const sumDescount = AllDescounts.reduce(add, 0);

  function add(accumulator, a) {
    return accumulator + a;
  }

  return (
    <div>
      your total is {sum} and all descount : {sumDescount}
      clear your store <button onClick={ClearStore}> Clear </button>
      {AllItems.map(({ name, image, price, url, descount }) => (
        <ToursCard
        key={Math.random()}
          Image={image}
          TourName={name}
          Price={price}
          Url={url}
          Descount={descount}
          Days={""}
          Nights={""}
        />
      ))}
    </div>
  );
};

export default Index;
