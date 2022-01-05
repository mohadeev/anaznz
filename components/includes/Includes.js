import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { GiWaterBottle } from "@react-icons/all-files/gi/GiWaterBottle";
import { BiSupport } from "@react-icons/all-files/bi/BiSupport";
import { MdHotel } from "@react-icons/all-files/md/MdHotel";
import { BiRestaurant } from "@react-icons/all-files/bi/BiRestaurant";
import { FaSnowboarding } from "@react-icons/all-files/fa/FaSnowboarding";
import { RiBus2Line } from "@react-icons/all-files/ri/RiBus2Line";
import { FaGasPump } from "@react-icons/all-files/fa/FaGasPump";
import { FaCampground } from "@react-icons/all-files/fa/FaCampground";
import { GiCamel } from "@react-icons/all-files/gi/GiCamel";
import { TiGroup } from "@react-icons/all-files/ti/TiGroup";
import { GrAttraction } from "@react-icons/all-files/gr/GrAttraction";

export const Included = ({ Icon, Whatinclude }) => {
  return (
    <>
      <p>
        {Icon} {Whatinclude}
      </p>
    </>
  );
};

const Sttl = {
  color: "#071c55",
  fontSize: "16px",
  position: "relative",
  top: "0PX",
};
const St_div = {
  position: "relative",
};

const ArrayOffIncludes = [
  {
    icon: <RiBus2Line />,
    Include: "Transport",
    id: "EX",
  },
  {
    icon: <FaGasPump />,
    Include: "fuel.",
    id: "EX",
  },
  {
    icon: <MdHotel />,
    Include: "Accommodation (Half board).",
    id: "IMP",
  },
  ,
  {
    icon: <BiRestaurant />,
    Include: "Dinners.",
    id: "IMP",
  },
  ,
  {
    icon: <BiRestaurant />,
    Include: "Breakfasts.",
    id: "IMP",
  },
  ,
  {
    icon: <FaSnowboarding />,
    Include: "Sandbording (Optional).",
  },

  {
    icon: <FaCampground />,
    Include: "Nightin Desert Camp.",
  },
  {
    icon: <GiCamel />,
    Include: "Camel Trekkin.",
  },
  {
    icon: <BiSupport />,
    Include: "Support Team 24/h.",
    id: "EX",
  },
  {
    icon: <TiGroup />,
    Include: "Guide.(Optional)",
    id: "EX",
  },

  {
    icon: <GrAttraction />,
    Include: "Attraction.",
    id: "EX",
  },
  {
    icon: <GiWaterBottle />,
    Include: "Bottel of Water Per PX each Day.",
    id: "EX",
  },
];

const IsExcursion = ArrayOffIncludes.filter((word) => word.id === "EX");
const IsImperail = ArrayOffIncludes.filter(
  (word) => word.id === "IMP" || word.id === "EX"
);

export const IncludesConatainer = ({ WhatType }) => {
  return (
    <>
      <div style={St_div}>
        <h6 style={Sttl}> Includes : </h6>
        {(() => {
          if (WhatType === "IsExcursion") {
            return (
              <div>
                {IsExcursion.map(({ icon, Include }) => (
                  <Included
                    key={Math.random()}
                    Icon={icon}
                    Whatinclude={Include}
                  />
                ))}
              </div>
            );
          } else if (WhatType === "IsImperail") {
            return (
              <div>
                {IsImperail.map(({ icon, Include }) => (
                  <Included key={Math.random()} Icon={icon} Whatinclude={Include} />
                ))}
              </div>
            );
          } else {
            return (
              <div>
                {ArrayOffIncludes.map(({ icon, Include }) => (
                  <Included
                    key={Math.random()}
                    Icon={icon}
                    Whatinclude={Include}
                  />
                ))}
              </div>
            );
          }
        })()}
      </div>
    </>
  );
};
export const NoIncluded = ({ Icon, WhatNotinclude }) => {
  const persons = [
    "Drinks.",
    "Lunches.",
    "Entrance to monuments (Optional).",
    "Tipping(Optional).",
    "Flights.",
    "Any Privat Expenses.",
  ];
  return (
    <>
      <>
        {WhatNotinclude}
        {persons.map((NotIncludes) => (
          <p key={Math.random()}>
            <AiOutlineClose /> {NotIncludes}
          </p>
        ))}
      </>
    </>
  );
};

export const NotIncludesConatainer = () => {
  return (
    <div>
      <h6 style={Sttl}>not Includes : </h6>
      <NoIncluded />
    </div>
  );
};
