import React, { useState } from "react";
import { AiFillShopping } from "@react-icons/all-files/ai/AiFillShopping";
import { useSelector } from "react-redux";
import Link from "next/link";

const Basket = () => {
  const BasketLenght = useSelector((state) => state.Basket.basket);
  const [Stylee, setStylee] = useState({
    color: "#fff",
    fontSize: "30px",
    cursor: "pointer",
  });
  const [Stylee1, setStylee1] = useState({
    color: "#fff",
    fontSize: "15px",
    border: "1px solid  #F3941E",
    backgroundColor: " #F3941E",
    width: "25px",
    height: "25px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Playfair Display",
   
  });
  return (
    <Link href="/your-card" passHref={true}>
      <div style={Stylee}>
        <AiFillShopping />
        <span style={Stylee1}>{BasketLenght.length}</span>
      </div>
    </Link>
  );
};

export default Basket;
