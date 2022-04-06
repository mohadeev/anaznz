import { Server } from "socket.io";
import { Demo, LogOutDemo } from "./Demo";
import dbConnect from "../../backend/db/dbCinnect/index";
import User from "../../backend/db/schema/user";

const SocketHandler = async (req, res) => {
  if (res.socket.server.io) {
    console.log("Socket is already running");
  } else 
    console.log("Socket is initializing");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;
    io.on("connection", async (socket) => {
      dbConnect();
      socket.on("send-cookie", async (msg) => {
        await User.findOne({ _id: msg }).then((document) => {
          const _id = document._id;
          const email = document.email;
          const name = document.name;
          const image = document.image;
          const First = [{name , _id.toHexString(), email, name, image}];
          console.log(First);
          if (msg !== null) {
            socket.emit("user-res", First);
          } else if (msg === null) {
            socket.emit("user-res", []);
          }
        });
      });
    });
  }
  res.end();
};

export default SocketHandler;
