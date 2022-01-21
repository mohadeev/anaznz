import React, { useState, useEffect, useRef } from "react";
import Style from "../../styles/Search/Search-header.module.css";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import { AllArray } from "./AllArray";
import SearchingItem from "../../components/ToursCard/SearchingItem";

const Search = () => {
  const [WordSearch, setWordSearch] = useState("");
  const [Searching, setSearching] = useState(AllArray.map((item) => item));
  const [AllArrayDecond, setAllArrayDecond] = useState(AllArray);
  const [DisplyDiv, setDisplyDiv] = useState(false);
  const input_Search = useRef();
  const divSearItm = useRef();
  const [Window, setWindow] = useState({});
  useEffect(() => {
    setWindow(window);
  });
  const SearchTours = (e) => {
    setWordSearch(e.target.value);
    e.preventDefault();
    setDisplyDiv(true);
    setSearching(AllArrayDecond);
    setSearching(AllArrayDecond.filter((ii) => ii.name === WordSearch));
    const handleClick = (e) => {
      if (input_Search && input_Search.current) {
        const refany = input_Search.current;
        if (!refany.contains(e.target)) {
          setDisplyDiv(false);
        }
      }
    };
    Window.addEventListener("click", handleClick);
  };
  return (
    <div>
      <form className={Style.for_search} onSubmit={SearchTours}>
        <input
          autocomplete="off"
          id="input-search-header"
          type="text"
          placeholder="search for your tour..."
          onChange={SearchTours}
          ref={input_Search}
          vlaue={WordSearch}
        />
        <button>
          {" "}
          <AiOutlineSearch />{" "}
        </button>
      </form>
      {DisplyDiv ? (
        <div ref={divSearItm} className={Style.all_itmes_on_search_container}>
          {Searching.map(({ image, url, name }) => (
            <SearchingItem
              Image={image}
              Name={name}
              Url={url}
              key={Math.random()}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Search;
