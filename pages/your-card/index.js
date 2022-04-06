// import React, { useState, ReactDOM, useEffect, useRef } from "react";
// import { useSelector } from "react-redux";
// import ToursCard from "../../components/ToursCard/ToursCard";
// import { useDispatch } from "react-redux";
// import { removetoBasket } from "../../redux/BasketSlice/Basket";
// import { AllArray } from "../../DaysData/Fliter/AllArray";
// import { PayPalButtons } from "@paypal/react-paypal-js";
// import RelaredItems from "../../components/Basket/RelaredItems";
// import Style from "../../styles/redux/Basket/index.module.css";
// import BasketCompo from "../../components/Basket/BasketCompo.js";
// import { Button } from "../../components/AbouComponent/SomeText";
// import Contact_us_Form from "../../components/contact_form/Contact_us_Form";
// import hhh from "../../public/images/empty_cart.png";
// import Image from "next/image";
// import { TiTimes } from "@react-icons/all-files/ti/TiTimes";
// import Link from "next/link";

const Index = () => {
  // const AllItems = useSelector((state) => state.Basket.basket);
  // const ItemsId = AllItems.map((itme) => itme.id);
  // const DaysOfToursString = AllItems.map((itme) => itme.days);
  // const DaysOfTours = parseFloat(DaysOfToursString);

  // const Dispatch = useDispatch();
  // const ClearStore = () => {};

  // const SubTotal = AllItems.map((iteem) => parseInt(iteem.price));
  // const SubTotalLater = SubTotal.reduce((a, b) => a + b, 0);
  // const sumDescount = AllItems.map((iteem) => parseInt(iteem.descount));
  // const Descount = sumDescount.reduce((a, b) => a + b, 0);
  // const [ContactDispaly, setContactDispaly] = useState(false);
  // const reff = useRef();
  // const [Window, setwindow] = useState({});

  // const [Document, setDocumenr] = useState();
  // const RefCurrent = reff.current;
  // const [Location, setLocation] = useState("");
  // useEffect(() => {
  //   setwindow(window);
  //   setLocation(location.pathname);
  //   const yourCard = "/your-card";
  //   if (Location === yourCard && AllItems.length > 0) {
  //     window.onscroll = function (ev) {
  //       if (
  //         Window.innerHeight + window.scrollY >=
  //         document.body.offsetHeight - 50
  //       ) {
  //         reff.current.className = Style.div_style3;
  //       } else if (document.documentElement.scrollTop < 100) {
  //         reff.current.className = Style.div_style1;
  //       } else if (document.documentElement.scrollTop >= 100) {
  //         reff.current.className = Style.div_style2;
  //       }
  //     };
  //   }
  // }, [Window, RefCurrent, Location]);
  // const ContactDispalyFunc = () => {
  //   setContactDispaly(true);
  // };
  // const Related = AllArray.map((item) => item);

  return (
    // <div className={Style.index_container}>
    //   {ContactDispaly ? (
    //     <div className={Style.div_contact_us}>
    //       <Contact_us_Form />
    //       <button
    //         onClick={() => setContactDispaly(false)}
    //         className={Style.i_love_it}
    //       >
    //         <TiTimes />
    //       </button>
    //     </div>
    //   ) : null}
    //   {AllItems.length <= 0 ? (
    //     <div className={Style.div_empty}>
    //       <p className={Style.p}> Hmm, seems Your cart is empty !!.</p>
    //       <div className={Style.empty_cart_images}></div>
    //     </div>
    //   ) : (
    //     <div className={Style.info_basket_container}>
    //       <p className={Style.p}>
    //         Your list of tours and activities that you saved for your travel
    //         research
    //       </p>
    //       <div className={Style.div_all_items_in_basket}>
    //         {AllItems.map(
    //           ({ name, image, price, url, descount, IsInBasket, id }) => (
    //             <ToursCard
    //               key={Math.random()}
    //               Image={image}
    //               TourName={name}
    //               Price={price}
    //               Url={url}
    //               Descount={descount}
    //               Days={""}
    //               Nights={""}
    //               IsInBasket={true}
    //               id={id}
    //             />
    //           )
    //         )}
    //         <div></div>
    //       </div>
    //       <p className={Style.p_bold}>Related searches : </p>
    //       <div className={Style.div_related_items}>
    //         {AllArray.map((itme) =>
    //           itme
    //             .filter(
    //               (item) => item.days == DaysOfTours && item.id !== `${ItemsId}`
    //             )
    //             .map((allitmes) => (
    //               <>
    //                 <RelaredItems
    //                   key={Math.random() * 2000}
    //                   DeImage={allitmes.image}
    //                   Name={allitmes.name}
    //                   Desc={allitmes.desc}
    //                   Url={allitmes.url}
    //                 />
    //               </>
    //             ))
    //         )}
    //       </div>
    //     </div>
    //   )}
    //   <div className={Style.side_bar_container}>
    //     {/*--------------------------------Side Bar Basket--------------------------------*/}
    //     {(() => {
    //       if (AllItems.length <= 0) {
    //         return (
    //           <div className={Style.side_bar_empty_basket}>
    //             <p className={Style.p}>
    //               you have {AllItems.length} service, Add Some Services
    //               then come back{" "}
    //             </p>
    //             <Link href={"/tours-and-circuits"} passHref={true}>
    //               <button className={Style.style_explore_button}>
    //                 Add Your Service
    //               </button>
    //             </Link>
    //           </div>
    //         );
    //       } else if (AllItems.length > 0) {
    //         return (
    //           <div ref={reff} className={Style.div_style1}>
    //             <p className={Style.p}>
    //               Welcome to Ur Excursions! 10% off. Select this option at
    //               checkout. See details
    //             </p>
    //             <p className={Style.p}>
    //               Subtotal ( {AllItems.length}
    //               {" service"}
    //               {AllItems.length > 1 ? "s " : " "}
    //               ):<b>{SubTotalLater} $ </b> and descount : {Descount} $
    //             </p>
    //             <PayPalButtons
    //               createOrder={(data, actions) => {
    //                 return actions.order.create({
    //                   purchase_units: [
    //                     {
    //                       amount: {
    //                         value: SubTotalLater,
    //                       },
    //                     },
    //                   ],
    //                 });
    //               }}
    //               onApprove={(data, actions) => {
    //                 return actions.order.capture().then((details) => {
    //                   const name = details.payer.name.given_name;
    //                   alert(`Transaction completed by ${name}`);
    //                 });
    //               }}
    //             />
    //             <p className={Style.p}>
    //               {" "}
    //               do you have any doupt please take a step and contact us{" "}
    //             </p>
    //             <button
    //               onClick={ContactDispalyFunc}
    //               UlrButton={"/contact-us"}
    //               className={Style.style_explore_button}
    //             >
    //               Contact us{" "}
    //             </button>
    //           </div>
    //         );
    //       }
    //     })()}
    //   </div>
    // </div>
    <div>HEE</div>
  );
};

export default Index;
