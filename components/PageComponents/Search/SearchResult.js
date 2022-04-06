import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Style from "../../../styles/pages/Search/components/searchresult.module.css";
import { AllDepatment } from "../../../backend/AllDepatment";
import {
  HeaderMenuSearch,
  HeaderSearsch,
} from "../../../redux/HeaderSlice/HeadeMenu";
import { useRouter } from "next/router";

const SearchResult = () => {
  const { asPath, pathname } = useRouter();
  const dispatch = useDispatch();

  const MenuSearchValue = useSelector(
    (state) => state.HeaderMenuRuducer.MenuSearchValue
  );
  const InputSearch = useSelector(
    (state) => state.HeaderMenuRuducer.InputSearch
  );
  useEffect(() => {
    const DispatchData = () => {
      if (window.location.pathname !== "/search/[search]") {
        let Params = new URL(window.location.href).searchParams;
        const text = Params.get("text");
        dispatch(HeaderSearsch({ value: text }));
      }
    };
    DispatchData();
  }, [asPath, dispatch]);

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
