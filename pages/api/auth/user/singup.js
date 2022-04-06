import dbConnect from "../../../../backend/db/dbCinnect/index";
import User from "../../../../backend/db/schema/user";
import nodemailer from "nodemailer";
import multer from "multer";
import upload from "multer";
import mongoose from "mongoose";

const Singup  = async (req, res) => {
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
      } else {
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
          User.create({
            email,
            name,
            password,
            login: true,
          }).then((doc) => {
            User.findOne({ email: email }).then((document) => {
              sendEmail();
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
              console.log(Resdocument);
              res.status(200).json({ user: Resdocument });
            });
          });
        } catch (error) {
          res.status(500).json(error);
        }
      }
    });
  } else {
    res.json({ message: "can not get to" });
  }
};
export default Singup 
