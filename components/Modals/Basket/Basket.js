import React, { useState } from "react";
import { AiFillShopping } from "@react-icons/all-files/ai/AiFillShopping";
import { useSelector } from "react-redux";
import Style from '../../styles/redux/Basket/Basket.module.css'
import Link from "next/link";

const Basket = () => {
  const BasketLenght = useSelector((state) => state.Basket.basket);
  const [Stylee, setStylee] = useState({
    color: "#fff",
    fontSize: "30px",
    cursor: "pointer",
  });
  const [Stylee1, setStylee1] = useState({
    
   
  });
  return (
    <Link href="/your-card" passHref={true}>
      <div className={Style.basket_container}>
        <AiFillShopping />
        <span className={Style.basket_items}>{BasketLenght.length}</span>
      </div>
    </Link>
  );
};

export default Basket;
