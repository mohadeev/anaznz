import React, { useEffect, useState } from "react";
import { LogInSuccess } from "../../../../redux/UserSlice/UserSlice";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Style from "../../../../styles/pages/user/userprofile/Userlogin/Profile/Profile.module.css";

const Profile = () => {
  const [moha, setmoha] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {}, []);

  const UserProfile = useSelector((state) => state.UserSlice.userRudux);
  console.log(UserProfile);
  
  return <div className={Style.profile_div}></div>;
};

export default Profile;
