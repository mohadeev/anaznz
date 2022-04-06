import React, { useState } from "react";
import Style from "../../styles/BadComponent/LinkUser.module.css";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import IMAGE from "../../public/images/moha.jpg";

const LinkUser = ({fontColor}) => {
  const Router = useRouter();
  const UserProfile = useSelector((state) => state.UserSlice.userRudux);
  const DataPayload = UserProfile.map((item) => item.payload);
  const UserName = DataPayload.map((item) => item.map(({ name }) => name));
  const Image = DataPayload.map((item) => item.map(({ image }) => image));
  const Id = DataPayload.map((item) => item.map(({ _id }) => _id));
  return (
    <div
      onClick={() => {
        Router.push(`/user/${Id}`);
      }}
      className={Style.container}
    >
      <div className={Style.div_links}>
        <div
          style={{ backgroundImage: `url(${Image})` }}
          className={Style.user_image}
        ></div>
        <h3 style={{color : `${fontColor}`}} className={Style.user_name}>{UserName}</h3>
      </div>
    </div>
  );
};

export default LinkUser;
