import nodemailer, { sendMail, createTransport } from "nodemailer";
const accountSid = process.env.PUBLIC_KEY_FOR_SMS;
const authToken = process.env.SECRET_KEY_FOR_SMS;
import Client from "twilio";
const client = new Client(accountSid, authToken);
//
const Handler = (req, res) => {
  const Body = JSON.parse(req.body);
  const Email = Body.map((item) => item.email);
  const Name = Body.map((item) => item.name);
  const Phone = Body.map((item) => item.phone);
  const Subject = Body.map((item) => item.subject);
  const DateArrive = Body.map((item) => item.dayOfAriving);
  const DateDupert = Body.map((item) => item.dayOfDuparture);
  const Adutls = Body.map((item) => item.adults);
  const Childs = Body.map((item) => item.childs);
  const Message = Body.map((item) => item.message);
  const MessageSent = Body.map((item) => item.MessageSent);

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "skendoulmohamed@gmail.com",
      pass: process.env.PASSWORD_GMAIL,
    },
  });

  let opton = {
    from: `"${Name}" <skendoulmohamed@gmail.com>`, // sender address
    to: "skendoulmohamed@gmail.com", // list of receivers
    replyTo: `${Email}`, // list of receivers
    subject: `${Subject}`, // Subject line
    text: `${Message}`, // plain text body
    html: `<div> Sender Email Addrees : <b>${Email}</b></div>
    <div> Sender Name : <b>${Name}</b></div>
    <div> Sender Name : <b>${Phone}</b></div>
    <div> Cliets Number : <b>${Adutls}</b></div>
    <div> Cliets Number : <b>${Childs}</b></div>
    <div> Arrival Date : <b>${DateArrive}</b></div>
    <div> Dupurt Date : <b>${DateDupert}</b></div>
    <div> Message : <p>${Message} <br /> This Message was sent from Our Contact Form.</p></div>
    `,
  };

  transporter.sendMail(opton, (err) => {
    if (err) {
      MessageSent = false;
    } else {
      MessageSent = true;
    }
  });

  const SendToUser = () => {
    setTimeout(() => {
      const OptoinSendToUser = {
        from: `"Hello im send you from " <skendoulmohamed@gmail.com>`, // sender address
        to: `${Email}`, // list of receivers
        replyTo: `skendoulmohamed@gmail.com`, // list of receivers
        subject: `${Subject}`, // Subject line
        text: `${Message}`, // plain text body
        html: ` thank you for sending to us we would let you know that we have recieved you message our team will be in contact with you soon`,
      };
      transporter.sendMail(OptoinSendToUser, (err) => {
        if (err) {
          MessageSent = false;
        } else {
          MessageSent = true;
        }
      });
    }, 100);
  };
  SendToUser();

  client.messages
    .create({
      body: "Hello Mohamed you have a new Submite from Your From",
      from: "+16204904607",
      to: "+34643635962",
    })
};
export default Handler;
