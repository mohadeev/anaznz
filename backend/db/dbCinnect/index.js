import mongoose from "mongoose";

const connnection = {};
const conectUrl = process.env.MONGO_DB_CONECT;
const dbConnect = async () => {
  if (connnection.isConnected) {
    return;
  }
  const db = await mongoose.connect(conectUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  connnection.isConnected = db.connections[0].readyState;

};

export default dbConnect;
