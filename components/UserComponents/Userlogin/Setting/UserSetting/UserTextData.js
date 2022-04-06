import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LogInSuccess } from "../../../../../redux/UserSlice/UserSlice";
// import Style from "../../../../../styles/pages/user/userprofile/UserTextData.module.css";
import Style from "../../../../../styles/pages/user/userprofile/Userlogin/Setting/Components/UserDataSetting.module.css";
import {BsFillXCircleFill} from '@react-icons/all-files/bs/BsFillXCircleFill'
// import { BsFillCheckCircleFill } from "@react-icons/all-files/bs/BsFillCheckCircleFill";
import {CheckIcon} from '../../../../CusstumIcons'
const UserTextData = () => {
  const dispatch = useDispatch();
  const UserProfile = useSelector((state) => state.UserSlice.userRudux);
  const UserImage = UserProfile.map(({ payload }) => payload.image);
  const UserName = UserProfile.map(({ payload }) => payload.name);
  const UserEmail = UserProfile.map(({ payload }) => payload.email);

  const [Email, setEmail] = useState();
  useEffect(() => {
    // fetch("http://localhost:3000/api/website/indexuser")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((payload) => {
    //     const ass = payload.login;
    //     //UserProfile.map(({ payload }) => payload.name);
    //     dispatch(LogInSuccess({ payload, isLogin: payload.login }));
     // });
  }, []);
  return (
    <div className={Style.user_data_div}>
      <form className={Style.form_data}>
        <leble className={Style.lable_input} for="input-email">
          <input
            className={Style.input}
            type="text"
            id="input-email"
            placeholder={UserEmail}
          />
          <span className={Style.error}>
            <BsFillXCircleFill /> {" Erorr for Email"}
          </span>
          <span className={Style.succes}>
            {CheckIcon}
            {"succes for Email"}
          </span>
        </leble>
        <leble className={Style.lable_input} for="input-email">
          <input
            className={Style.input}
            type="text"
            id="input-email"
            placeholder={UserName}
          />
          <span className={Style.error}>{"Erorr for Email"}</span>
          <span className={Style.succes}>{"succes for Email"}</span>{" "}
        </leble>
        <leble className={Style.lable_input} for="input-email">
          <input
            className={Style.input}
            type="text"
            id="input-email"
            placeholder={"************************"}
          />
          <span className={Style.error}>{"Erorr for Email"}</span>
          <span className={Style.succes}>{"succes for Email"}</span>{" "}
        </leble>
        <button className={Style.save}> Save</button>
      </form>
    </div>
  );
};

export default UserTextData;
