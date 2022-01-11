import React from "react";
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import { FaPhone } from "@react-icons/all-files/fa/FaPhone";
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";
import { FaEnvelopeOpenText } from "@react-icons/all-files/fa/FaEnvelopeOpenText";
import { SiTeamspeak } from "@react-icons/all-files/si/SiTeamspeak";

const SocailMediaData = [
  {
    Name: "Address",
    Icon: <FaMapMarkerAlt />,
    content: "Lavaca Street, Suite 2000 Austin, TX 24141",
  },
  {
    Name: "Phone",
    Icon: <FaPhone />,
    content: "+34-444-4444-00",
    Url: "tel:+44-785-7895",
  },
  {
    Name: "WhatsApp",
    Icon: <FaWhatsapp />,
    content: "urexcuersion@gmail.com",
    Url: "https://api.whatsapp.com/send?phone=917021525474",
    target: "_blank",
  },
  {
    Name: "E-mail",
    Icon: <FaEnvelopeOpenText />,
    content: "urexcuersion@gmail.com",
    Url: "tel:+44-785-7895",
  },

  {
    Name: "Houre Opne",
    Icon: <SiTeamspeak />,
    content: "24h/7",
  },
];

export default SocailMediaData;
