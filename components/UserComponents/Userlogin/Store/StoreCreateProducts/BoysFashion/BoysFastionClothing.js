import React from "react";
import Style from "../../../../../../styles/pages/user/userprofile/Userlogin/Store/Components/BoyFafstion8to20/clothing.module.css";
import Pricing from "../GlobalComponent/Pricing";
import Brand from "../GlobalComponent/Brand";
import SheppingType from "../GlobalComponent/SheppingType";
import { ClothingArray, Types } from "../../StroeArrays/ClothingBrands";
import { ClothingArraySize } from "../../StroeArrays/ClothingBrands";
import ClothingTypes from "../GlobalComponent/Types";
import Color from "../GlobalComponent/Color";
import Condestion from "../GlobalComponent/Condestion";
import Size from "../GlobalComponent/Size";
import { ButtonNext } from "../Components/Buttons";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
// import FinishingAndUplaod from '../../GlobalComponent/FinishingAndUplaod';
import FinishingAndUplaod from './../GlobalComponent/FinishingAndUplaod/FinishingAndUplaod';

const BoysFastionClothing = () => {
  const Router = useRouter();
  const ArrayOfData = useSelector(
    (state) => state.StoreSliceReducer.ArrayOfData
  );
  const RType = ArrayOfData.map((item) => item.type);
  const RBrand = ArrayOfData.map((item) => item.brand);
  const RSize = ArrayOfData.map((item) => item.size);
  const RCondestion = ArrayOfData.map((item) => item.condestion);
  const RPrice = ArrayOfData.map((item) => item.price);
  const RColor = ArrayOfData.map((item) => item.color);
  const RDescount = ArrayOfData.map((item) => item.descount);
  const RSheppingType = ArrayOfData.map((item) => item.sheppingtype);
  const RShopadress = ArrayOfData.map((item) => item.shopadress);
  const RSheppingComapny = ArrayOfData.map((item) => item.sheppingcomapny);

  const dispatch = useDispatch();
  const { asPath, pathname } = useRouter();
  const Continue = () => {
    Router.push(
      asPath +
        `&type=${RType}` +
        `&brand=${RBrand} ` +
        `&size=${RSize}` +
        `&condestion=${RCondestion}` +
        `&price=${RPrice} ` +
        `&descount=${RDescount}` +
        `&color=${RColor}` +
        `&sheppingtype=${RSheppingType}` +
        `&shopadress=${RShopadress}` +
        `&sheppingcomapny=${RSheppingComapny}`
    );
  };
  return (
    <div className={Style.BoysFastionClothingContainer}>
     
      {(() => {
        if (
          asPath.includes(
            `&type=${RType}` &&
              `&brand=${RBrand} ` &&
              `&size=${RSize}` &&
              `&condestion=${RCondestion}` &&
              `&price=${RPrice} ` &&
              `&color=${RColor}` 
          )
        ) {
          return <FinishingAndUplaod />;
        } else if (
          !asPath.includes(
            `&type=${RType}` &&
              `&brand=${RBrand} ` &&
              `&size=${RSize}` &&
              `&condestion=${RCondestion}` &&
              `&price=${RPrice} ` &&
              `&color=${RColor}` 
          )
        ) {
          return (
            <form>
              <ClothingTypes TypeArray={Types} Bottom={true} />
              <Brand Top={false} Bottom={false} CompanyArray={ClothingArray} />
              <Size ClothingSize={ClothingArraySize} />
              <Color Top={false} Bottom={false} CompanyArray={ClothingArray} />
              <Condestion CompanyArray={ClothingArray} />
              <Pricing Top={false} Bottom={true} />
              <SheppingType Top={false} Bottom={true} />
              <ButtonNext NextOnClick={Continue} />
            </form>
          );
        }
      })()}
    </div>
  );
};

export default BoysFastionClothing;
