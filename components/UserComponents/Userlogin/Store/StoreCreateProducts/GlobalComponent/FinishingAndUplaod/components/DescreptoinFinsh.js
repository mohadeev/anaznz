import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Style from "../../../../../../../../styles/pages/user/userprofile/Userlogin/Store/Components/Global/descreption.module.css";
import { ReducerDescreption } from "../../../../../../../../redux/StoreSlice/StoreSlice";
const DescreptoinFinsh = ({ Top, Bottom }) => {
  const dispatch = useDispatch();
  const ArrayOfData = useSelector(
    (state) => state.StoreSliceReducer.ArrayOfData
  );
  const RDescreption = ArrayOfData.map((item) => item.descreption);
  const [Deslength, setDeslength] = useState([]);
  const Ref = useRef();
  const HandleChange = (e) => {
    dispatch(ReducerDescreption({ descreption: e.target.value }));
  };
  const Lenght = RDescreption.toString();
  useEffect(() => {
    setDeslength(Lenght.split(""));
  }, [Lenght]);
  return (
    <>
      <div className={Style.container}>
        <p className={Style.title}>Description</p>
        <textarea
          placeholder="enter descreption about your product"
          ref={Ref}
          onChange={HandleChange}
          className={Style.input}
        ></textarea>
        {Deslength.length}
      </div>
    </>
  );
};

export default DescreptoinFinsh;
