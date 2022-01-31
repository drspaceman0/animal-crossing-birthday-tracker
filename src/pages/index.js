import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import VideoMusicOfHour from '../components/videoMusicOfHour.js';
import birthdays from './../assets/json/residentIdBirthday.json';
import Villager from '../components/villager.js';

const IndexPage = () => {
  const [villager, setVillager] = useState(null);
  const [hour, setHour] = useState(null);
  function getCurrentHour() {
    return new Date().getHours();
  }

  function getTimeUntilNextHour() {
    var currentHour = new Date();
    var nextHour = new Date();
    nextHour.setHours(nextHour.getHours() + 1, 0, 0, 0);
    return nextHour - currentHour;
  }

  function getBirthdayVillager() {
    var todaysDate = new Date().toLocaleDateString('en-us', { day: "numeric", month: "numeric" });
    const birthdayBoy = birthdays.filter(
      function (data) {
        return data.birthday === todaysDate
      }
    );
    const villagerID = birthdayBoy[0].id; // there might be more than 1 villager bday, just get 1st one for now

    // get data from ACNH api
    fetch(`https://acnhapi.com/v1a/villagers/${villagerID}`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setVillager(resultData)
      });
  }

  function showMessageForHire() {
    console.log("***** ");
    console.log("NEED A WEB DEVELOPER? ");
    console.log("freelance | contract-for-hire | full-time | part-time ");
    console.log("github: @drspaceman0 ");
    console.log("linkedin: @eric-marsh-415b1b112 ");
    console.log("***** ");
  }

  // on render
  useEffect(() => {
    const v = getBirthdayVillager();
    setVillager(v);
    const h = getCurrentHour();
    setHour(h);
  }, []);


  useEffect(() => {
    console.log("It is now the hour of " + hour)

    var waitTime = getTimeUntilNextHour();
    // set timer to update hour
    const timeout = setTimeout(() => {
      const h = getCurrentHour();
      setHour(h);

    }, waitTime);

    // get new villager if its a new day
    if (hour === 0 && villager) {
      const v = getBirthdayVillager();
      setVillager(v);
    }

    // clear timer in case
    return () => clearTimeout(timeout);
  }, [hour]);

  if (!villager) {
    return null;
  };

  showMessageForHire();
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="description" content="Celebrate today's villager birthday" />
        <title>Animal Crossing Birthday Tracker</title>
        {/* <link rel="canonical" href="http://ericmarshblog.com" /> */}
      </Helmet>

      <main className="h-full min-h-screen flex flex-col bg-leaves">
        <Villager villager={villager} />
        <VideoMusicOfHour hour={hour} />
      </main >


    </>
  );
}
//         id: d["id"],
//         name: d["name"]["name-USen"],
//         personality: d["personality"],
//         birthday: d["birthday"], //need to format this. rn its "9/3"=march 9th
//         species: d["species"],
//         gender: d["gender"],
//         chatchPhrase: d["catch-phrase"],
//         iconURI: d["icon_uri"],
//         imageURI: d["image_uri"],

export default IndexPage
