import Link from "next/link";
import React from "react";
import Style from "../../../../styles/Prancepales/Header/HeaderComponents/Logo.module.css";

const Logo = () => {
  return (
    <Link href="/" passHref={true}>
      <div className={Style.logo_container}>
        <div className={Style.logo_image}></div>{" "}
        <p className={Style.logo_text}> MyStore</p>
      </div>
    </Link>
  );
};

export default Logo;
