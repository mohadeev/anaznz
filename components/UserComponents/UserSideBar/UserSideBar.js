import React from 'react';
import Style from "../../../styles/pages/user/userprofile/usersidebar/UserSideBar.module.css";
import LinksSideBar from "./LinksSideBar";
import LinkUser from './../../BadComponent/LinkUser';


const UserSideBar = () => {
  return (
    <div className={Style.div_side_bar}>
      <LinkUser fontColor={"#666"} />
      <LinksSideBar />
    </div>
  );
};

export default UserSideBar;
