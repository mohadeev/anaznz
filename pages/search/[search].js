import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import {
  HeaderMenuSearch,
  HeaderSearsch,
} from "../../redux/HeaderSlice/HeadeMenu";
import Poroducts from "./../../components/UserComponents/Userlogin/Store/Poroducts";
import SearchSideBar from "../../components/PageComponents/Search/SearchSideBar";
import Style from "../../styles/pages/Search/search.module.css";
import SearchResult from "../../components/PageComponents/Search/SearchResult";

const Search = () => {
  const dispatch = useDispatch();
  const MenuSearch = useSelector((state) => state.HeaderMenuRuducer.MenuSearch);
  const InputSearch = useSelector(
    (state) => state.HeaderMenuRuducer.InputSearch
  );

  const MenuSellect = useSelector(
    (state) => state.HeaderMenuRuducer.MenuSellect
  );
  const { asPath, pathname } = useRouter();
  const Router = useRouter();
  const [pushto, setpushto] = useState("");
  const [WindiwOathname, setWindiwOathname] = useState();
  useEffect(() => {
    setWindiwOathname(window.location.pathname);
  }, []);

  useEffect(() => {
    const Displaydata = () => {
      if (asPath !== "/search/[search]") {
        dispatch(HeaderSearsch({ value: asPath }));
        const Search = ["/search=?"];
        const SearchPath = asPath.split("");
        const Joig = SearchPath.splice(8, SearchPath.length);
        const ARAUU = Joig.join("");
        const dfdhdh = "/search/" + "/search=?" + ARAUU.toString();
        const Lastpsuh = dfdhdh.toString();
        const pathth = pathname;
        if (pathth.includes("/search=?")) {
          alert("included");
        } else if (!pathth.includes("/search=?")) {
          // alert(" not included");
          Router.push(Lastpsuh);
        }
      }
    };
    Displaydata();
  }, [HeaderSearsch]);

  useEffect(() => {
    const Displaydata = () => {
      if (asPath !== "/search/[search]") {
        dispatch(HeaderSearsch({ value: asPath }));
      }
    };
    Displaydata();
  }, [HeaderSearsch]);

  return (
    <>
      <head>
        <title>{"Searshing to " + InputSearch}</title>
      </head>
      <div className={Style.container}>
        <SearchResult />
        <div className={Style.container_2}>
          <SearchSideBar />
          <Poroducts />
        </div>
      </div>
    </>
  );
};

export default Search;
