import React, { useState, useRef } from "react";
import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp";
import Style from "../../styles/contactForm/contactForm.module.css";

function Contact_us_Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const divRif = useRef();
  const ShowAtt = () => {
    divRif.current.style.display = "flex";
  };
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const messageHandler = (e) => {
    setMessage(e.target.value);
  };
  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setTimeout(() => {
      setSent(false);
    }, 3000);
  };
  return (
    <div
      className={Style.div_of_form}
      onMouseDown={ShowAtt}
      onMouseLeave={() => {
        divRif.current.style.display = "none";
      }}
    >
      <div ref={divRif} className={Style.div_Contact_Form_attantion}>
        Thank you for choosing us to contact us this way, dear client we would
        like to let you know that we are doing some construction on this form
        for providing the best services and best user experience, please contact
        via email or WhatsApp onside of it
      </div>
      <form
        action="https://formsubmit.co/moroccostartour@gmail.com"
        method="POST"
        to="/"
      >
        <div className={Style.div_Contact_Form}>
          <span className={Style.TextContact_form}>
            <IoIosArrowUp /> Your Name : {name}
          </span>
          <input
            className={Style.input}
            placeholder="Enter Your Name"
            value={name}
            onChange={nameHandler}
          />
        </div>
        <div className={Style.div_Contact_Form}>
          <span className={Style.TextContact_form}>
            <IoIosArrowUp /> Email Adress : {email}
          </span>
          <input
            placeholder="Enter Your Email"
            value={email}
            onChange={emailHandler}
          />
        </div>

        <div className={Style.div_Contact_Form}>
          <span className={Style.TextContact_form}>
            <IoIosArrowUp /> Your Phone Number
          </span>
          <input placeholder="Enter Your Name" type="phone" />
        </div>

        <div className={Style.div_Contact_Form}>
          <span className={Style.TextContact_form}>
            <IoIosArrowUp /> Departing Date
          </span>
          <input
            placeholder="Date"
            className="textbox-n"
            type="Date"
            onFocus="(this.type='date')"
            id="date"
          />
        </div>
        <div className={Style.div_Contact_Form}>
          <span className={Style.TextContact_form}>
            <IoIosArrowUp /> Returning Date
          </span>
          <input
            placeholder="Date"
            className="textbox-n"
            type="Date"
            onFocus="(this.type='date')"
            id="date"
          />
        </div>

        <div className={Style.div_Contact_Form}>
          <span className={Style.TextContact_form}>
            <IoIosArrowUp /> Message : {message}
          </span>
          <textarea
            placeholder="Write us a Message and we will get you back soon"
            value={message}
            onChange={messageHandler}
          />
          <button className={Style.contact_us_btn} type="submit">
            {" "}
            {sent} Book Now <IoIosArrowUp />{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact_us_Form;
