import React, { useEffect, useState, useRef } from "react";
import Style from "../../../../styles/Prancepales/Header/HeaderSellect/HeaderSellect.module.css";
import { AllDepatment } from "../../../../backend/AllDepatment";
import { HeaderMenuSellect } from "../../../../redux/HeaderSlice/HeadeMenu";
import { useDispatch } from "react-redux";

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(HeaderMenuSellect({ value: Ref.current.value }));
  });
  const Ref = useRef();
  // const RefValue = ;
  const [RefValue, setRefValue] = useState();
  const [Lengh, setLengh] = useState(0);

  const HandelChange = () => {
    dispatch(HeaderMenuSellect({ value: Ref.current.value }));
  };
  // const Lengh = Ref.current.value;
  // console.log(Lengh.length);
  // const Totallengh = Lengh *1
  
  useEffect(() => {
    setRefValue(Ref.current.value.length);

    const ArryLength = Ref.current.value.split("");
    let Lengthy = 0;
    ArryLength.map((item) => {
      if (RefValue <= 6) {
        console.log(RefValue)
        Lengthy += 15;
      } else if (RefValue <= 10) {
        Lengthy += 12;
      } else if (RefValue <= 15) {
        Lengthy += 10;
      } else {
        Lengthy += 9;
      }
      setLengh(Lengthy);
    });
    // window.addEventListener("change", (event) => alert(event.Shortkey));
  }, [HandelChange]);
  return (
    <select
      style={{ width: `${Lengh}px` }}
      onChange={HandelChange}
      ref={Ref}
      className={Style.button_catgory}
    >
      {AllDepatment.map((item, index) => (
        <option key={index}>{item.name}</option>
      ))}
    </select>
  );
};

export default Index;
