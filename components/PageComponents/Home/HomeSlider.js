import React, { useState, useEffect, useRef } from "react";
import Style from "../../../styles/pages/Home/HomeSlider.module.css";
const HomeSlider = () => {
  const [Array, setArray] = useState([
    "/images/61jovjd+f9L._SX3000_.jpg",
    "/images/61DUO0NqyyL._SX3000_.jpg",
    "/images/61DUO0NqyyL._SX3000_.jpg",
    "/images/711Y9Al9RNL._SX3000_.jpg",
  ]);
  const [i, seti] = useState(0);
  const [Bg, setBg] = useState(Array[i]);
  const Ref = useRef();
  
  useEffect(() => {
    let CahngFuncton = () => {
      const changeImage = () => {
        if (i >= Array.length - 1) {
          setTimeout(() => {
            seti(0);
            setBg(Array[i]);
          }, 2500);
        } else if (i >= 0) {
          setTimeout(() => {
            seti(i + 1);
            setBg(Array[i]);
          }, 2500);
        }
      };
      setInterval(changeImage(), 1000);
    };
    CahngFuncton();
  }, [i, Array]);
  return (
    <div className={Style.div_container}>
      <div
        ref={Ref}
        className={Style.div_slider}
        style={{
          backgroundImage: `url(${Bg})`,
        }}
      ></div>
      {/* <button onClick={CahngFuncton}>Change image</button> */}
    </div>
  );
};

export default HomeSlider;
