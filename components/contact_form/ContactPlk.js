import React from "react";
import Style from "../../styles/contactForm/ContactPlk.module.css";
import SocailMediaData from "../../DaysData/SocailMediaData";
import Link from "next/link";

const ContactPlk = () => {
    const Blank = "_blank"
  return (
    <div className={Style.ContactPlk_container}>
      {SocailMediaData.map(({ Name, Icon, content, Url }) => (
        <>
          <Link href={Url ? `${Url}` : "/contact-us/#"}>
            <a className={Style.href_link} target={Url ? Blank : ""}>
              <div className={Style.itme_name} key={Math.random()}>
                <span className={Style.item_what}>
                  <span className={Style.icon_item}>{Icon}</span>
                  {Name + ":"}
                </span>{" "}
                <p className={Style.content_item}>{content}</p>
              </div>
            </a>
          </Link>
        </>
      ))}
    </div>
  );
};

export default ContactPlk;
