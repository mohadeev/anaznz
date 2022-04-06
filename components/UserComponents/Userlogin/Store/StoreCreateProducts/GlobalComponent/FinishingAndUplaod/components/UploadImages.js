import React from "react";
import { BsImages } from "@react-icons/all-files/bs/BsImages";
import Style from "../../../../../../../../styles/pages/user/userprofile/Userlogin/Store/Components/Global/uploadimages.module.css";
import ImagesGroup from "./ImagesGroup";
import {ImageUploader} from '../../../../../../../../redux/Upload/UploadImagesProduct'
import {useDispatch} from 'react-redux'
const UploadImages = () => {
  const dispatch = useDispatch()
  const HandelChange = async (e) => {
    dispatch(ImageUploader(e.target.files[0]))
  };
  return (
    <div className={Style.container}>
      <p className={Style.title}>Photos of your Product</p>
      <input
        onChange={HandelChange}
        style={{ display: "none" }}
        id="input"
        name="input"
        type="file"
      />
      <label htmlFor="input">
        <div className={Style.div_uplod}>
          <BsImages />
          <span className={Style.span}>upload your product image </span>
        </div>
      </label>
      <ImagesGroup />
    </div>
  );
};

export default UploadImages;
