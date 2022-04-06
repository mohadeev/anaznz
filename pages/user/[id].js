import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Profile from "../../components/UserComponents/Userlogin/Profile/Profile";
import Store from "../../components/UserComponents/Userlogin/Store/Store";
import Style from "../../styles/pages/user/userprofile/dashboard.module.css";
import { useRouter } from "next/router";
import GiftCard from "../../components/UserComponents/Userlogin/GiftCard/GiftCard";
import Purchases from "../../components/UserComponents/Userlogin/Purchases/Purchases";
import Messages from "../../components/UserComponents/Userlogin/Messages/Messages";
import Reviews from "../../components/UserComponents/Userlogin/Reviews/Reviews";
import PaymentMethod from "../../components/UserComponents/Userlogin/PaymentMethod/PaymentMethod";
import Setting from "../../components/UserComponents/Userlogin/Setting/Setting";
import UserSideBar from "../../components/UserComponents/UserSideBar/UserSideBar";
import DashboardLaoding from "../../components/Modals/Laoding/DashboardLaodinf";
import ResponseMessage from "../../components/Modals/Laoding/ResponseMessage";
import BreakLink from "./../../components/Modals/BreakLink";


const Dashboard = ({ screen }) => {
  const UserProfile = useSelector((state) => state.UserSlice.userRudux);
  const ReduxBreakLink = useSelector(
  
    (state) => state.StoreSliceReducer.ReduxBreakLink
  );

  const UserLogIn = useSelector((state) => state.UserSlice.isLogin);
  const DataPayload = UserProfile.map((item) => item.payload);
  const UserName = DataPayload.map((item) => item.map(({ name }) => name));
  const Id = DataPayload.map((item) => item.map(({ _id }) => _id));
  const { asPath, pathname } = useRouter();
  const Router = useRouter();
  const pushto404 = () => {
    Router.push("/404");
  };
  const [Laodig, setLaoding] = useState(true);
  useEffect(() => {
    if (!UserLogIn) {
      setTimeout(() => {
        setLaoding(false);
      }, 3000);
    } else if (UserLogIn) {
      setLaoding(true);
    }
  }, [asPath, UserLogIn]);
  // console.log(ReduxBreakLink);
  return (
    <>
      {/* <head>
        <title>{UserName}</title>
      </head> */}

      <div className={Style.div_dashboard}>
        {(() => {
          if (UserLogIn) {
             if (ReduxBreakLink === true) {
              return (
                <>
                  <BreakLink />
                </>
              );
            } 
            if (asPath === `/user/${Id}`) {
              return (
                <>
                  <UserSideBar />
                  <Profile />
                </>
              );
            } else if (asPath.includes(`/user/${Id}=store`)) {
              return (
                <>
                  <UserSideBar />
                  <Store />
                </>
              );
            } else if (asPath === `/user/${Id}=gift-card-blance`) {
              return (
                <>
                  <UserSideBar />
                  <GiftCard />
                </>
              );
            } else if (asPath === `/user/${Id}=purchases`) {
              return (
                <>
                  <UserSideBar />
                  <Purchases />
                </>
              );
            } else if (asPath === `/user/${Id}=messages`) {
              return (
                <>
                  <UserSideBar />
                  <Messages />
                </>
              );
            } else if (asPath === `/user/${Id}=reviews`) {
              return (
                <>
                  <UserSideBar />
                  <Reviews />{" "}
                </>
              );
            } else if (asPath === `/user/${Id}=payment-method`) {
              return (
                <>
                  <UserSideBar />
                  <PaymentMethod />
                </>
              );
            } else if (asPath === `/user/${Id}=setting`) {
              return (
                <>
                  <UserSideBar />
                  <Setting />
                </>
              );
            } 
            else {
              return (
                <>
                  <BreakLink />
                </>
              );
            }
          }
           else {
            return Laodig ? <DashboardLaoding /> : <ResponseMessage />;
          }
        })()}
      </div>
    </>
  );
};

export default Dashboard;
