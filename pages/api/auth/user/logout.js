import dbConnect from "../../../../backend/db/dbCinnect/index";
import User from "../../../../backend/db/schema/user";
import nodemailer from "nodemailer";

export default async (req, res) => {
  dbConnect();
  const { method } = req;
  const { login } = req.body;
  const { password } = req.body;
  const Cookies = req.cookies.user_ref;
  // const UserUnHex = ``
  if (method === "PUT") {
    if (Cookies) {
      const filter = { _id: Cookies };
      const update = { login: false };
      User.findOneAndUpdate(filter, update).then(() => {
        res.json({ logout: "you log out", Cookies });
      });
    }else{
      res.json({message : "please login"})
    }
  } else {
    res.send("Sory cant get / ");
  }
};
