import { Server } from "socket.io";
import Chat from "../../../../backend/db/schema/chat/index";
import User from "../../../../backend/db/schema/user";

import dbConnect from "../../../../backend/db/dbCinnect/index";

const SocketHandler = async (req, res) => {
  dbConnect();
  if (res.socket.server.io) {
    // console.log("Socket is already running");
  } else {
    // console.log("Socket is initializing");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;
    io.on("connection", async (socket) => {
      socket.on("input-change", async (msg) => {
        // socket.emit("update-input", msg);
        await Chat.create({ message: msg });
      });
      User.findOne({ user_ref: req.cookies.user_ref }).then((doc) => {
        console.log(doc);
        socket.emit("output-user", doc);
      });
      const doc = await Chat.find();
      socket.emit("output-nessage", doc);
    });
  }
  res.end();
};

export default SocketHandler;
