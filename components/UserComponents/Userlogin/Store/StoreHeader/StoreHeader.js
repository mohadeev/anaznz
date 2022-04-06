import React, { useState, useRef, useEffect } from "react";
import Style from "../../../../../styles/pages/user/userprofile/Userlogin/Store/Components/storeheader.module.css";
import { AiFillFilter } from "@react-icons/all-files/ai/AiFillFilter";
import { AllDepatment } from "./../../../../../backend/AllDepatment";
import { useSelector, useDispatch } from "react-redux";
import { StorFilterSellect } from "./../../../../../redux/UserSlice/Userlogin/FilterStor";
import { useRouter } from "next/router";


const StoreHeader = () => {
    const { asPath, pathname } = useRouter();
  const Router = useRouter();
  
  const dispatch = useDispatch();
  const Ref = useRef();
  const [TargetValue, setTargetValue] = useState("");
  let UsedRef;
  const HandelChange = (e) => {
    Ref.current.id = e.target.value;
    UsedRef = Ref.current.id;
    const UsedRefNameArray = AllDepatment.filter((item)=>item.value === UsedRef)
    const UsedRefName = UsedRefNameArray.map((({name})=>name))
    console.log(UsedRefName)
    dispatch(StorFilterSellect({ value: UsedRef , name: UsedRefName }));
    setTargetValue(e.target.value);
  };
const UserProfile = useSelector((state) => state.UserSlice.userRudux);
  const DataPayload = UserProfile.map((item) => item.payload);
  const Id = DataPayload.map((item) => item.map(({ _id }) => _id));
  const PushToAddNewProduct=()=>{
    Router.push(`/user/${Id}=store=create_new_prodcut`);
  } 

  return (
    <div className={Style.container}>
      <div className={Style.div_filter_by}>
        <button className={Style.div_filter_by_button}>
          Filter by <AiFillFilter />
        </button>
      </div>
      <div className={Style.div_filtered_items}></div>
      <div className={Style.div_button}>
        <button className={Style.button} onClick={PushToAddNewProduct}>Add Product</button>
      </div>
    </div>
  );
};

export default StoreHeader;
