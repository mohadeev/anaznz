import dbConnect from "../../../../backend/db/dbCinnect/index";
import User from "../../../../backend/db/schema/user";
import nodemailer from "nodemailer";

const Login = async (req, res) => {
  dbConnect();
  const { method } = req;
  const { email } = req.body;
  const { password } = req.body;

  //
  if (method === "POST") {
    const filter = { email: email };
    const update = { login: true };
    User.findOneAndUpdate(filter, update).then(
      User.findOne({ email: email }).then((document) => {
        if (document) {
          const user_ref = document._id.toHexString();
          const email = document.email;
          const username = document.name;
          const image = document.image;
          const Resdocument = {
            email,
            username,
            image,
            user_ref,
          };
          res.json({ user: Resdocument });
        } else if (!document) {
          res.json({ error: "this email was not finded" });
        }
      })
    );
  } else if (method === "GET") {
    // User.findOne({ user_ref: req.cookies.user_ref }).then((Document) => {
    //   res.json(Document);
    // });
    res.json({ sdsdsdsdsdsdsdsd: "sdsdsdklsdklsldklsdlksdlksdlksdk" });
  }
};
export default Login;
//
