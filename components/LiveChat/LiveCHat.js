import React, { useRef, useState, useEffect } from "react";
import { AiOutlineSend } from "@react-icons/all-files/ai/AiOutlineSend";
import Style from "../../styles/LiveChat/LiveChat.module.css";
import { BsChatSquareDotsFill } from "@react-icons/all-files/bs/BsChatSquareDotsFill";
import { FaArrowAltCircleUp} from "@react-icons/all-files/fa/FaArrowAltCircleUp";


import Image from "next/image";
function LiveCHat() {
  //   const toHideForm = useRef(null);

  //   const [ShowEl, setShowEl] = useState(true);

  //   const HideFunction = () => {
  //     if (ShowEl === false) {
  //       toHideForm.current.className = "Show_Form";
  //     } else if (ShowEl === true) {
  //       toHideForm.current.className = "THide_Form";
  //     }
  //     setShowEl(!ShowEl);
  //   };

  //   document.onscroll = function (ev) {
  //     if (
  //       window.innerHeight + window.scrollY >=
  //       document.body.offsetHeight - 100
  //     ) {
  //       toHideForm.current.className = "Show_Form";
  //     } else {
  //       toHideForm.current.className = "THide_Form";
  //     }
  //     setShowEl(!ShowEl);
  //   };
  //   window.onload = () => {
  //     setTimeout(() => {
  //       toHideForm.current.className = "Show_Form";
  //     }, 6000);
  //   };

  //Take to top


   const TakeToTop = () => {
       document.body.scrollTop = 600;
       document.documentElement.scrollTop = 0;
   };

  var Space = "---------------";
  const [quiMessage, setquiMessage] = useState("");

  var windowObjectReference;

  function openRequestedPopup() {
    if (window.screen.width >= 500) {
      windowObjectReference = window.open(
        "https://web.whatsapp.com/send?phone=0034643635962&text=Your Message :" +
          quiMessage +
          "%0A" +
          Space.repeat(6) +
          "%0AAbout : " +
          document.title +
          "%0ATo: " +
          "Support Ur Excursions"
      );
    } else if (window.screen.width <= 400) {
      windowObjectReference = window.open(
        "https://api.whatsapp.com/send?phone=34643635962&text=Your Message :" +
          quiMessage +
          "%0A" +
          Space.repeat(3) +
          "%0AAbout : " +
          document.title +
          "%0ATo: " +
          "Support Ur Excursions"
      );
    }
  }

  const [HideElment, setHideElment] = useState(true);
  const hideForm = () => {
    setHideElment(!HideElment);
  };
  return (
    <div>
      {HideElment ? (
        <div className={Style.THide_Form}>
          <div className={Style.div_live_chat}>
            <Image
              width={"15px"}
              height={"15px"}
              role="img"
              className={Style.emoji}
              alt="👋"
              src="https://s.w.org/images/core/emoji/13.0.0/svg/1f44b.svg"
            />{" "}
            Hi, How Can I help ?
          </div>
          <span onClick={hideForm} className={Style.span_live_chat}>
            X
          </span>
          <div className={Style.div_live_chat1}></div>
          <div className={Style.div_live_chat2}>
            <p>
              Our customer support team is here to answer your questions. Ask us
              anything!
            </p>
          </div>
          <div className={Style.div_live_chat3}></div>
          <div className={Style.div_live_chat4}>
            <input
              className={Style.input_live_chat4}
              method="POST"
              placeholder="Get Fast Reply"
              onChange={(e) => setquiMessage(e.target.value)}
            />
            <a onClick={openRequestedPopup}>
              <div>
                <AiOutlineSend />
                <takeToTopArro />
              </div>
            </a>
          </div>
        </div>
      ) : null}
      <button className={Style.buttonOfWHatIcon} onClick={hideForm}>
        <BsChatSquareDotsFill />
      </button>
      <button className={Style.buttonOfTopIcon} onClick={TakeToTop}>
        <FaArrowAltCircleUp />
      </button>
    </div>
  );
}

export default LiveCHat;
