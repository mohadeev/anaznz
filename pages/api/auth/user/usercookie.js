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
      socket.on("cookies", async (databack) => {
        console.log(databack);
        if (databack) {
          await User.findOne({ user_ref: databack }).then((doc) => {
            console.log(doc);
            socket.emit("output-user", doc);
          });
        }
      });
    });
  }
  res.end();
};

export default SocketHandler;
