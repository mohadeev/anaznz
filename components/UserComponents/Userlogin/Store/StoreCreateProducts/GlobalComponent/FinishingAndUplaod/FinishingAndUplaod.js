import React, { useEffect, useState, useRef } from "react";
import Style from "../../../../../../../styles/pages/user/userprofile/Userlogin/Store/Components/BoyFafstion8to20/finishanduplaod.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import DescreptoinFinsh from "./components/DescreptoinFinsh";
import UploadImages from "./components/UploadImages";
import { ButtonNext } from "./../../Components/Buttons";

const FinishingAndUplaod = ({ Top, Bottom, Sex }) => {
  const { asPath, pathname } = useRouter();
  const [RType, setRType] = useState("");
  const [RName, setRName] = useState("");
  const [RCategory, setRCategory] = useState("");
  const [RSubcategory, setRSubcategory] = useState("");
  const [RBrand, setRBrand] = useState("");
  const [RSize, setRSize] = useState("");
  const [RCondestion, setRCondestion] = useState("");
  const [RPrice, setRPrice] = useState("");
  const [RColor, setRColor] = useState("");
  const [RAge, setRAge] = useState("");
  const [RDescount, setRDescount] = useState("");
  const [RSheppingType, setRSheppingType] = useState("");
  const [RShopadress, setRShopadress] = useState("");
  const [RSheppingComapny, setRSheppingComapny] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    let Params = new URL(window.location.href).searchParams;
    setRType(Params.get("type"));
    setRName(Params.get("name"));
    setRCategory(Params.get("categori"));
    setRSubcategory(Params.get("subcategory"));
    setRBrand(Params.get("brand"));
    setRSize(Params.get("size"));
    setRCondestion(Params.get("condestion"));
    setRAge(Params.get("age"));
    setRColor(Params.get("color"));
    setRPrice(Params.get("price"));
    setRDescount(Params.get("descount"));
    setRSheppingType(Params.get("sheppingtype"));
    setRShopadress(Params.get("shopadress"));
    setRSheppingComapny(Params.get("sheppingcomapny"));
  }, [asPath]);
  const ArrayOfData = useSelector(
    (state) => state.StoreSliceReducer.ArrayOfData
  );
  const RDescreption = ArrayOfData.map((item) => item.descreption);
  const Images = useSelector((state) => state.UploadImagesProduct.Images);

  const UplaodImage = async () => {
    const data = new FormData();
    data.append(
      "file",
      Images.map((item) => item)
    );
    data.append("upload_preset", "ftfr04ng");
    const upload = await fetch(
      `https://api.cloudinary.com/v1_1/dbhn3cl2u/image/upload`,
      {
        method: "POST",
        body: Images.map((item) => item),
      }
    ).then((r) => r.json());
    const UploadDb = await fetch(`/api/auth/user/userupdateimg`, {
      method: "PUT",
      body: JSON.stringify(upload.url),
    }).then((payload) => {
      payload.json();
      // UplodSucces();
    });
  };

  const HanddelSubmite = async () => {
    await fetch("/api/userlogedin/user_add_new_product", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        categorie: RCategory,
        subcategory: RSubcategory,
        name: RName,
        forsex: Sex,
        image: [],
        type: RType,
        price: RPrice,
        descount: RDescount,
        descreption: RDescreption,
        age: RAge,
        color: RColor,
        size: RSize,
        brand: RBrand,
        condestion: RCondestion,
        condestionshepping: RSheppingType,
        sheppingcompany: RSheppingComapny,
        location: RShopadress,
      }),
    }).then((doc) => console.log(doc));
    UplaodImage()
  };
  return (
    <>
      <div className={Style.container}>
        <DescreptoinFinsh />
        <UploadImages />
        <ButtonNext NextOnClick={UplaodImage} />
      </div>
    </>
  );
};

export default FinishingAndUplaod;
