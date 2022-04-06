import React, { useState, useEffect, useRef } from "react";
import Style from "../../../../styles/Prancepales/Header/HeaderMenu/HeaderMenu.module.css";
import {
  HeaderMenuFalse,
  HeaderMenuRuducer,
} from "../../../../redux/HeaderSlice/HeadeMenu";
import { AllDepatment } from "../../../../backend/AllDepatment";
import { useDispatch, useSelector } from "react-redux";
import { BsX } from "@react-icons/all-files/bs/BsX";
import TopDivMenu from "./TopDivMenu";
import LinkUser from "../../../BadComponent/LinkUser";
import { BsChevronDown } from "@react-icons/all-files/bs/BsChevronDown";
import { BsChevronUp } from "@react-icons/all-files/bs/BsChevronUp";
import { BsChevronRight } from "@react-icons/all-files/bs/BsChevronRight";



const HeaderMenu = () => {
  const dispatch = useDispatch();
  const ShowMenueFun = () => {
    dispatch(HeaderMenuFalse());
  };

  const [menuheader, setmenuheader] = useState(AllDepatment.slice(0, 8));
  const DisplyAllHandler = () => {
    if (menuheader.length <= 8) {
      setmenuheader(AllDepatment.slice(0, AllDepatment.length));
    } else if (menuheader.length > 8) {
      setmenuheader(AllDepatment.slice(0, 8));
    }
  };

  const refDiv = useRef();
  const Refef = useRef();
  const HideTottaly = (e) => {
    if (e.target === Refef.current || e.target.id === "button-hide") {
      refDiv.current.className = Style.div_data_headerHide;
      setTimeout(() => {
        ShowMenueFun();
      }, 200);
    }
  };
  return (
    <div ref={Refef} onClick={HideTottaly} className={Style.container}>
      <div id={"refDiv"} ref={refDiv} className={Style.div_data_header}>
        <div className={Style.div_top_menu}>
          <LinkUser fontColor={"#666"}/>
          <div className={Style.div_all_items}>
            <span className={Style.shope_by_title}>Shop By Department</span>
            {menuheader.map(({ name }, index) => (
              <span className={Style.sapn_products} key={index}>
                {name} <BsChevronRight />
              </span>
            ))}
            <b onClick={DisplyAllHandler} className={Style.sapn_products}>
              {(() => {
                if (menuheader.length <= 8) {
                  return (
                    <>
                      Show More <BsChevronDown />
                    </>
                  );
                } else if (menuheader.length > 8) {
                  return (
                    <>
                      Show Less <BsChevronUp />
                    </>
                  );
                }
              })()}
            </b>
          </div>
        </div>
      </div>
      <BsX id="button-hide" onClick={HideTottaly} />
    </div>
  );
};

export default HeaderMenu;
