import React from "react";
import Style from "../../styles/AbouComponent/DivRaf.module.css";

const DivRaf = () => {
  const OurHistory = (
    <p>
      <b>Simple:</b> because we love Morocco and we want you to fall in love
      too.
      <br /> For this we will show you the Morocco that does not appear in the
      guides, the one that cannot be seen from a crowded bus. <br />
      We will organize your trip just as you imagine it, avoiding the stress of
      spending hours looking for accommodation, transportation and activities.
      <br />
      We accompany you at all times. We take care of picking you up, taking you
      wherever you want and being by your side if problems arise.
      <br />
      We will be your hosts in Morocco, and as is customary here, rest assured
      that we will entertain you.
    </p>
  );
  return (
    <div className={Style.reflect_div}>
      <div className={Style.reflect_div_contenet}>
        <h3>Why travel with Ur Excursions</h3>
        <p>{OurHistory}</p>
        <h4>
          &quot;BECAUSE, AS GOOD HOSTS, OUR GOAL IS FOR YOU TO VISIT US
          AGAIN.&quot;
        </h4>
      </div>
      <div className={Style.div_of_to_reflect_divs}>
        <div className={Style.div_to_reflect1}></div>
      </div>
    </div>
  );
};

export default DivRaf;
