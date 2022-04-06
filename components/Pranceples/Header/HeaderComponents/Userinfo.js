import React , {useEffect } from "react";
import Style from "../../../../styles/Prancepales/Header/HeaderComponents/UserInfo.module.css";
import { BsFillCaretDownFill } from "@react-icons/all-files/bs/BsFillCaretDownFill";
import { useDispatch, useSelector } from "react-redux";
import { ProfileDetailesRuducer } from "../../../../redux/UserSlice/HeaderUser";
import { AvatarRuducer } from "../../../../redux/UserSlice/HeaderUser";



const Userinfo = () => {
  const dispatch = useDispatch();
    const UserProfile = useSelector((state) => state.UserSlice.userRudux);
    const DataPayload = UserProfile.map((item) => item.payload);
    const Image = DataPayload.map((item) => item.map(({ image }) => image));
  const HandleDetails = () => {
    dispatch(ProfileDetailesRuducer());
  };
  return (
    <div  className={Style.user_container}>
      <div 
          style={{ backgroundImage: `url(${Image})` }}
      className={Style.div_user_images}
      ></div> <BsFillCaretDownFill />
    </div>
  );
};

export default Userinfo;
