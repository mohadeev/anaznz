import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";
import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp";
import Style from "../styles/toursModal/Tour-ItitniretyItems.module.css";
import { useSelector, useDispatch } from "react-redux";

export const DayTour = ({
  DayNumer,
  TourId,
  TourName,
  IsFirst,
  Blockstyle,
  FocuseOne,
  FocuseTwo,
  FocuseTree,
  FocuseFour,
}) => {
  const [HideElment, setHided] = useState(true);
  const hidElenet = useRef();
  const [Dayyyys, setDayyyys] = useState([""]);
  const Disss = () => {
    setHided(!HideElment);
  };
  const [HostName, setHostName] = useState("");
  useEffect(() => {
    setHostName(window.location.hostname);
  });

  useEffect(() => {
    const Window = <b>{window.document.title}</b>;
    const TourPrograme = <b>{TourName}</b>;
    const FocuseKeyone = <b>{FocuseOne}</b>;
    const FocuseKeyTwo = <b>{FocuseTwo}</b>;
    const FocuseKeyTree = <b>{FocuseTree}</b>;
    const FocuseKeyFour = <b>{FocuseFour}</b>;
    setDayyyys([
      {
        id: "MAR-OUR-DES",
        day: "Marrakech - High Atlas - AitBenHaddou - Dades Valley.",
        tour: (
          <p>
            Your {TourPrograme}around the eastern half of Morocco you will
            travel in style in a modern air-conditioned 4WD/minibus or any
            services you had booked. Our Staff will pick you up from your
            Location Hotel or Airport... your
            {FocuseKeyone} Will start at 08:30 AM and escort you to the
            departure point. We will travel over the High Atlas Mountain range
            and descend into the Kasbah of Ait Ben Haddou. Ait Ben Haddou
            fortified since the 11th century during the Almoravid period. , The
            strategic importance of the site is due to its location in the Onila
            valley as well as one of the main trans-Saharan trade routes. The
            Tizi-n-Tika pass, accessible by this road, was one of the few to
            cross the Atlas Mountains, crossing Marrakech and the Draa Valley on
            the edge of the Sahara. Other kasbahs and palaces were located along
            this route, such as the neighboring Tamdaghet to the north. Here you
            will feel almost like you have stepped back in time to the days of
            gladiators, desert nomads, and ancient trading markets. Lunch on the
            first day will be taken in the Kasbah at Ait Ben Haddou after the
            sightseeing tour has finished.Our next stop on our first day will be
            at Ouarzazate. you will enjoy the scenery of a city where most
            common movies have filmed such as “The Mummy (1999 & 2001)”,
            “Lawrence of Arabia (1962)”, and “Gladiator (2000)” without
            forgetting “Game of Thrones” in 2013 are among the many films which
            have taken in a city called The Gateway to the Desert.In the city,
            we can take stop at a café before venturing onto the Dades Valley.
            Once there you can relax and unwind in your private room at a local
            traditional Riad in Dades with an en-suite bathroom and enjoy the
            culinary delights of a Moroccan evening dinner.
          </p>
        ),
      },
      {
        id: "MARR-HIG-OUR",
        day: "Marrakech - High Atlas - AitBenHaddou - Ouarzazate.",
        tour: (
          <p>
            Your 5 Days Tour From Marrakech to Fes and Merzouga around the
            eastern half of Morocco you will travel in style in a modern
            air-conditioned 4WD / minibus or any service you had booked. Our
            staff will pick you up at your Hotel or Airport. Your 5 Days Tour
            From Marrakech to Fes and Merzouga will start at 08:30 AM and we
            will escort you to the starting point. and our driver will take us
            through the High Atlas Mountains. The rugged beauty and height of
            these peaks will have you glued to the window in our minibus as we
            wind through the mountain roads. Along the way are several Berber
            villages and we will have the chance to stop and photograph the
            towering scenery before heading to Kasbah Ait Ben Haddou. It will be
            another couple of hours before we get here, but the landscape will
            remain impressive at all times. Kasbah Ait Ben Haddou is a fortified
            village that is home to a half dozen markets and merchants' houses.
            Our tour of this ancient building will be guided. Just like
            Ouarzazate - which will be the next stop on this tour - Kasbah Ait
            Ben Haddou is a popular location for Hollywood film crews and
            production companies. You will see exactly why it is a great setting
            for several movies set in biblical times, ancient Arab legends, or
            films set thousands of years ago. Sodom and Gomorrah (1963), The Man
            Who Wanted to be King (1975), and The Jewel of the Nile (1985) all
            used the ancient fortified village of Kasbah Ait Ben Haddou. Our 5
            Days Tour From Marrakech to Fes and Merzouga , where we will tour
            this city and see the movie studios. Ouarzazate is a highly prized
            location for film producers, many of which flock here especially for
            its old buildings, golden scenery, and stunning backdrops. One gets
            the feeling of having taken a trip back in time while exploring the
            antique kasbahs, the golden clay edifices, and don't be amazed if
            you see a Hollywood film team shooting a movie here. Among the
            blockbusters filmed here are the classic Bond movie Daylight (1987),
            Lawrence of Arabia (1962), and The Last Temptation of Christ (1988).
            Afterward, we will continue our 5 Days Tour From Marrakech to Fes
            and Merzouga to a traditional Hotel or Riad depending on what you
            book to spend the night in your accommodation.
          </p>
        ),
      },
      {
        id: "MARR-FES",
        day: "Marrakech - Fes.",
        tour: <p>Tour not avalible</p>,
      },
      {
        id: "MARR-CAS",
        day: "Marrakech - Casablanca.",
        tour: <p>Tour not avalible</p>,
      },
      {
        id: "MARR-VIT",
        day: "Marrakech - Casablanca.",
        tour: (
          <p>
            Investigating the Marrakech souks is an unmissable experience, and
            this day tour will ensure you make the most of your time. Walk with
            your guide through the labyrinth of market stalls, craft shops, and
            craftsmen's districts, where you'll learn about medicinal herbs, see
            a rug woven demonstration, see where leather hides are being dyed,
            and bargain for gifts and souvenirs. exploring Marrakech . "southern
            pearl" (the red city of Morocco). and the second oldest Imperial
            city which has for centuries been an important stop for traders and
            travelers. The guide ensures that you will see the most important
            spots with historical and cultural interests including the Bahia
            Palace, Saadian tombs, Ben Youssef Koranic school, as well as the
            largest traditional souk in Morocco. After lunch in a typical
            Moroccan restaurant near the main square, you’ll visit the Koutoubia
            mosque, Djemaa el-Fna, the famous UNESCO World Heritage Site which
            is one of the main cultural spaces in Marrakech.. Then head to
            Majorelle garden for a visit. Thereafter, you’ll have free time to
            walk, explore many more things about Marrakesh and also its
            citizens’ lifestyle on your own. Check into your accommodation.
          </p>
        ),
      },
      {
        id: "MARR-CHI-ESS",
        day: "Marrakech - Chichaoua  Essaouira.",
        tour: (
          <p>
            Your trip from Marrakech to Essaouira starts with a drive through
            the Haouz plain. In the village of Chichaoua, halfway, you will make
            a stop for a cup of coffee before continuing your journey. On the
            road to Essaouira, you will pass through the argan tree forest where
            you will see some nanny goats climbing the trees. Be sure to stop
            and take some photos before driving on to Essaouira. To see how
            argan oil (also called liquid gold or Moroccan oil) is extracted,
            visit a local women's cooperative and learn how some fine cosmetics
            are made on-site from the rich argan oil. From here, you will travel
            on to Essaouira. Upon arrival, you can explore the wonderful city at
            your leisure. From experience, it is easy to discover Essaouira on
            your own: The locals are very friendly, the medina is fairly small
            (compared to other old cities in Morocco) and the local streets are
            fine. You definitely don't need a guide to visit the city. You can
            easily explore the medina on your own, as the streets are arranged
            facing each other, unlike any other maze-like medinas in Morocco.
            First, you can visit the port with its fishery port and the old
            Portuguese forts. Here you can still see the medieval cannons lined
            up and overlooking the Atlantic Ocean. Continue to the medina (old
            town) with its well-preserved 18th-century fortress. Century. The
            most important landmark of the medina is the scala, built to protect
            against foreign aggression from the sea. Continue to Bab Laalouj
            (one of the main gates of Essaouira) and then to the Mellah (the old
            Jewish quarter). On the way there, various art stores, galleries,
            souvenir stores, and thuya wood art stores are lined up. You can
            have a tasty seafood lunch at one of the local cafes before heading
            to the Kasbah, which is known as a military bastion. If you love the
            seaside, you can take a walk on the Mogador sandy beach and watch
            the residents play beach ball. If you are brave enough, you can also
            join a game for a few minutes. The local people in Essaouira are
            very friendly! If not, you can take a sunbath while watching the
            amateurs play kitesurfing or windsurfing. In the late afternoon,
            drive point where your riad/hotel is located dinner and overnight.
          </p>
        ),
      },
      //---------------------------MARRAKECH-END---------------------------//

      //----------------------------------BORDER-------------------------------------------------//

      //---------------------------DADES-BEGIN---------------------------//

      {
        id: "DES-GOR-MER",
        day: "Dades Valley - Todra Gourges - Erfoud - Merzouga Desert.",
        tour: (
          <p>
            After Breakfast and showering at your Hotel, we will depart your{" "}
            {TourPrograme} from Dades Valley heading to Sahara Desert Merzouga
            passing from Todra Gorges (the highest gorge in Morocco where
            alpinists make their break, we have a short walk through its grey
            and pink high canyons and take a break and picture for good memories
            ) and also contains a river, palm trees, also currently one of the
            most popular rock climbing destinations in Morocco. after this
            visit, continue towards Tinjdad and Touroug where we’ll have lunch
            then to Erfoud which will feel the beginning Saharan oasis of
            Tafilalet, we will continue our way to, arriving at Merzouga Sahara
            Desert. you will be welcomed by a Saharan cup of tea enjoy the view
            of the Erg Chaabi in Camp next to the Dunes of Merzouga, after a
            while, you will take Camels for a Ride into Erg Chaabi Dunes to
            enjoy watching the fantastic Calm sunset letter on you will continue
            to Camp where your dinner will be served to you by traditional way,
            after dinner you can join Berber Nomads party and enjoy Sky with
            full of Billions of Starts overnight in your Traditional camp.
          </p>
        ),
      },
      {
        id: "DES-OUR-MARR",
        day: "Dades Valley - Ouarzazate - AitBenHaddou - High Atlas - Marrakech",
        tour: (
          <p>
            On the this day of our {Window}, we recommend you to wake up early
            for the beautiful sunrise. After breakfast & shower take the camel
            ride and back to Merzouga town. Start our journey back to Marrakech
            though Rissani (Tafilalt), Alinf, Tazarine and N’kob. We will travel
            along the stunning Draa Valley, lined with old Kasbahs, Berber
            villages and palm groves. Our tour continues to Marrakech through
            Agdez town and the Anti-Atlas Mountains (1660m). We will have lunch
            in Ouarzazate before we continue our way to Marrakech across the
            high Atlas Mountains; in the evening we will reach to Marrakech drop
            you off on your accommodation.
          </p>
        ),
      },

      //---------------------------DADES-END---------------------------//

      //----------------------------------BORDER-------------------------------------------------//

      //---------------------------MERZOUGA-BEGIN---------------------------//
      {
        id: "MER-HIG-MARR",
        day: "Merzouga Desert - High Atlas - Marrakech",
        tour: (
          <p>
            we recommend you to wake up early to have a "Date with the sunrise".
            In the Sahara Desert, waking up early is a "must" to contemplate the
            most spectacular sunrise you have ever seen on top of dunes next to
            the Camp. you can return to the camp anytime you want where a
            delicious breakfast is waiting for you. After recovering our
            strength we start our last day of the trip crossing the arid
            pre-desert area where we will meet the "acacia", a typical tree of
            this landscape. We will start our journey back to Marrakech passing
            through Rissani (Tafilalt), Alinf, Tazarine, and N'kob. We will
            drive through the breathtaking Draa Valley, bordered by antique
            Kasbahs, Berber villages, and palm plantations. Our trip will
            continue to Marrakech via the town named Agdez and the Anti-Atlas
            mountains (1660m). We will have lunch in Ouarzazate before
            continuing our way to Marrakech across the High Atlas Mountains. We
            will have some libre time for lunch in the city and in the afternoon
            we resume our trip to Marrakech arriving at around 8 pm. Transfer to
            the hotel or your Airport or whatever location in Marrakech and end
            of our services. and hope you had enjoyed your {TourPrograme} to
            Marrakech and Merzouga's services.
          </p>
        ),
      },
      {
        id: "VIT-MER-DAY",
        day: "Visit Merzouga Area - Errg CHabbi Dunes - Khamlia - Nomad People.",
        tour: (
          <p>
            Merzouga is flanked by colorful little villages and vast landscapes
            that you can discover with the aid of 4×4. On this 4×4 tour of
            Merzouga departs from our site and then takes an exciting drive
            across desert dunes dotted with black volcanic rocks, taking you to
            some villages, on the track made famous by the Paris Dakar Rally.
            Visit the stationary lake of Merzouga. Next, stop in the village of
            Khamlia, listen to some Gnawa music ( is optional) to blend in and
            perhaps drink some mint tea with the pagans. Note that for the Gnawa
            Musicians, a CD buy (costs about €10) or a tip is needed, so one of
            the two is mandatory, otherwise you can just skip it and carry on
            straight to the Lead Mines of Mefes. Mefes is a small almost
            deserted village on the other side of the Erg Chebbi dunes, known
            for its mines of minerals such as iron, zinc and lead in
            particularly. These mines were put in place since the French
            colonialization. Afterwards, we will pursue our 4x4 journey to visit
            the nomads who live in Berber style tents on the rim of the dunes of
            Erg Chebbi. The last thing you will encounter on this 4×4 excursion
            in Merzouga is the gardens of the village of Hassi Labied.
            Frequently depicted as a cozy and dusty town, Merzouga is located on
            the verge of the world-famous Sahara Desert, which extends over most
            of the northern part of the African mainland. This little Moroccan
            town is located close to the major sand dunes, known as Erg Chebbi.
            All in all, Merzouga is a quite delightful destinations that offers
            a plethora of fun and exciting activities despite its humble nature.
            In addition to the wonderful accommodations, private villas and
            unpretentious hotels, Merzouga also invites visitors to have a hot
            cup of coffee at its wide range of internet cafes and good
            restaurants. In the afternoon, you can either chill out in your
            lodging, or visit the dunes and gaze at the sunset once again, and
            why not an hour of quad riding in the dunes to end the day (not
            included in the price of the trip). The night is spent in the camp
            next to the dunes.
          </p>
        ),
      },
      {
        id: "MER-IFR-FES",
        day: "Merzouga Desert - Ziz Valley - Azrou - Ifran - Fes.",
        tour: (
          <p>
            Continuing our {TourPrograme} , wake up to watch the sunrise over
            the dune near the camp, you will have a delicious breakfast and take
            a shower at the camp, will continue towards Fez through the Ziz
            Valley the second longest river in Morocco, we will cross the middle
            atlas mountains where we will enjoy amazing views, free time for
            lunch in a restaurant then in the afternoon we will head towards Fez
            we will stop in the cedar forest in Azrou where we will see the wild
            monkeys, a short walk in the forest to take pictures.... We will
            stop in Ifrane, the little Switzerland of Morocco, and finally
            arrive in Fez in the late afternoon to drop you off at your hotel
            where will be end of Day of your {FocuseKeyTwo} overnight in Hotel/Raid.
          </p>
        ),
      },
      //---------------------------MERZOUGA-END---------------------------//

      //----------------------------------BORDER-------------------------------------------------//

      //----------------------------OURZAZATE BEGIN---------------------------//
      {
        id: "OUR-DES-GOR",
        day: "Ouarazazate - Rose Valley - Bomalen Dades - Todra Gorges.",
        tour: (
          <p>
            On this Day Morning departure from your hotel or riad in Ouarzazate.
            Begin your day by visiting the Rose Valley going through the big
            Skoura palm grove; a beautiful place to contemplate more than
            700.000 palms and numerous kasbahs that are built in the surrounding
            area. In this Valley damascenes, roses are raised for cosmetic use
            such as the valued rosewater. The Rose Festival is held here
            annually in May, it is an important museum for Moroccan culture. the
            next visit will be at the Todra Gorge. the Todra Gorge is a canyon
            in the eastern part of the High Atlas Mountains in southern Morocco
            near the town of Tinghir. Both the Todra River and Dades River have
            carved out the cliff-sided canyons. The drive is scenic along newly
            built roads. Drive past the mouth of the Gorge and up to the
            villages of Ait Hani and Tamtattouchte. The Todra Gorge extends from
            the village of Tamtattouchte to Tinghir. The Todra Gorge, with
            cliffs rising dramatically up to 300m on each side of a narrow
            corridor, is a spectacle with its gigantic rock walls changing color
            to create magical effects with the sunlight. In the morning, when
            the sun permeates through the bottom of the gorge, the rock changes
            from pink rose to deep ochre gradually through the rest of the day.
            A day at the Todra Gorge offers the option of extreme climbing,
            hiking, and sightseeing. A fun and strenuous hike involve a
            three-hour loop used by donkeys and mules heading north of the main
            gorge to Tizgui, home of palms and ancient kasbahs. For a lighter
            hike, try the Petit Gorge entering at the mouth of the gorge. The
            mouth is an enclosed section with overhanging cliffs and is the most
            dramatic scenery in the gorge. Climbing in the Todra Gorge is an
            unforgettable experience. Lunch at the foot of the Todra Gorge at a
            charming Moroccan cafe. Another option is to have lunch inside the
            Todra Gorge, or at one of the restaurants beneath the overhanging
            cliffs with a panoramic view. After lunch, continue by car, hiking,
            or riding horseback to explore the surrounding area and Berber
            villages. Afternoon options can include a visit to the picturesque
            village of Tamtattouchte with gorgeous red earthen houses located at
            the other end of the gorge, overnight in Hotel or Riad according or
            any accommodation you have booked.
          </p>
        ),
      },
      //----------------------------OURZAZATE END---------------------------//

      //----------------------------------BORDER-------------------------------------------------//

      //----------------------------Gourges BEGIN---------------------------//
      {
        id: "OUR-DES-GOR",
        day: "Todra Gourges - Tinjdad - Erfoud - Merzouga Desert.",
        tour: (
          <p>
            After having breakfast and a shower, we will leave the accommodation
            in the Toudra Gorges towards for the Sahara desert of Merzouga.
            Berber villages are scattered all along the way. We will pass
            through Tinjdad, Jorf, those villages are full of palm trees and are
            also called Gateway to the desert because they are located next to
            the desert of Merzouga, then and Erfoud where we will feel the
            beginning of the Saharan oasis of Tafilalet known for Fossils we
            will stop to see the fabrics where the stong cut to pieces and
            become a tool or decoration. ..ext, And then continue to Merzouga,
            by Saharawi nomad and traditional way we will welcome you by a cup
            of mint tea in their Berber camp next to the dunes then while
            relaxing in Merzouga camp we will ride the camels in the dunes of
            erg Chebbi. It is a great experience to imagine riding a camel in
            erg Chebbi where the silence of the Desert is dominant, we arrive at
            the camp, leave the camels and walk up to a high dune to sandboard
            and watch the sunset. Dinner is served under a Berber tent with
            Berber drum music. We spend the night in your private tent with a
            Bullion starry sky.
          </p>
        ),
      },
      //----------------------------Gourges END---------------------------//

      //----------------------------------BORDER-------------------------------------------------//

      //----------------------------FES BEGIN---------------------------//
      {
        id: "FES-IFR-MER",
        day: "Fes - Ifran - Azrou - Ziz Valley - Merzouga Desert.",
        tour: (
          <p>
            Pick up from your locations: riad/hotel ext... in Fes, around 8:30
            am by our Staff Driver, Guide... and start your 5-day desert tour
            from Fes to Marrakech via Merzouga, and ride to Merzouga via the
            Middle Atlas Mountains, we will enjoy a pleasant driving through
            Berber villages... We will stop in the lovely town of Ifrane ( known
            as the "Moroccan Switzerland"), a charming ski area, and proceed to
            Azrou, a major craft center specializing in the working of
            cedarwood. We stop in the cedar forest and take pictures of the
            monkies Then we carry on to Zaida small village, we continue our
            travel day towards the city of Midelt, where you can have a lunch
            break. next on the way to Errachidia, you will notice how the
            scenery changes, giving a touch of the desert. You will cross the
            road of Paris Dakar, the tent of the Berber nomads who live in the
            loneliness of the Sahara. Once you arrive at the famous dunes of Erg
            Chebbi, we are pleased to ready camels and there is an hour for you
            to enjoy a camel ride and observe the magnificent sunset while you
            ride on the camel leading to the camp Oasis where is the luxurious
            or standard according to your booking details, the tent where you
            will spend the night. Witness the beautiful sunset as you ride to
            the oasis where there is a camp. A full night in a typical nomadic
            tent or beneath a spectacular starry sky outside the tent in the
            Merzouga desert dune will give you truly remarkable recollections of
            your desert trip. You can also choose to spend the night with an
            experienced camel guide drumming.
          </p>
        ),
      },
    ]);
  }, []);

  return (
    <>
      {Dayyyys.filter((x) => x.id === TourId).map(({ id, day, tour }) => (
        <div key={id} className={Style.first_item}>
          <div className={Style.first_child_item}>
            <span className={Style.day_tour_name_item}>{DayNumer}</span>
            <h3 onClick={Disss} className={Style.title_tour_title}>
              {day}
            </h3>
            {HideElment}
            {IsFirst ? (
              ""
            ) : (
              <button onClick={Disss} className={Style.button_tour_show}>
                {HideElment ? <IoIosArrowDown /> : <IoIosArrowUp />}
              </button>
            )}
          </div>
          <div>
            <p
              className={Style.title_tour_content}
              ref={hidElenet}
              style={
                HideElment ? { display: "none" } : { display: `${Blockstyle}` }
              }
            >
              {tour}
            </p>
            <p
              className={Style.title_tour_content}
              ref={hidElenet}
              style={IsFirst ? { display: " block" } : { display: "none" }}
            >
              {tour}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
