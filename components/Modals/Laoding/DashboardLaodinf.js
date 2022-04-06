import React from "react";
import Style from "../../../styles/Modals/laoding/dashboardlaoding.module.css"; 
import LoadlingComponents from './LoadlingComponents';

const DashboardLaoding = () => {
  return (
    <div className={Style.loader_container}>
      <div className={Style.sidebar}><LoadlingComponents /></div>{" "}
      <div className={Style.animation}>
        <div className={Style.loader}></div>
      </div>{" "}
    </div>
  );
};

export default DashboardLaoding;
