import React from "react";
import Header from "../components/Header/Header";
import Style from "../styles/Home.module.css";
import Fmmf from "./tours-and-circuits/tours-from-marrakech/fmmf";

const index = ({ datas }) => {
  return (
    <>
      <head>
        <title>Ur Excuersions || Home</title>
      </head>
      <Fmmf />
      <h2 className={Style.h2}>THIS IS THE HOME</h2>
    </>
  );
};

export default index;
