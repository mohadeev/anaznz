import React, { useState } from "react";
import Style from "../../styles/pages/user/singup.module.css";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { AiOutlineEye } from "@react-icons/all-files/ai/AiOutlineEye";
import { AiOutlineEyeInvisible } from "@react-icons/all-files/ai/AiOutlineEyeInvisible";
import Link from "next/link";


const singup = ({ token }) => {
  const router = useRouter();
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ShowPasWord, setShowPasWord] = useState(false);
  const [ShowPasWord1, setShowPasWord1] = useState(false);

  const [error, seterror] = useState(false);
  const [Message, setMessage] = useState("");
  const HandelSumite = async (e) => {
    setMessage("");
    e.preventDefault();
    const response = await fetch("/api/auth/user/singup", {
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
    const { user } = data;
    if (data) {
      if (data.Message === "Sorry this Email is Exist") {
        setMessage(data.Message);
        seterror(true);
      } else if (user) {
        Cookies.set("user_ref", user.user_ref);
        router.push(`/user/${user.user_ref}`);
        // Cookies.set("token", user);
      }
    } else {
      alert(`Erro : ${data}`);
    }
  };
  const ShowPasWordFunc = () => {
    setShowPasWord(!ShowPasWord);
  };
  const ShowPasWordFunc1 = () => {
    setShowPasWord1(!ShowPasWord1);
  };

  return (
    <div className={Style.singup_container}>
      <div className={Style.div_form}>
        <form className={Style.form_sing_up} onSubmit={HandelSumite}>
          {Message}
          <label className={Style.label_iput}>
            <input
              className={Style.form_sing_up_input}
              required={true}
              placeholder="Username"
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
          </label>
          <label className={Style.label_iput}>
            <input
              className={Style.form_sing_up_input}
              required={true}
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          {error ? <p>Eroor</p> : ""}
          <label className={Style.label_iput}>
            <input
              className={Style.form_sing_up_input}
              name="password"
              placeholder="Password"
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
          <label className={Style.label_iput}>
            <input
              className={Style.form_sing_up_input}
              placeholder="Password"
              type={ShowPasWord1 ? "text" : "password"}
              required={true}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {ShowPasWord1 ? (
              <span className={Style.ayes_display} onClick={ShowPasWordFunc1}>
                <AiOutlineEyeInvisible />
              </span>
            ) : (
              <span className={Style.ayes_display} onClick={ShowPasWordFunc1}>
                <AiOutlineEye />
              </span>
            )}
          </label>
          <p className={Style._terms}>
            By continuing, you agree to{" "}
            <Link href="/user/terms">
              <span className={Style.link_terms}>Mystore's Terms </span>
            </Link>
            of Use and{" "}
            <Link href="/user/privacy-policy">
              <span className={Style.link_terms}>Privacy Policy.</span>
            </Link>
          </p>
          <button onSubmit={HandelSumite}>SingUp</button>
        </form>
      </div>
      <div className={Style.div_info_singup}></div>
    </div>
  );
};

export default singup;
