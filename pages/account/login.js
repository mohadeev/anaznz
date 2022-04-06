import React, { useState, useEffect } from "react";
import axios from "axios";
import Style from "../../styles/pages/user/login.module.css";
import { useRouter } from "next/router";
import { UserLoginSuccessed } from "../../redux/UserSlice/UserSlice";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { AiOutlineEye } from "@react-icons/all-files/ai/AiOutlineEye";
import { AiOutlineEyeInvisible } from "@react-icons/all-files/ai/AiOutlineEyeInvisible";
import Link from "next/link";

const Singup = () => {
  const Router = useRouter();
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [ShowPasWord, setShowPasWord] = useState(false);
  const [Password, setPassword] = useState("");
  const [error, seterror] = useState(false);
  const isLogin = useSelector((state) => state.UserSlice.isLogin);
  const LoginData = useSelector((state) => state.UserSlice.userRudux);

  const [ShowPassWord, setShowPassWord] = useState(false);
  const [Message, setMessage] = useState("");
  const dispatch = useDispatch();

  const HandelSumite = async (e) => {
    e.preventDefault();
    setMessage("");
    e.preventDefault();
    const response = await fetch("/api/auth/user/login", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: FullName,
        email: Email,
        password: Password,
      }),
    });
    const data = await response.json();
    if (data) {
      const { user } = data;
      if (data.error) {
        setMessage(data.error);
        seterror(true);
      } else if (data.user) {
        const { user_ref } = data.user;
        Cookies.set("user_ref", user_ref);
        // dispatch(UserLoginSuccessed({ user }));
        Router.push(`/user/${user_ref}`);
      }
    } else {
      alert(`Erro : ${data}`);
    }
  };

  const ShowPasWordFunc = () => {
    setShowPasWord(!ShowPasWord);
  };
  return (
    <div className={Style.singup_container}>
      <div className={Style.div_form}>
      e
        <form className={Style.form_sing_up} onSubmit={HandelSumite}>
          <label htmlFor="email" className={Style.label_iput}>
            <input
              type="text"
              required={true}
              placeholder="Email"
              name="email"
              id="email"
              className={Style.form_sing_up_input}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label htmlFor="password" className={Style.label_iput}>
            <input
              id="password"
              name="password"
              placeholder="Password"
              className={Style.form_sing_up_input}
              type={ShowPasWord ? "text" : "password"}
              required={true}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {ShowPasWord ? (
              <span className={Style.ayes_display} onClick={ShowPasWordFunc}>
                <AiOutlineEyeInvisible />
              </span>
            ) : (
              <span className={Style.ayes_display} onClick={ShowPasWordFunc}>
                <AiOutlineEye />
              </span>
            )}
          </label>

          {error ? <p>Eroor</p> : ""}
          <p className={Style._terms}>
            By continuing, you agree to{" "}
            <Link href="/user/terms" passHref={true}>
              <span className={Style.link_terms}>Mystore&apos;s Terms</span>
            </Link>{" "}
            of Use and{" "}
            <Link href="/user/privacy-policy" passHref={true}>
              <span className={Style.link_terms}>Privacy Policy.</span>
            </Link>
          </p>
          <button onSubmit={HandelSumite}>Log in</button>
        </form>
      </div>
      <div className={Style.div_info_singup}></div>
    </div>
  );
};

export default Singup;
