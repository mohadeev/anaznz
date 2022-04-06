import React from "react";
import Style from "../../../styles/Modals/laoding/mesponsemessage.module.css";
import { useRouter } from "next/router";
import LoadlingComponents from "./LoadlingComponents";


const ResponseMessage = () => {
  const Router = useRouter();
  const Login = () => {
    Router.push("/account/login");
  };
  return (
    <div className={Style.loader_container}>
      <div className={Style.sidebar}><LoadlingComponents /></div>{" "}
      <div className={Style.animation}></div>
      <div className={Style.message_container}>
        <div className={Style.message}>
          <b className={Style.first_p}>you have been logged out instagram</b>
          <p className={Style.second_p}>
            Abre WhatsApp en tu teléfono Toca Menú o Configuración y selecciona
            Dispositivos vinculados Cuando se active la cámara, apunta tu
          </p>
          <p onClick={Login} className={Style.last_p}>
            Sing in
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResponseMessage;
