import React, { useRef, useEffect, useState } from "react";
import Style from "../../../../styles/Prancepales/Header/HeaderComponents/inputsearch.module.css";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import HeaderSellect from "../HeaderSellect";
import { useSelector, useDispatch } from "react-redux";
import {
  HeaderMenuSearch,
  HeaderMenuSearchValue,
} from "../../../../redux/HeaderSlice/HeadeMenu";
import { useRouter } from "next/router";
import SearchArea from "./SearchArea";

const InputSearch = () => {
  const [ShowDiv, setShowDiv] = useState(false);
  const [Window, setWindow] = useState({});
  const [Value, setValue] = useState("");
  const Router = useRouter();
  const { asPath, pathname } = useRouter();
  const MenuSellect = useSelector(
    (state) => state.HeaderMenuRuducer.MenuSellect
  );
  const MenuSearch = useSelector((state) => state.HeaderMenuRuducer.MenuSearch);
  const input_Search = useRef();
  const Ref2 = useRef();

  useEffect((e) => {
    const HandelClick = (e) => {
      if (input_Search && input_Search.current) {
        const refany = input_Search.current;
        if (refany.contains(e.target)) {
          setShowDiv(true);
        } else if (Ref2 && Ref2.current) {
          const refany = Ref2.current;
          if (!refany.contains(e.target)) {
            setShowDiv(false);
          }
        }
      }
    };
    window.addEventListener("click", HandelClick);
  }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    input_Search.current.value = MenuSellect;
    setValue(MenuSellect);
    dispatch(HeaderMenuSearchValue({ value: MenuSellect }));
  }, [MenuSellect , dispatch]);
 
  const HandelChange = (e) => {
    setValue(e.target.value);
    setShowDiv(true);
    dispatch(HeaderMenuSearchValue({ value: e.target.value }));
    Router.push(`/search/search=?&text=${e.target.value}`);

  };
  const PushtoSearch = (e) => {
    e.preventDefault();
    setValue(Value);
    dispatch(HeaderMenuSearch({ value: Value }));
    Router.push(`/search//search=?&text=${Value}`);
  };

  return (
    <>
      <div className={Style.container}>
        <form className={Style.form_search} onSubmit={PushtoSearch}>
          <HeaderSellect />
          <input
            ref={input_Search}
            onChange={HandelChange}
            className={Style.input_search}
            // defaultValue={MenuSellect}
            type="text"
          />
          <button className={Style.button_search}>
            <BsSearch />
          </button>
        </form>
      </div>
      {ShowDiv && (
        <div className={Style.div_search_area} ref={Ref2}>
          <SearchArea />
        </div>
      )}
    </>
  );
};

export default InputSearch;
