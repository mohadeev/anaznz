import {useEffect,useState} from 'react'
import HomeSlider from "../components/PageComponents/Home/HomeSlider";
import Link from "next/link";
import Style from "../styles/home/home.module.css"

const Index = () => {
  // useEffect(async () => {
  //     await fetch("/api/test").then(async (doc) => {
  //     const newDoc = await doc.json();
  //     console.log(newDoc + "hhhh");
  //   });
  // });
  return (
    <div className={Style.home_contsiner}>
      <HomeSlider />
    </div>
  );
};
export default Index;
