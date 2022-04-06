import dbConnect from "../../../../backend/db/dbCinnect/index";
import User from "../../../../backend/db/schema/user";
import nodemailer from "nodemailer";
import multer from "multer";
import upload from "multer";

export default const SingUpe = async (req, res) => {
  dbConnect();
  const { method } = req;
  const { email } = req.body;
  const { name } = req.body;
  const { password } = req.body;

  const sendEmail = () => {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "skendoulmohamed@gmail.com",
        pass: process.env.PASSWORD_GMAIL,
      },
    });
    const OptoinSendToUser = {
      from: `"New Guest" <skendoulmohamed@gmail.com>`,
      to: `${email}`,
      replyTo: `skendoulmohamed@gmail.com`,
      subject: ` Welcome ${name}`,
      text: `${""}`,
      html: `Welcome to you at our Store`,
    };
    transporter.sendMail(OptoinSendToUser, (err) => {
      if (err) {
        console.log(err + "there waas an error");
      } else {
        console.log("Sent to user ");
      }
    });
  };
  //user send message on singup

  if (method === "POST") {
    User.findOne({ email: email }).then((Document) => {
      if (Document) {
        res.json({ Message: "Sorry this Email is Exist" });
      } else if (!Document) {
        try {
          User.create({ email, name, password, login: true, c_user : _id}).then(
            (doc) => {
              User.findOne({ email: email }).then((document) => {
                sendEmail();
                res.status(200).json({ user: document });
              });
            }
          );
        } catch (error) {
          res.status(500).json(error);
        }
      }
    });
  } else {
    res.json({ message: "can not get to" });
  }
};
export default SingUpe  
