import React from "react";
import { BsHeartFill } from "@react-icons/all-files/bs/BsHeartFill";
import Style from "../../../../styles/Prancepales/Header/HeaderComponents/WishList.module.css";
import Link from "next/link";

const WishList = () => {
  return (
    <Link href="/your-card" passHref={true}>
      <div className={Style.icon_container}>
        {/* <span className={Style.icon_items}>20</span> */}
        <BsHeartFill />
      </div>
    </Link>
  );
};

export default WishList;
