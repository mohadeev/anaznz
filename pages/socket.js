import { useEffect, useState, useRef } from "react";
import SocketIOClient, { io } from "socket.io-client";
import { AllDepatment } from "../backend/AllDepatment";
import Link from "next/link";
import Cookies from "js-cookie";

// let socket = io.connect("http://localhost:3000/api/socket");
let socket;
const Home = () => {
  const [Message, setMessage] = useState("");
  const [Chat, setChat] = useState([]);
  const [SeachValue, useSeachValue] = useState(" user name Seach fro anything");
  // const socket = SocketIOClient.connect("http://localhost:3000", {
  //   path: "/api/socket",
  // });
  const sendCookie = Cookies.get("user_ref");
  useEffect(() => {
    const fetchData = async () => {
      socket = io();
      socket.connect();
      await fetch("//localhost:3000/api/socket");
      socket.emit("send-cookie", sendCookie);
      socket.on("output-message", (msg) => {
        setChat(msg);
        console.log(msg);
      });
    };
    fetchData();
    return () => {
      socket.disconnect();
    };
  } );

  useEffect( () => {
        const fetchData = async () => {

    socket = io();
    socket.connect();
    await fetch("//localhost:3000/api/socket");
    socket.emit("send-cookie", sendCookie);
    socket.on("output-message", (msg) => {
      setChat(msg);
      // console.log(msg);
    });
  }
    fetchData()
    return () => {
      socket.disconnect();
    };
  }, []);

  const onChangeHandler = (e) => {
    setMessage(e.target.value);
  };
  const DisptchData = (e) => {
    e.preventDefault();
    socket.emit("input-change", Message);
  };
  const Ref = useRef();
  return (
    <>
      {Chat.map((item, index) => (
        <h3 key={index}>{item.message}</h3>
      ))}
      <form>
        <input placeholder={SeachValue} onChange={onChangeHandler} />
        <button onClick={DisptchData}>Do it</button>
      </form>

      <Link href={"/contact-us"} passHref={true}>
        <h2>go to Conatact us</h2>
      </Link>
    </>
  );
};

export default Home;
