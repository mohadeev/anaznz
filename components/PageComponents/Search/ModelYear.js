import React, { useState, useRef ,  useEffect } from "react";
import Style from "../../../styles/pages/Search/components/modelyear.module.css";
import SearchByCategories from "./SearchByCategories";
import { useRouter } from "next/router";

const ModelYear = () => {
  const [AllYears, setAllYears] = useState([
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
    "2014",
    "2013",
    "2011",
    "2010",
  ]);
  const [Display, setDisplay] = useState(true);

  const HandleClick = () => setDisplay(!Display);

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

  // useEffect(() => {
  //   Ref.current.checked = false;
  //   let PathVar = Path;
  //   let Params = new URL(window.location.href).searchParams;
  //   const color = Params.get("color");
  //   if (color === ColorName) {
  //     Ref.current.checked = true;
  //   }
  // }, [Path]);
  const HandelCHange = (data) => {
    let PathVar = Path;
    let Params = new URL(Path).searchParams;
    const year = Params.get("year");
    if (Path.includes(`&year=`)) {
      if (Path.includes(`&year=${data}`)) {
        let NewUrl = PathVar.replace("http://localhost:3000", "");
        let secondUrl = NewUrl.replace(`&year=${data}`, "");
        Router.push(secondUrl);
      } else if (!Path.includes(`&year=${data}`) && Path.includes(`&year=`)) {
        let NewUrl = PathVar.replace("http://localhost:3000", "");
        let secondUrl = NewUrl.replace(`&year=${year}`, "");
        Router.push(secondUrl + `&year=${data}`);
      }
    } else {
      Router.push(asPath + `&year=${data}`);
    }
  };

  return (
    <div className={Style.container}>
      <div onClick={HandleClick}>
        <SearchByCategories Category={"Model Year"} />
      </div>
      {Display && (
        <div className={Style.input_conainer}>
          {AllYears.map((data, index) => (
            <label className={Style.lable} htmlFor={data} key={index}>
              <input
                id={data}
                className={Style.input}
                onChange={() => HandelCHange(data)}
                type="checkbox"
              />
              <span className={Style.span}>{data}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};
export default ModelYear;
