import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Style from "../../../styles/pages/Search/components/searchresult.module.css";
import { AllDepatment } from "../../../backend/AllDepatment";

const SearchResult = () => {
  const InputSearch = useSelector(
    (state) => state.HeaderMenuRuducer.InputSearch
  );
  return (
    <div className={Style.container}>
      <div className={Style.div_search}>
        <div claaName={Style.searching}>
          <p className={Style.searching_p}>
            {" "}
            1-24 of 781 results for: &nbsp; &nbsp;
          </p>
        </div>
        <div claaName={Style.searching}>
          <p className={Style.p}> &quot;{InputSearch}&quot; </p>
        </div>
      </div>
      <div className={Style.div_sellect}>
        <span>Sort by: </span>
        <select className={Style.button_catgory}>
          <option>Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Avg. Customer Review</option>
          <option>Newest Arrivals</option>
        </select>
      </div>
    </div>
  );
};

export default SearchResult;
