import React from 'react'
import SideBar from '../components/SideBar'
import Style from "../styles/Layout-css/TourLayout.module.css";

;

const TourLayout = ({children}) => {
    return (
      <div
        className={Style.div_layout_div_css}>
        {children}
        <SideBar />
      </div>
    );
}

export default TourLayout
TourLayout;