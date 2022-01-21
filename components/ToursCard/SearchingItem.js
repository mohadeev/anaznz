import Link from "next/link";
import React, { useState } from "react";

const SearchingItem = ({ Image, Name, Url }) => {
  const [Itme, setItme] = useState({
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    margin: "10px 0",
  });

  const [itmeImage, setitmeImage] = useState({
    height: "50px",
    width: "50px",
    backgroundImage: `url(${Image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "5px",
    cursor: "pointer",
    margin: " 0 10px ",
  });
  const [ItmeName, setItmeName] = useState({
    color: "#071c55",
    fontFamily: "poppins",
    fontSize: "12px",
    cursor: "pointer",
  });
  return (
    <Link href={`${Url ? Url : "#"}`} passHref={true}>
      <div style={Itme}>
        <div style={itmeImage}></div>
        <h4 style={ItmeName}>{Name}</h4>
      </div>
    </Link>
  );
};

export default SearchingItem;
