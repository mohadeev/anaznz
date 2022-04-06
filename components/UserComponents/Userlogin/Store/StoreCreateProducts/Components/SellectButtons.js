import React from 'react'
import Link from "next/link";
import Style from "../../../../../../styles/Modals/components/sellectButtons.module.css";
import { useRouter } from "next/router";

const SellectButtons = ({Item , LinkItem , Key , UrlKey}) => {
const { asPath, pathname } = useRouter();
  return (
    <div className={Style.div_sellect_info} key={Key}>
      <Link href={asPath + UrlKey + LinkItem} ><a>{Item}</a></Link>
    </div>
  );
}

export default SellectButtons