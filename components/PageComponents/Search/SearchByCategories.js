import React, { useState } from "react";
import Style from "../../../styles/pages/Search/components/searchbycategories.module.css";
import { BsChevronDown } from "@react-icons/all-files/bs/BsChevronDown";
import { BsChevronUp } from "@react-icons/all-files/bs/BsChevronUp";

const SearchByCategories = ({ Category }) => {
  const [Display, setDisplay] = useState(true);
  return (
    <div onClick={()=>setDisplay(!Display)}
    className={Style.container}>
      <p>{Category}</p> {Display ? <BsChevronUp /> :<BsChevronDown /> }
    </div>
  );
};

export default SearchByCategories;
