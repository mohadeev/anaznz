import React, { useState, useRef } from "react";
// import Style from "../../../../styles/pages/user/userprofile/usersidebar/AlllinksSidebar.module.css";
// import Style from "../../../styles/pages/user/userprofile/usersidebar/UserSideBar.module.css";
import Style from "../../../styles/pages/user/userprofile/usersidebar/UserSideBarr.module.css";
// import Style from '../../../styles/pages/user/userprofile/usersidebar/UserSideBarr.module.css'

import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { BsFillGiftFill } from "@react-icons/all-files/bs/BsFillGiftFill";
import { BsChatDotsFill } from "@react-icons/all-files/bs/BsChatDotsFill";
import { BsGearFill } from "@react-icons/all-files/bs/BsGearFill";
import { BiLogOut } from "@react-icons/all-files/bi/BiLogOut";
import { FaStoreAlt } from "@react-icons/all-files/fa/FaStoreAlt";
import {
  BsBookmarkStarFill,
  BsFillTagsFill,
  BsBank2,
  StoreIcon,
} from "../../CusstumIcons";
import {
  ReduxBreakLinkReducer,
  ReduxBreakLinkTrue,
} from "./../../../redux/StoreSlice/StoreSlice";

const AllLinksSideBar = ({name , icons }) => {
  const UserProfile = useSelector((state) => state.UserSlice.userRudux);
  const DataPayload = UserProfile.map((item) => item.payload);
  const Id = DataPayload.map((item) => item.map(({ _id }) => _id));
  const dispatch = useDispatch();
  const Router = useRouter();

  const [ArrayLink, setArrayLink] = useState([
    { name: "Your Store ", icon: StoreIcon, onClick: "store" },
    {
      name: "Gift Cards",
      icon: <BsFillGiftFill />,
      onClick: "gift-card-blance",
    },
    { name: "Purchases", icon: BsFillTagsFill, onClick: "purchases" },
    { name: "Messages", icon: <BsChatDotsFill />, onClick: "messages" },
    { name: "Reviews", icon: BsBookmarkStarFill, onClick: "reviews" },
    { name: "Setting", icon: <BsGearFill />, onClick: "setting" },
    { name: "Payment Method", icon: BsBank2, onClick: "payment-method" },
  ]);
  const Reff = useRef();
  const OnMouseOverFunc = (data) => {
    Reff.current.className = Style.hoveranimation;
  };
   const OnMouseLeaveFunc = () => {
    Reff.current.className = Style.div_links;
  };
  return (
    <div className={Style.container}>
      {ArrayLink.map(({ onClick, name, icon }, index) => (
        <div
          key={index}
          className={Style.div_links}
          ref={Reff}
          onClick={() => {
            dispatch(ReduxBreakLinkTrue());
            Router.push(`/user/${Id}${onClick ? "=" + onClick : ""}`);
          }}
        >
          <span className={Style.icon}>{icon} </span>
          <span className={Style.details}>{name}</span>
        </div>
      ))}
    </div>
  );
};

export default AllLinksSideBar;
