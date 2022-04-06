import React, { useState, useRef, useEffect } from "react";
import Style from "../../../../../styles/pages/user/userprofile/Userlogin/Setting/Components/UserPhoto.module.css";
import Button from "@mui/material/Button";
import { Cameraicon } from "../../../../CusstumIcons";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { useSelector, useDispatch } from "react-redux";

const UserSettingPhoto = () => {
  const [ConfirmUplad, setConfirmUplad] = useState(false);
  const [SuccesUplad, setSuccesUplad] = useState(false);
  const UserProfile = useSelector((state) => state.UserSlice.userRudux);
  const DataPayload = UserProfile.map((item) => item.payload);
  const Image = DataPayload.map((item) => item.map(({ image }) => image));

  //-----------------------------ref------------------------//
  const DisplaySucces =useRef()
  
  const [selectedImage, setSelectedImage] = useState(null);
  const UplodSucces = () => {
    setSuccesUplad(true);
    setTimeout(() => {
      setSuccesUplad(false)
      setConfirmUplad(!ConfirmUplad);
    } , 5000)
  };
  

  const HandelChange = async (e) => {
    setSelectedImage(e.target.files[0]);
    HideDive();
  };
  const UplaodImage = async () => {
    const data = new FormData();
    data.append("file", selectedImage);
    data.append("upload_preset", "ftfr04ng");
    const upload = await fetch(
      `https://api.cloudinary.com/v1_1/dbhn3cl2u/image/upload`,
      {
        method: "POST",
        body: data,
      }
    ).then((r) => r.json());
    const UploadDb = await fetch(`/api/auth/user/userupdateimg`, {
      method: "PUT",
      body: JSON.stringify(upload.url),
    }).then((payload) => {
      payload.json()
        UplodSucces();
      // dispatch(LogInSuccess({ payload, isLogin: payload.login }));
    });
  };
  const HideDive = () => {
    setConfirmUplad(!ConfirmUplad);
  };
  
  return (
    <div className={Style.container}>
      {ConfirmUplad ? (
        <div className={Style.div_update}>
          <div className={Style.div_update_info}>
            <button onClick={HideDive} className={Style.span_delete}>
              <FaTimes />
            </button>
            {SuccesUplad ? (
              <span ref={DisplaySucces} className={Style.succes}>
                {"your image was added succefly"}
              </span>
            ) : (
              ""
            )}

            <div
              style={{
                backgroundImage: `url(${
                  selectedImage ? URL.createObjectURL(selectedImage) : Image
                })`,
              }}
              className={Style.user_images_update}
            ></div>
            <div className={Style.div_buttons}>
              <Button className={Style.image_delete} color="secondary">
                Delete
              </Button>
              <button className={Style.button_save} onClick={UplaodImage}>
                SAVE
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <div
        style={{
          backgroundImage: `url(${
            selectedImage ? URL.createObjectURL(selectedImage) : Image
          })`,
        }}
        className={Style.user_images}
      >
        <label className={Style.cammera_icon} for="disply">
          {Cameraicon}
          <input
            className={Style.input_hidden}
            type="file"
            id="disply"
            onChange={HandelChange}
          />
        </label>
      </div>
    </div>
  );
};

export default UserSettingPhoto;
