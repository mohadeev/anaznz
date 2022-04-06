import React from "react";
import { BsPlus } from "@react-icons/all-files/bs/BsPlus";
import Style from "../../../../styles/Prancepales/Header/HeaderComponents/Currency.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";


const Index = () => {
const UserProfile = useSelector((state) => state.UserSlice.userRudux);
const DataPayload = UserProfile.map((item) => item.payload);
const Id = DataPayload.map((item) => item.map(({ _id }) => _id));
  return (
    <Link href={`/user/${Id}=store`} passHref={true}>
      <div className={Style.icon_container}>
        <span className={Style.icon_items}>Sell now</span>
        <br />
        <BsPlus />
      </div>
    </Link>
  );
};

export default Index;
