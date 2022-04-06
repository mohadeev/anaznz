import React from "react";
import { BsBellFill } from "@react-icons/all-files/bs/BsBellFill";

import Style from "../../../../styles/Prancepales/Header/HeaderComponents/WishList.module.css";
import Link from "next/link";

const Notfy = () => {
  return (
    <Link href="/your-card">
      <div className={Style.icon_container}>
        {/* <span className={Style.icon_items}>20</span> */}
        <BsBellFill />
      </div>
    </Link>
  );
};

export default Notfy;
