import React, { useEffect, useState, useRef } from "react";
import Style from "../../../../styles/Prancepales/Header/HeaderComponents/HeaderUserInfo.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Basket from "./Basket";
import WishList from "./WishList";
import Notfy from "./Notfy";
import Userinfo from "./Userinfo";
import ProfileDetailes from "./ProfileDetailes";
import Currency from "./Currency";
import HeaderSingin from "./HeaderSingin";

const HeaderUserInfo = () => {
  const UserProfile = useSelector((state) => state.UserSlice.userRudux);
  const UserLogIn = useSelector((state) => state.UserSlice.isLogin);
  const dispatch = useDispatch();
  const router = useRouter();
  const [ShowDiv, setShowDiv] = useState(false);
  const [Window, setWindow] = useState({});
  const input_Search = useRef();
  const Ref2 = useRef();

  useEffect(
    (e) => {
      const HandelClick = (e) => {
        if (input_Search && input_Search.current) {
          const refany = input_Search.current;
          if (refany.contains(e.target)) {
            setShowDiv(!ShowDiv);
          } else if (Ref2 && Ref2.current) {
            const refany = Ref2.current;
            if (!refany.contains(e.target)) {
              setShowDiv(false);
            }
          }
        }
      };
      window.addEventListener("click", HandelClick);
      // return window.removeEventListener("click", HandelClick)
    },
    [ShowDiv]
  );
  const Leaveing = () => {
    setTimeout(() => {
      setShowDiv(false);
    }, 100);
  };
  const HandleLogin = () => {
    router.push("/account/login");
  };
  const HandelSingup = () => {
    router.push("/account/singup");
  };

  return (
    <div className={Style.container_user_info}>
      {(() => {
        if (!UserLogIn) {
          return (
            <div className={Style.user_info_header}>
              <div className={Style.div_login}>
                <HeaderSingin />
              </div>
              <Currency />
              <Notfy />
              <WishList />
              <Basket />
            </div>
          );
        } else if (UserLogIn) {
          return (
            <div className={Style.user_info_header}>
              <Currency />
              <WishList />
              <Notfy />
              <div
                onClick={() => {
                  setShowDiv(!ShowDiv);
                }}
                ref={input_Search}
              >
                <Userinfo />
              </div>
              <Basket />
              {ShowDiv && (
                <div
                  className={Style.new_guest}
                  onMouseLeave={Leaveing}
                  onClick={Leaveing}
                  ref={Ref2}
                >
                  <ProfileDetailes />
                </div>
              )}
            </div>
          );
        }
      })()}
    </div>
  );
};

export default HeaderUserInfo;
