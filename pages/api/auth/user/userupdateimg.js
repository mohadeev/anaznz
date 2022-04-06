import dbConnect from "../../../../backend/db/dbCinnect/index";
import User from "../../../../backend/db/schema/user";
import mongoose from "mongoose";
import multer from "multer";
const userupdateimg = (req, res) => {
  dbConnect();
  console.log(req.method);
  const { method } = req;
  const Cookies = req.cookies.user;
  if (method === "PUT") {
    if (Cookies) {
      const filter = { email: Cookies };
      const update = { image: req.body };
      User.findOneAndUpdate(filter, update).then(() => {
        // User.findOne({ email: Cookies }).then((doc) => console.log(doc));
        res.json({ logout: "you log out", Cookies });
      });
    }
  }
};
export default userupdateimg;
