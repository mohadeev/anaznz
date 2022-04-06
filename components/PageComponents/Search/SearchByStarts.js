import React  , {useState} from "react";
import { BsStarFill } from "@react-icons/all-files/bs/BsStarFill";
import Style from "../../../styles/pages/Search/components/searchbystarts.module.css";
import { ArrayProducts } from "../../UserComponents/Userlogin/Store/ProductsArray";
import { BsStar } from "@react-icons/all-files/bs/BsStar";
import { BsChevronRight } from "@react-icons/all-files/bs/BsChevronRight";
import SearchByCategories from "./SearchByCategories";

const SearchByStarts = () => {
  const Star1 = ArrayProducts.filter(
    (item) => item.rating.rate >= 1 && item.rating.rate < 2
  );
  const Star2 = ArrayProducts.filter(
    (item) => item.rating.rate >= 2 && item.rating.rate < 3
  );
  const Star3 = ArrayProducts.filter(
    (item) => item.rating.rate >= 3 && item.rating.rate < 4
  );
  const Star4 = ArrayProducts.filter(
    (item) => item.rating.rate >= 4 && item.rating.rate < 5
  );
  const [Display, setDisplay] = useState(true);

  const HadleClick = () => setDisplay(!Display);
  return (
    <>
      <div onClick={HadleClick}>
        <SearchByCategories Category={"Customer Review"} />
      </div>

      {Display && (
        <>
          <div className={Style.container}>
            <div className={Style.rating_div}>
              <span className={Style.rating}>
                {Array(4).fill(<BsStarFill />)} {Array(1).fill(<BsStar />)}
              </span>
              <p className={Style.p}> & up </p>
            </div>
            <div className={Style.rating_div}>
              <span className={Style.rating}>
                {Array(3).fill(<BsStarFill />)} {Array(2).fill(<BsStar />)}
              </span>
              <p className={Style.p}> & up </p>
            </div>
            <div className={Style.rating_div}>
              <span className={Style.rating}>
                {Array(2).fill(<BsStarFill />)} {Array(3).fill(<BsStar />)}
              </span>
              <p className={Style.p}> & up </p>
            </div>
            <div className={Style.rating_div}>
              <span className={Style.rating}>
                {Array(1).fill(<BsStarFill />)} {Array(4).fill(<BsStar />)}
              </span>
              <p className={Style.p}> & up </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SearchByStarts;
