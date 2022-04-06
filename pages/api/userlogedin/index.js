import { Server } from "socket.io";
import User from "../../../../backend/db/schema/user";
import Chat from "../../../../backend/db/schema/chat/index";
import dbConnect from "../../../../backend/db/dbCinnect/index";

const SocketHandler = async (req, res) => {
  dbConnect();
  if (res.socket.server.io) {
    console.log("Socket is already running loged");
  } else {
    console.log("Socket is initializing ");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;
    io.on("connection", async (socket) => {
      socket.on("input-change", async (msg) => {
        await Chat.create({ message: msg });
      });
      User.findOne({ user_ref: req.cookies.user_ref }).then((document) => {
        console.log(document);
                console.log("sdfsdfsdf");
        socket.emit("output-user", document);
      });
    });
  }
  res.end();
};

export default SocketHandler;
