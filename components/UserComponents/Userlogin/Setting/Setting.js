import React from 'react';
import UserSettingPhoto from "./UserSetting/UserSettingPhoto";
import UserTextData from "./UserSetting/UserTextData";
import Style from "../../../../styles/pages/user/userprofile/Userlogin/Setting/Setting.module.css";

const Setting = () => {
  return (
    <div className={Style.container}>
      <UserSettingPhoto />
      <UserTextData />
    </div>
  );
};

export default Setting;
