import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Style from "../../../../styles/Prancepales/Header/HeaderComponents/headersingin.module.css";
import { BsFillPersonFill } from "@react-icons/all-files/bs/BsFillPersonFill";

import { BsFiles } from "@react-icons/all-files/bs/BsFiles";

const HeaderSingin = () => {
  const router = useRouter();
  const HandleLogin = () => {
    router.push("/account/login");
  };
  const HandelSingup = () => {
    router.push("/account/singup");
  };
  const input_Search = useRef();
  const Ref2 = useRef();
  const [ShowDiv, setShowDiv] = useState(false);
  useEffect(
    (e) => {
      const HandelClick = (e) => {
        if (input_Search && input_Search.current) {
          const refany = input_Search.current;
          if (refany.contains(e.target)) {
            // setShowDiv(true);
          } else if (Ref2 && Ref2.current) {
            const refany = Ref2.current;
            if (!refany.contains(e.target)) {
              setShowDiv(false);
            }
          }
        }
      };
      window.addEventListener("click", HandelClick);
    },
    [ShowDiv]
  );
  const Handddd =()=>{
      setShowDiv(!ShowDiv)  
            // alert("haha" + ShowDiv)

  }
  return (
    <div className={Style.container} >
      <div ref={input_Search} className={Style.div_items} onClick={Handddd}>
        {/* <span className={Style.icon_of_profile}><BsFillPersonFill /></span> */}
        <p className={Style.singin}>
          Sign In <br />
          <b>Account</b>{" "}
        </p>
      </div>
      {ShowDiv && (
        <div ref={Ref2} className={Style.div_hidden}>
          <div className={Style.div}>
            <button
              style={{ backgroundColor: "#F3941E" }}
              onClick={HandleLogin}
              className={Style.user_action_button}
            >
              Log in
            </button>
          </div>
          <div className={Style.div}>
            <button
              style={{ backgroundColor: "#f8f8f8", color: "#0f1111" }}
              onClick={HandelSingup}
              className={Style.user_action_button}
            >
              Sing up
            </button>
          </div>
          <div className={Style.div_purchase}>
            <BsFiles />
            <p className={Style.p}>purchase history </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderSingin;
