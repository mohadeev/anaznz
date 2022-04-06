import React from "react";

import Style from "../../../../../../styles/pages/user/userprofile/Userlogin/Store/Components/BoyFafstion8to20/clothing.module.css";
const Title = ({ Top, Bottom,  TitleName}) => {
  return (
    <>
      <div className={Style.container}>
        {Top && <div className={Style.devided}> </div>}
        <h3 className={Style.title}>{TitleName}</h3>
        {Bottom && <div className={Style.devided}> </div>}
      </div>
    </>
  );
};

export default Title;
