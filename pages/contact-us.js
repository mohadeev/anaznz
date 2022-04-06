import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import socketIOCLIENT from "socket.io-client";

import { AllDepatment } from "../backend/AllDepatment";
import Link from "next/link";
import useSWR from "swr";

const socket = socketIOCLIENT("ws://localhost:3000/api/test");

const Home = () => {
  // const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const [Message, setMessage] = useState("");
  const [Chat, setChat] = useState([]);
  const [SeachValue, useSeachValue] = useState(" user name Seach fro anything");
  // const { data, error } = useSWR("/api/test", fetcher);
  useEffect( () => {
const fetchMyAPI = async ()=>{

    socket.on("connect", () => {
      console.log("hhhhhh works fuck ");
    });
    socket.on("output-nessage", (msg) => {
      setChat(msg);
      // setMessage(msg);
    });
}
fetchMyAPI();
    return socket.on("output-nessage", () => {});
  });

  const onChangeHandler = (e) => {
    setMessage(e.target.value);
    // socket.emit("Message-change", e.target.value);
  };
  const DisptchData = (e) => {
    e.preventDefault();
    socket.emit("input-change", Message);
  };
  const Ref = useRef();
  return (
    <>
      {/* {Chat.map((item, index) =>
        item.map((itt) => <h3 key={index}>{itt.message}</h3>)
      )} */}
      {/* <from onSubmit={DisptchData}> */}
      <input placeholder={SeachValue} onChange={onChangeHandler} />
      <button onSubmit={DisptchData}>Do it</button>
      {/* </from> */}
      <Link href={"/contact-us"} passHref={true}>
        <h2>go to Conatact us</h2>
      </Link>
    </>
  );
};

export default Home;
