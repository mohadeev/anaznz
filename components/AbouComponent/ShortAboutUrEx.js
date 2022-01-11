import React from "react";
import Style from "../../styles/AbouComponent/ShortAboutUrEx.module.css";
import { ImMagicWand } from "@react-icons/all-files/im/ImMagicWand";
import { Button } from "../../components/AbouComponent/SomeText";


const ShortAboutUrEx = () => {
  return (
    <div className={Style.div_second_abour_us}>
      <div className={Style.div_about_us_info_p}>
        <h5 className={Style.what_to_know_about_tit}>
          Tailor-made Vacations: organized Tours that bear your name and surname
        </h5>
        <p className={Style.what_to_know_about_p}>
          Ur Excursions is a travel company specialized in providing travel
          Packages and Holidays to Morocco that are tailored to the needs and
          interests of our customers. We work to offer you a personal travel
          experience that guides you through the Morocco that you want to know,
          not the one others want you to see!...
          <br />
          Indulge yourself, make a wish. We will make sure it becomes true
          <ImMagicWand />.
        </p>
        <Button
          UlrButton={"/tours-and-circuits"}
          Width={"auto"}
          className={Style.style_explore_button}
          TextButton="EXPLORE NOW"
        />
      </div>
      <div className={Style.div_about_us_info_img}>
        <div className={Style.css_our_photo}></div>
      </div>
    </div>
  );
};

export default ShortAboutUrEx;
