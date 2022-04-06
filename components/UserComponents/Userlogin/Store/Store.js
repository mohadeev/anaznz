import React, { useEffect, useState } from "react";
import Style from "../../../../styles/pages/user/userprofile/Userlogin/Store/Store.module.css";
import Poroducts from "./Poroducts";
import StoreHeader from "./StoreHeader/StoreHeader";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import {
  ReduxBreakLinkReducer,
  ReduxBreakLinkTrue,
} from "../../../../redux/StoreSlice/StoreSlice";
import BreakLink from "./../../../Modals/BreakLink";
import AllPoroducts from "./AllPoroducts";
import CreateProdcuts from './StoreCreateProducts/CreateProdcuts';

const Store = () => {
  const dispatch = useDispatch();
  const UserProfile = useSelector((state) => state.UserSlice.userRudux);
  const UserLogIn = useSelector((state) => state.UserSlice.isLogin);
  const DataPayload = UserProfile.map((item) => item.payload);
  const Id = DataPayload.map((item) => item.map(({ _id }) => _id));
  const { asPath, pathname } = useRouter();
  const Router = useRouter();
  return (
    <div className={Style.container}>
      {(() => {
        if (asPath === `/user/${Id}=store`) {
          return (
            <>
              <StoreHeader />
              <Poroducts />
            </>
          );
        } else if (asPath === `/user/${Id}=store=ref?url=all-products`) {
          return (
            <>
              <StoreHeader />
              <AllPoroducts />
            </>
          );
        }else if (asPath.includes(`/user/${Id}=store=create_new_prodcut`)) {
          return (
            <>
              {/* <StoreHeader /> */}
              <CreateProdcuts />
            </>
          );
        } else {
          return <BreakLink />;
        }
      })()}
    </div>
  );
};

export default Store;
