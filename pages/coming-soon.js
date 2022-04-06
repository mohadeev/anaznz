import React, { useRef, useState, useEffect } from "react";
import Style from "../styles/Layout-css/Layout.module.css";
import Link from "next/link";

const Index = () => {
  const [Sckroll, setSckroll] = useState(null);
  const [Window, setWindow] = useState("");

  const Reeef = useRef();
  const [url, seturl] = useState("");
  //   useEffect(() => {
  //     window.onselectionchange = setTimeout(() => {
  //       Reeef.current.style.display = "none";
  //     }, 500);
  //   }, [url]);

  
  return (
    <div ref={Reeef} className={Style.anamimation}>
      Coming soon ....
      <Link href="/" passHref={true}>
        <button className={Style.anamimationbbbb}> Home </button>
      </Link>
      <div className={Style.sun}>
        <div className={Style.dot}></div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
    </div>
  );
};

export default Index;
