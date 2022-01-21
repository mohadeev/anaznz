import React, { useRef, useState } from "react";
import Style from "../styles/contact/Contact.module.css";
import Contact_us_Form from "../components/contact_form/Contact_us_Form";
import FirstPart from "../components/FirstPart/FirstPart";
import SomeText from "../components/AbouComponent/SomeText";
import ContactPlk from "../components/contact_form/ContactPlk";
import { AllArray } from "../DaysData/Fliter/AllArray";

function Contact_us() {
  const Conatac_info =
    "Our Team at Ur Exuersiones is at your service to answer any questions, give you detailed quotes about tours, and advise about the best times and places to visit. Whether you’re thinking about leading a tour or simply have questions, we’re here to help.";
  return (
    <div className={Style.father_div_contact_us}>
      <FirstPart
        TourName={"Discover The Morocco Tours and Circuits"}
        Tour_imnage={
          "https://www.turismomarruecos.net/wp-content/uploads/2020/09/IMG_Fondo_Formulario.jpg"
        }
      />

      <div className={Style.first_div_contact_us}>
        <SomeText
          TitleConntet={"Lets Go Travel with Us"}
          Content={Conatac_info}
        />
      </div>
      <div className={Style.second_child__div_contact_us}>
        <div className={Style.div_container}>
          <div className={Style.div_omage_cantact_us}>
            <ContactPlk />
          </div>
        </div>
        <div className={Style.div_contact_form}>
          <Contact_us_Form />
        </div>
        {/* {AllArray.map((itme) =>
          itme
            .filter(
              (item) =>
                item.id === "3-MARR-DES-MER-MARR" || "5-MARR-DES-MER-FES"
            )
            .map(({ name }) => name)
        )} */}
      </div>
    </div>
  );
}

export default Contact_us;
