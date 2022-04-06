import mongoose from "mongoose";
// import UserSchema from "../user/index";

const ChatShema = mongoose.Schema({
  name: String,
  message: String,
});

// export default mongoose.models.User || mongoose.model('products', UserSchema)
const Chat = mongoose.models.chat || mongoose.model("chat", ChatShema);
export default Chat;
