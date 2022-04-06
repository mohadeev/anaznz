import { Server } from "socket.io";
import Chat from "../../backend/db/schema/chat/index";
import User from "../../backend/db/schema/user";
import dbConnect from "../../backend/db/dbCinnect/index";
import { Demo } from "./Demo";


const SocketHandler = async (req, res) => {
  // dbConnect();
  let SocketCookie
  if (res.socket.server.io) {
    console.log("Socket is already running");
  } else {
    console.log("Socket is initializing");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;
    io.on("connection", async (socket) => {
      socket.on("send-cookie", async (msg) => {
        const UserFinded = await User.findOne({
          _id: msg,
        }).then((doc) => {
            socket.emit("user-res", doc);
          console.log(doc);
        });
        SocketCookie = msg; 
      })
      socket.on("input-change", async (msg) => {
        socket.emit("update-input", msg);
        await Chat.create({ message: msg });
      });
      const doc = await Chat.find();
      // console.log(doc);
      socket.emit("output-message", doc);
      console.log(SocketCookie);
    });
    
  }
  res.end();
};

export default SocketHandler;
