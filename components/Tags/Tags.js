import Style from "../../styles/TagsCss/Tags.module.css";
import { Faq } from "../Faq/Faq";
import { AdditionalInfo } from "../AdditionalInfo/AdditionalInfo";


const Tags = ({ children }) => {
  return (
    <div>
      <AdditionalInfo />
      <Faq />
      <h5 className={Style.title_tour_bem}>Hightls on This Tour</h5>
      <div className={Style.div__tags}>
        <a className={Style.item}>Morocco Star tour</a>
        <a className={Style.item}>Morocco tour</a>
        <a className={Style.item}> Sahara Tours</a>
        {children}
        <a className={Style.item}>Morocco tour</a>
        <a className={Style.item}>Morocco Star Sahara Desert Tours</a>
        <a className={Style.item}>Morocco Sahara Tours</a>
      </div>
    </div>
  );
};

export default Tags;

export const TagItm =(NewTag)=>{
  return <a className={Style.item}>{NewTag}</a>;
}
