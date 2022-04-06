import dbConnect from "../../../backend/db/dbCinnect/index";
import User from "../../../backend/db/schema/user";
import mongoose from 'mongoose'
import { Server } from "socket.io";


const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log("Socket is already running");
  } else {
    console.log("Socket is initializing");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;
    io.on("connection", (socket) => {
      socket.on("input-change", (msg) => {
        console.log(msg);
        socket.emit("update-input", msg);
      });
    });
  }
  res.end();
};


export default SocketHandler;

