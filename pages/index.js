import React from "react";
import Style from "../styles/Home.module.css";
import Seo from "../components/Seo";
import Link from "next/link";
import HomeDestenatons from "../components/home_components/HomeDestenatons";
import Chooseus from "../components/home_components/Chooseus"
import DivRaf from "../components/AbouComponent/DivRaf";
import FamouseDest from "../components/home_components/FamouseDest";

const index = ({ datas }) => {
  return (
    <div className={Style.home_container}>
      <head>
        <title>Ur Excuersions || Home</title>
      </head>
      <Seo />

      <div className={Style.home_div_slider}>
        <div className={Style.home_overlay}></div>
        <div className={Style.div_home_header_firs_div}>
          <h6 className={Style.decoration_text}>Fun and affordabl</h6>
          <h3 className={Style.sitename}>
            {" "}
            <b style={{ color: "#F3941E" }}>Ur</b>
            <br /> Excuersions
          </h3>
          <Link href="/" passHref={true}>
            <button className={Style.button_home_explore}>EXPLORE NOW</button>
          </Link>
        </div>
        <div className={Style.div_home_header_second_div}>
          {" "}
          <iframe
            src="https://www.youtube.com/embed/yo38KP4ikfg&amp;t=20s?autoplay=1&amp;loop=1&amp;enablejsapi=1&amp;&amp;playerapiid=featuredytplayer&amp;controls=0&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;color=white&amp;iv_load_policy=3&amp;theme=light&amp;wmode=transparent&amp;origin=https://xalucatours.com&amp;playlist=yo38KP4ikfg&amp;t=20s&amp;mute=1"
            frameBorder="0"
            allow="autoplay"
            id="widget2"
            style={{
              height: "100%",
              width: "100%",
              marginTop: "0",
              marginLeft: "0",
            }}
          ></iframe>
        </div>
      </div>
      {/*---------------------------------------------------------------------------------*/}
      <div className={Style.div_second_abour_us}>
        <div className={Style.div_about_us_info_p}>
          <h5 className={Style.what_to_know_about_tit}>
            What Do You Know About US
          </h5>
          <p className={Style.what_to_know_about_p}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has not only
            five centuries
          </p>
          <button className={Style.button_home_explore}>EXPLORE NOW</button>
        </div>
        <div className={Style.div_about_us_info_img}>
          <div className={Style.css_our_photo}></div>
        </div>
      </div>
      <Chooseus />
      <HomeDestenatons ArraySlice={3} />

      <DivRaf />
      <FamouseDest ByWhat={"id"} />
    </div>
  );
};

export default index;
