import React, { useState } from "react";
import Style from "../../styles/home_components/FamouseDest.module.css";
const FamouseDest = () => {
  const [PpularTours, setPpularTours] = useState([
    { id: "3-MARR-DES-MER-MARR" },
    { id: "3-MARR-DES-MER-FES" },
    { id: "4-MARR-DES-MER-MARR" },
    { id: "4-MARR-DES-MER-FES" },
  ]);

  return (
    <div className={Style.container_destnations}>
      {/* {PpularTours.map(({ id, flexBase }) => (
        <MarrakechData WhatId={id} FlexBase={flexBase} key={Math.random()} />
      ))} */}
    </div>
  );
};

export default FamouseDest;
