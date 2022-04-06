import React from "react";
import { TiShoppingCart } from "@react-icons/all-files/ti/TiShoppingCart";

import Style from "../../../../styles/Prancepales/Header/HeaderComponents/Basket.module.css";
import Link from "next/link";

const Basket = () => {
  return (
    <Link href="/your-card">
      <div className={Style.basket_container}>
      <span className={Style.basket_items}>20</span>
        <TiShoppingCart />

      </div>
    </Link>
  );
};

export default Basket;
