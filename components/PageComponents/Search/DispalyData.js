import React, { useState, useEffect, useRef } from "react";
import Style from "../../../styles/pages/Search/components/colordata.module.css";
import { useRouter } from "next/router";

const DispalyData = ({ ColorName, ItemColor, Key }) => {
  const Ref = useRef();
  const { asPath, pathname } = useRouter();
  const Router = useRouter();

  const [dataurl, setdataurl] = useState();
  const [Path, setPath] = useState();
  const [Location, setLocation] = useState();

  useEffect(() => {
    setPath(window.location.href);
    setLocation(window.location.hostname);
  }, [asPath]);
  const [Display, setDisplay] = useState(false);

  useEffect(() => {
    Ref.current.checked = false;
    let PathVar = Path;
    let Params = new URL(window.location.href).searchParams;
    const color = Params.get("color");
    if (color) {
      if (color === ColorName) {
        Ref.current.checked = true;
      } else {
        console.log(ColorName + color);
      }
    }
  }, []);

  useEffect(() => {
    Ref.current.checked = false;
    let PathVar = Path;
    let Params = new URL(window.location.href).searchParams;
    const color = Params.get("color");
    if (color) {
      if (color === ColorName) {
        Ref.current.checked = true;
      } else {
        console.log(ColorName + color);
      }
    }
  }, [asPath]);
  const HandelCHange = (data) => {
    let PathVar = Path;
    let Params = new URL(Path).searchParams;
    const color = Params.get("color");
    if (Path.includes(`&color=`)) {
      if (Path.includes(`&color=${data}`)) {
        let NewUrl = PathVar.replace("http://localhost:3000", "");
        let secondUrl = NewUrl.replace(`&color=${data}`, "");
        Router.push(secondUrl);
      } else if (!Path.includes(`&color=${data}`) && Path.includes(`&color=`)) {
        let NewUrl = PathVar.replace("http://localhost:3000", "");
        let secondUrl = NewUrl.replace(`&color=${color}`, "");
        Router.push(secondUrl + `&color=${data}`);
      }
    } else {
      Router.push(asPath + `&color=${data}`);
    }
  };

  return (
    <label key={Key} className={Style.container}>
      <div className={Style.div_input_color}>
        <input
          ref={Ref}
          type="checkbox"
          id="input"
          name="input"
          className={Style.checkbox}
          onClick={() => HandelCHange(ColorName)}
        />
      </div>

      <div htmlFor="input" className={Style.container_2}>
        <div
          style={{ backgroundColor: `${ItemColor}` }}
          className={Style.div_of_color}
        ></div>
        <span className={Style.p}>{ColorName}</span>
      </div>
      <span className={Style.span}>{Key}</span>
    </label>
  );
};

export default DispalyData;
