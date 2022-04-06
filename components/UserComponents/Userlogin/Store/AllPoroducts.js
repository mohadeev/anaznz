import React, { useState } from "react";
import UserStoreProduct from "../../../Products/UserStoreProduct";
import Style from "../../../../styles/pages/user/userprofile/Userlogin/Store/Components/products.module.css";
import { BsChevronRight } from "@react-icons/all-files/bs/BsChevronRight";
import { BsChevronLeft } from "@react-icons/all-files/bs/BsChevronLeft";
import { useSelector } from "react-redux";
import { ArrayProducts } from "./ProductsArray";

const AllPoroducts = () => {
  const UserProfile = useSelector((state) => state.UserSlice.userRudux);

  const ArrayLenght = ArrayProducts.length;
  const WhereYouAre = ArrayLenght / 3;
  const [First, setFirst] = useState(0);
  const [Last, setLast] = useState(3);
  const [Space, setSpace] = useState(First - Last);
  let NewArray = ArrayProducts.slice(First, Last);

  const BackWards = () => {
    setFirst(First - 3);
    setLast(Last - 3);
  };
  const ForeadWards = () => {
    setFirst(First + 3);
    setLast(Last + 3);
    setSpace(First - Last);

    // NewArray = ArrayProducts.slice(First,Last)
  };
  const SplicedArray = ArrayProducts.slice(0, ArrayProducts.length);
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
      <div className={Style.filter_change_div}>
        <button onClick={BackWards} className={Style.button_change_array}>
          <BsChevronLeft />
        </button>
        <span className={Style.array_info}>1 / {ArrayLenght}</span>
        <button onClick={ForeadWards} className={Style.button_change_array}>
          <BsChevronRight />
        </button>
      </div>
    </div>
  );
};
export default AllPoroducts;
