import React, { useState } from "react";
import UserStoreProduct from "../../../Products/UserStoreProduct";
import Style from "../../../../styles/pages/user/userprofile/Userlogin/Store/Components/products.module.css";
import { BsChevronRight } from "@react-icons/all-files/bs/BsChevronRight";
import { BsChevronLeft } from "@react-icons/all-files/bs/BsChevronLeft";
import { useSelector } from "react-redux";
import { ArrayProducts } from "./ProductsArray";
import { useRouter } from "next/router";


const Poroducts = () => {
  const UserProfile = useSelector((state) => state.UserSlice.userRudux);
  const UserLogIn = useSelector((state) => state.UserSlice.isLogin);
  const DataPayload = UserProfile.map((item) => item.payload);
  const Id = DataPayload.map((item) => item.map(({ _id }) => _id));
  const { asPath, pathname } = useRouter();
  const Router = useRouter();
  const PushToAll = () => {
    Router.push(`/user/${Id}=store=ref?url=all-products`);
  };
  const SplicedArray = ArrayProducts.slice(0, 6);
  return (
    <div className={Style.container}>
      <div className={Style.div_products}>
        {SplicedArray.map(
          ({ description, id, price, title, rating, image }) => (
            <UserStoreProduct
              key={id}
              Id={id}
              Price={price}
              Name={title}
              Rate={rating}
              Image={image}
              Desc={description}
            />
          )
        )}
      </div>
      <button onClick={PushToAll} className={Style.button_see_all}>
        {" "}
        Sell All
      </button>
    </div>
  );
};
export default Poroducts;
