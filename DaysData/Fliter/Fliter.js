import { useState, useRef, useEffect } from "react";
import { AiFillFilter } from "@react-icons/all-files/ai/AiFillFilter";
import ToursCard from "../../components/ToursCard/ToursCard";
import SearchingItem from "../../components/ToursCard/SearchingItem";
import Style from "../../styles/toursModal/filter.module.css";
// import { MarrakechArray } from "./MarrakechArray";
import { AllArray, AllDesnames } from "./AllArray";
import { IoIosArrowBack } from "@react-icons/all-files/io/IoIosArrowBack";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";

export const Fliter = ({ FromWhere }) => {
  const [FromProps, setFromProps] = useState(FromWhere);

  const [MarrakechArray, setMarrakechArray] = useState(AllArray[FromWhere]);

  const [BigNumber, setBigNumber] = useState(10);
  const [SmallNumber, setSmallNumber] = useState(0);
  const [TheWord, setTheWord] = useState("");
  const [Searching, setSearching] = useState(MarrakechArray);
  const [ToDisplayDuration, setToDisplayDuration] = useState(false);
  const [ToDisplaySearchItm, setToDisplaySearchItm] = useState(false);

  const PriceRef = useRef();
  const RefCover = useRef();
  const DurationRef = useRef();
  const Items_Filter_destt = useRef();
  const inputSearch = useRef();
  const divSearItm = useRef();
  const [AllTour, setAllTour] = useState(
    MarrakechArray.slice(SmallNumber, BigNumber)
  );
  const [Window, setWindow] = useState({});

  useEffect(() => {
    setWindow(window);
    console.log(Window);
  }, []);

  const Defent = BigNumber - SmallNumber;
  const MoveUp = () => {
    const Doubleis = BigNumber - SmallNumber;
    if (BigNumber >= MarrakechArray.length) {
      setSmallNumber(SmallNumber);
      setBigNumber(MarrakechArray.length);
    } else if (BigNumber > 10) {
      setSmallNumber(SmallNumber + 10);
      setBigNumber(BigNumber + 10);
      setAllTour(MarrakechArray.slice(10 + SmallNumber, 10 + BigNumber));
    } else if (BigNumber == 10) {
      setSmallNumber(SmallNumber + 10);
      setBigNumber(BigNumber + 10);
      setAllTour(MarrakechArray.slice(10 + SmallNumber, 10 + BigNumber));
    }
  };
  const MoveDown = () => {
    if (BigNumber < 10) {
      setSmallNumber(0);
      setBigNumber(10);
      setAllTour(MarrakechArray.slice(SmallNumber, BigNumber));
    } else if (BigNumber > 10) {
      setSmallNumber(SmallNumber - 10);
      setBigNumber(BigNumber - 10);
      setAllTour(MarrakechArray.slice(SmallNumber, BigNumber));
    } else if (BigNumber == 10) {
      setSmallNumber(0);
      setBigNumber(10);
      setAllTour(MarrakechArray.slice(SmallNumber, BigNumber));
    }
    setAllTour(MarrakechArray.slice(SmallNumber, BigNumber));
  };

  const PriceFilter = () => {};
  const [FilterByDuration, setFilterByDuration] = useState([
    { name: "1 Day Trips", type: "1-Day-Trip" },
    { name: "2 Day ", type: "2-Day-Trip" },
    { name: "3 Day to 5", type: "from-3-to-5-trip" },
    { name: "7 Day to 10", type: "from-7-to-10-trip" },
    { name: "11 Day to 14", type: "from-11-to-14-trip" },
    { name: "15 Day to 20", type: "from-15-to-20-trip" },
    { name: "21 Day to 30", type: "from-21-to-30-trip" },
    { name: "31 Day to 40", type: "from-31-to-40-trip" },
  ]);

  const AddAllEvent = (e) => {
    function handleClick(e) {
      if (e.target.id === "Button_display") {
        setToDisplayDuration(!ToDisplayDuration);
      } else if (Items_Filter_destt && Items_Filter_destt.current) {
        const refany = Items_Filter_destt.current;
        if (!refany.contains(e.target)) {
          setToDisplayDuration(false);
        }
      } else if (divSearItm && divSearItm.current) {
        const AllItmesIndes = divSearItm.current;
        if (!AllItmesIndes.contains(e.target)) {
          setToDisplaySearchItm(false);
        }
      }
    }
    Window.addEventListener("click", handleClick);
  };

  const DurationFilter = (e) => {
    setToDisplayDuration(true);
    if (e.target.id === "Button_display") {
      setToDisplayDuration(!ToDisplayDuration);
      AddAllEvent(e);
    } else if (e.target.id === "1-Day-Trip") {
      setAllTour(
        MarrakechArray.filter((item) => item.days >= 0 && item.days <= 1)
      );
    } else if (e.target.id === "2-Day-Trip") {
      setAllTour(
        MarrakechArray.filter((item) => item.days >= 2 && item.days <= 2)
      );
    } else if (e.target.id === "from-3-to-5-trip") {
      setAllTour(
        MarrakechArray.filter((item) => item.days >= 4 && item.days <= 6)
      );
    } else if (e.target.id === "from-7-to-10-trip") {
      setAllTour(
        MarrakechArray.filter((item) => item.days >= 7 && item.days <= 10)
      );
    } else if (e.target.id === "from-11-to-14-trip") {
      setAllTour(
        MarrakechArray.filter((item) => item.days >= 11 && item.days <= 14)
      );
    } else if (e.target.id === "from-15-to-20-trip") {
      setAllTour(
        MarrakechArray.filter((item) => item.days >= 15 && item.days <= 20)
      );
    } else if (e.target.id === "from-21-to-30-trip") {
      setAllTour(
        MarrakechArray.filter((item) => item.days >= 21 && item.days <= 30)
      );
    } else if (e.target.id === "from-31-to-40-trip") {
      setAllTour(
        MarrakechArray.filter((item) => item.days >= 31 && item.days <= 40)
      );
    } else if (e.target.id === "Clear_Filter") {
      inputSearch.current.style.opacity = "0.3";
      setToDisplayDuration(false);
      inputSearch.current.value = "";
      setSmallNumber(0);
      setBigNumber(10);
      setAllTour(MarrakechArray.slice(0, 10));
    }
  };

  const SearchTours = (e) => {
    if (e.target.id === "All-itmes") {
      setToDisplattemsDestnations(!ToDisplattemsDestnations);
    }
    AddAllEvent(e);
    setToDisplaySearchItm(true);
    if (e.target.id === "input-search") {
      setTheWord(e.target.value);
      setSearching(
        MarrakechArray.filter(
          (item) =>
            item.name.includes(TheWord) ||
            item.name.toLowerCase().includes(TheWord) ||
            item.name.toUpperCase().includes(TheWord) ||
            item.name.split("").join().toLowerCase().includes(TheWord) ||
            //----------------desc--------------
            item.desc.includes(TheWord) ||
            item.desc.toLowerCase().includes(TheWord) ||
            item.desc.toUpperCase().includes(TheWord) ||
            item.desc.split("").join().includes(TheWord)
        )
      );
      if (inputSearch.current.value === "") {
        inputSearch.current.style.opacity = "0.3";
      } else {
        inputSearch.current.style.opacity = "1";
      }
    }
    if (e.target.id === "button-search") {
      const InputValue = inputSearch.current.value.split("");
      if (inputSearch.current.value === "") {
        inputSearch.current.style.opacity = "0.3";
        alert("PLease Fill the form");
        setTheWord("");
        inputSearch.current.value = "";
        setAllTour(MarrakechArray.slice(0, 10));
      } else if (InputValue.length <= 2) {
        alert("Please Enter More then 3 Latters at Lease");
        inputSearch.current.style.opacity = "0.3";
        setTheWord("");
        inputSearch.current.value = "";
        setAllTour(MarrakechArray.slice(0, 10));
      } else {
        setAllTour(MarrakechArray);
        setAllTour(
          MarrakechArray.filter(
            (item) =>
              item.name.includes(TheWord) ||
              item.name.toLowerCase().includes(TheWord) ||
              item.name.toUpperCase().includes(TheWord) ||
              item.name.split("").join().toLowerCase().includes(TheWord) ||
              //----------------desc--------------
              item.desc.includes(TheWord) ||
              item.desc.toLowerCase().includes(TheWord) ||
              item.desc.toUpperCase().includes(TheWord) ||
              item.desc.split("").join().includes(TheWord)
          )
        );
      }
    }
  };

  return (
    <div className={Style.filter_tours_container}>
      <div className={Style.div_filter}>
        {ToDisplaySearchItm ? (
          <div ref={divSearItm} className={Style.all_itmes_on_search_container}>
            {Searching.map(({ name, image, url }) => (
              <SearchingItem
                Image={image}
                Name={name}
                Url={url}
                key={Math.random()}
              />
            ))}
            {Searching.length == 0 ? <div>Seach For Key Wods </div> : null}
          </div>
        ) : null}
        <div>
          <button className={Style.button_to_filter}>
            Filter By <AiFillFilter />
          </button>
        </div>
        <div>
          <button
            className={Style.button_to_filter}
            id="Button_display"
            onClick={DurationFilter}
          >
            Duration
          </button>
          {ToDisplayDuration ? (
            <div
              className={Style.div_items_to_filter}
              ref={Items_Filter_destt}
              id="Items_Filter_destt"
            >
              {FilterByDuration.map((item) => (
                <div id={"item"}>
                  <input
                    onClick={DurationFilter}
                    type="checkbox"
                    id={item.type}
                  />
                  {item.name}
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={Style.div_search_itmes}>
          <input
            autocomplete="off"
            id="input-search"
            type="text"
            placeholder="search for your tour..."
            onChange={SearchTours}
            ref={inputSearch}
          />

          <button
            className={Style.div_search_itmes_button}
            onClick={SearchTours}
            id="button-search"
          >
            Search <AiOutlineSearch />
          </button>
        </div>
        <div>
          <button
            className={Style.button_to_filter}
            id="Clear_Filter"
            onClick={DurationFilter}
          >
            Clear Filter
          </button>
        </div>
      </div>
      <div className={Style.all_days_tours_container}>
        {(() => {
          if (AllTour.length == 0) {
            return (
              <div>
                Sorry We didnt find whta you looking for please try to search
                for another key words{" "}
              </div>
            );
          }
        })()}
        {AllTour.map(
          ({
            name,
            image,
            url,
            desc,
            price,
            descount,
            nights,
            days,
            from,
            popular,
          }) => (
            <ToursCard
              key={Math.random()}
              Popular={popular}
              Desc={desc.slice(0, 70) + "..."}
              Image={image}
              Nights={nights}
              TourName={name}
              Days={days}
              Url={url}
              Price={price}
              Descount={descount}
            />
          )
        )}
      </div>
      <div className={Style.div_filter_2}>
        <button onClick={MoveDown} className={Style.button_to_filter}>
          <IoIosArrowBack />
        </button>
        <button onClick={MoveUp} className={Style.button_to_filter}>
          <IoIosArrowForward />
        </button>
        {Defent}
      </div>
      <div ref={RefCover} className={Style.div_filter}></div>
    </div>
  );
};
