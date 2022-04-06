import React, { useState, useEffect } from "react";
import Style from "../../../../styles/Prancepales/Header/HeaderComponents/ProfileDetailes.module.css";
import { useSelector, useDispatch } from "react-redux";
import { BsFillPersonFill } from "@react-icons/all-files/bs/BsFillPersonFill";
import { BsGift } from "@react-icons/all-files/bs/BsGift";
import { BsChatDots } from "@react-icons/all-files/bs/BsChatDots";
import { BsBookmarkCheck } from "@react-icons/all-files/bs/BsBookmarkCheck";
import { BsGear } from "@react-icons/all-files/bs/BsGear";
import { BiLogOut } from "@react-icons/all-files/bi/BiLogOut";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { UserLogOut } from "../../../../redux/UserSlice/UserSlice";
import { StoreSvg } from "../../../CusstumIcons";


import { ReduxBreakLinkReducer , ReduxBreakLinkTrue } from "../../../../redux/StoreSlice/StoreSlice";


const ProfileDetailes = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const Displayprofile = useSelector(
    (state) => state.ProfileDetailes.ProfileDetailes
  );
  const UserProfile = useSelector((state) => state.UserSlice.userRudux);
  const DataPayload = UserProfile.map((item) => item.payload);
  const UserName = DataPayload.map((item) => item.map(({ name }) => name));
  const [UserNameState, setUserNameState] = useState(UserName);
  const Id = DataPayload.map((item) => item.map(({ _id }) => _id));
  const [IdState, setIdState] = useState(Id);

  useEffect(() => {
    setUserNameState(UserName);
    setIdState(Id);
  }, [Displayprofile]);

  const Handellogout = async () => {
    dispatch(UserLogOut());
    Cookies.remove("user_ref");
    router.push("/");
    // const response = await fetch("/api/auth/user/logout", {
    //   method: "put",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     login: false,
    //   }),
    // });
    // const data = await response.json();
    // if (data) {
    //   if (data.logout) {
    //     dispatch(UserLogOut());
    //     router.push("/");
    //   }
    // } else {
    //   alert(`Erro : ${data.error}`);
    // }
  };

  const PushtoUser = () => {   
     dispatch(ReduxBreakLinkTrue())
    router.push(`/user/${IdState}`);
  };
  const PushtoStore = () => {       
     dispatch(ReduxBreakLinkTrue())
    router.push(`/user/${IdState}=store`);

  };
  const PushtoSetting = () => {
    dispatch(ReduxBreakLinkTrue())
    router.push(`/user/${IdState}=setting`);
  };
  const PushtoGiftCards = () => {
    dispatch(ReduxBreakLinkTrue())
    router.push(`/user/${IdState}=gift-card-blance`);
  };
  const PushtoMessages = () => {
    dispatch(ReduxBreakLinkTrue())
    router.push(`/user/${IdState}=messages`);
  };
  const PushtoPurchases = () => {
    dispatch(ReduxBreakLinkTrue())
    router.push(`/user/${IdState}=purchases`);
  };

  const ProfileItems = [
    {
      name: UserNameState,
      icon: <BsFillPersonFill />,
      onClick: PushtoUser,
      ClassName: Style.user_div,
      Desc: "View your dashboard  ",
    },

    { name: "gift card blance", icon: <BsGift />, onClick: PushtoGiftCards },

    { name: "Messages", icon: <BsChatDots />, onClick: PushtoMessages },
    {
      name: "Purchases and reviews",
      icon: <BsBookmarkCheck />,
      onClick: PushtoPurchases,
    },

    {
      name: "account settings",
      icon: <BsGear />,
      onClick: PushtoSetting,
    },
    {
      name: "Sell on Our Stor",
      icon: StoreSvg,
      onClick: PushtoStore,
    },
    {
      name: "log out ",
      icon: <BiLogOut />,
      onClick: Handellogout,
      ClassName: Style.user_logout_div,
    },
  ];
  return (
    <>
        <div className={Style.container}>
          {ProfileItems.map(({ Desc, onClick, name, icon, ClassName } , index) => (
            <div key={index} className={Style.containe2}>
              <div
                onClick={onClick}
                className={ClassName ? ClassName : Style.normal_detailtes}
                key={name}
              >
                {icon} <span>{name}</span>
                {Desc && <span className={Style.descr}>{Desc}</span>}
                <br />
              </div>
            </div>
          ))}
        </div>
    </>
  );
};

export default ProfileDetailes;
