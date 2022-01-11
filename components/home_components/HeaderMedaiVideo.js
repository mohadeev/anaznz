import Link from "next/link";
import React from "react";
import Style from "../../styles/home_components/HeaderMedaiVideo.module.css";
import { Button } from "../../components/AbouComponent/SomeText";

const HeaderMedaiVideo = () => {
  return (
    <div className={Style.home_div_slider}>
      <div className={Style.home_overlay}></div>
      <div className={Style.div_home_header_firs_div}>
        <h6 className={Style.decoration_text}>Fun and affordabl</h6>
        <b className={Style.powered_our_team} style={{ color: "#F3941E" }}>
          Ur
        </b>

        <div className={Style.to_docoraton}>
          <h4 className={Style.powered_our_team}>Excursions</h4>
          <div className={Style.span_dicoration}></div>
        </div>
        <button>EXPLORE THE MAGIC NOW</button>
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
  );
};

export default HeaderMedaiVideo;
