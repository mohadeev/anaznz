import React, { useState } from "react";
import Style from "../../styles/footer/footer.module.css";
import Image from "next/image";
import { MenuData } from "../Header/Header";
import Link from "next/link";
import { SocailMediaData } from "../socialmedia/Socialmedia";
import SomeText from "../AbouComponent/SomeText";
import SocailMediaData2 from "../../DaysData/SocailMediaData";
import Gellary from "../Gellary";

const Footer = () => {
  const AbtComany = (
    <p className={Style.our_word}>
      We believe brand interaction is key in communication. Real innovations and
      a positive customer experience are the heart of successful communication.
    </p>
  );

  const [Payment, setPayment] = useState([
    "/images/stripe.png",
    "/images/paypla.png",
    "/images/visa.png",
  ]);
  return (
    <div className={Style.div_footer_container}>
      <div
        style={{ backgroundImage: `url('/images/header.png')` }}
        className={Style.div_wayes}
      ></div>
      <div style={{ backgroundColor: "" }} className={Style.div_footer}>
        <div className={Style.ovely}>
          <div className={Style.about_company}>
            <Link href="/" passHref={true}>
              <div
                className={Style.logo}
                style={{
                  backgroundImage: `url('/images/800px-Amazon_logo.svg.c2a7d719.png')`,
                }}
              ></div>
            </Link>
            {AbtComany}
            <b className={Style.quickLink}>Find us on </b>
            <div className={Style.div_socail_icons}>
              {SocailMediaData.map(({ icon, link }) => (
                <a
                  key={Math.random()}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className={Style.icon_link}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className={Style.ContactPlk_container}>
            <b className={Style.quickLink}>Contact </b>
            {SocailMediaData2.map(({ Name, Icon, content, Url }) => (
              <>
                <Link
                  key={Math.random()}
                  href={Url ? `${Url}` : "/contact-us/#"}
                >
                  <a className={Style.href_link} target={Url ? "_blank" : ""}>
                    <div className={Style.itme_name}>
                      <span className={Style.icon_item}>{Icon}</span>
                      <p className={Style.content_item}>{content}</p>
                    </div>
                  </a>
                </Link>
              </>
            ))}
            <b className={Style.quickLink}>Our Financial Tools</b>
            <div className={Style.div_gellary_item}>
              {Payment.map((item) => (
                <Image
                  alt={"image-all-Financial-Tools"}
                  key={Math.random()}
                  width={"60px"}
                  height={"30px"}
                  src={item}
                  className={Style.where_you_can_see_us}
                />
              ))}
            </div>
          </div>
          <div className={Style.mune_itmes}>
            <b className={Style.quickLink}>Quick Link </b>
            {MenuData.map(({ name, link }) => (
              <li key={Math.random()} className={Style.li_nav_bar}>
                <Link href={link} passHref={true}>
                  {name}
                </Link>
              </li>
            ))}
            <li className={Style.li_nav_bar}>
              <Link href={"/"} passHref={true}>
                Work With us
              </Link>
            </li>
          </div>
          <div className={Style.Payment}>
            <b className={Style.quickLink}> Gellarey</b>
            <Gellary />
          </div>

          <div className={Style.powered_our_team_div}>
            <div className={Style.to_docoraton}>
              {" "}
              <span className={Style.powered_our_team}>
                {" "}
                All Right Resrved © 2022. Powered by
                <Link href={"/about-us"} passHref={true}>
                  <b className={Style.about_us_b}> Ur Excursions</b>
                </Link>{" "}
              </span>
              <div className={Style.span_dicoration}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
