import React from "react";
import { BsBell } from "@react-icons/all-files/bs/BsBell";

import Style from "../../../../styles/Prancepales/Header/HeaderComponents/WishList.module.css";
import Link from "next/link";

const Notfy = () => {
  return (
    <Link href="/your-card" passHref={true}>
      <div className={Style.icon_container}>
        {/* <span className={Style.icon_items}>20</span> */}
        <BsBell />
      </div>
    </Link>
  );
};

export default Notfy;
