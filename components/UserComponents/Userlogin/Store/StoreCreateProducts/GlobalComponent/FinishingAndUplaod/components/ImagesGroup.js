import React, { useState, useRef, useEffect } from "react";
import Style from "../../../../../../../../styles/pages/user/userprofile/Userlogin/Store/Components/Global/imagesgroup.module.css";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { TiMediaPlayReverse } from "@react-icons/all-files/ti/TiMediaPlayReverse";
import { TiMediaPlay } from "@react-icons/all-files/ti/TiMediaPlay";
import { ImageDeleter } from "../../../../../../../../redux/Upload/UploadImagesProduct";

const ImagesGroup = () => {
  const Images = useSelector((state) => state.UploadImagesProduct.Images);
  const dispatch = useDispatch();
  const [PhotosNumber, setPhotosNumber] = useState(4);
  const [DataImages, setDataImages] = useState([]);
  const Length = Images.length;
  const PreviesHandler = () => {
    if (Length > 4) {
      const NewArray = Images.slice(0, 4);
      setDataImages(NewArray);
      setPhotosNumber(0);
    }
  };
  const NextHandler = () => {
    if (Length > 4) {
      const NewArray = Images.slice(4, 8);
      setDataImages(NewArray);
      setPhotosNumber(8 - Images.length);
    }
  };
  const RemoveImage = (data) => {
    dispatch(ImageDeleter({ index: data }));
    // alert(data)
  };
  useEffect(() => {
    if (Length <= 4) {
      setPhotosNumber(4 - Images.length);

      setDataImages(Images);
    } else if (Length > 4) {
      setPhotosNumber(8 - Images.length);
      const NewArray = Images.slice(4, Images.length);
      setDataImages(NewArray);
    }
  }, [Images]);
  const Reffy = useRef();
  useEffect(() => {
    // Reffy.
    
    
  }, [Images]);
  
  return (
    <>
      <div className={Style.conainer}>
        <TiMediaPlayReverse
          style={{ color: Length <= 4 && "#6F7D91" }}
          onClick={PreviesHandler}
        />
        {DataImages.map(
          (item, index) =>
            item && (
              <div
                ref={Reffy}
                key={index}
                className={Style.div_image}
                style={{
                  backgroundImage: `url(${
                    item ? URL.createObjectURL(item) : URL.createObjectURL({})
                  })`,
                }}
              >
                <AiOutlineClose onClick={() => RemoveImage(index)} />
              </div>
            )
        )}
        {Array(PhotosNumber)
          .fill()
          .map((i, index) => (
            <div key={index} className={Style.div_image}></div>
          ))}
        <TiMediaPlay
          onClick={NextHandler}
          style={{ color: Length <= 4 && "#6F7D91" }}
        />
      </div>
      {Length} of 8
    </>
  );
};

export default ImagesGroup;
