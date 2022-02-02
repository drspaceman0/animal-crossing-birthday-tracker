import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import VideoMusicOfHour from '../components/videoMusicOfHour';
import birthdays from '../assets/json/residentIdBirthday.json';
import Villager from '../components/villager';
import VillagerType from '../types/villager';




const IndexPage = () => {
  const [villager, setVillager] = useState<VillagerType | undefined>(undefined);
  const [hour, setHour] = useState<number>(new Date().getHours());

  function getSetCurrentHour(): void {
    var d: number = new Date().getHours()
    setHour(d);
  }

  function getTimeUntilNextHour(): number {
    var currentHour = new Date();
    var nextHour = new Date();
    nextHour.setHours(nextHour.getHours() + 1, 0, 0, 0);
    return nextHour.getTime() - currentHour.getTime();
  }

  function getSetBirthdayVillager(): void {
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
        var myVillager: VillagerType = resultData;
        if (myVillager === undefined) {
          console.log("error");
        } else {
          setVillager(myVillager);
        }
        return;
      });
  }

  function showMessageForHire(): void {
    console.log("***** ");
    console.log("NEED A WEB DEVELOPER? ");
    console.log("freelance | contract-for-hire | full-time | part-time ");
    console.log("github: @drspaceman0 ");
    console.log("linkedin: @eric-marsh-415b1b112 ");
    console.log("***** ");
  }

  // on render
  useEffect(() => {
    getSetBirthdayVillager();
  }, []);


  useEffect(() => {
    console.log("It is now the hour of " + hour)

    var waitTime = getTimeUntilNextHour();
    // set timer to update hour
    const timeout = setTimeout(() => {
      getSetCurrentHour();
    }, waitTime);

    // get new villager if its a new day
    if (hour === 0 && villager) {
      getSetBirthdayVillager();
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
        <link rel="icon" type="image/png" href={villager["icon_uri"]} sizes="16x16" />
        <link rel="canonical" href="https://animal-crossing-birthday-tracker.netlify.app/" />
      </Helmet>

      <main className="h-full min-h-screen flex flex-col bg-leaves">
        <Villager v={villager} />
        <VideoMusicOfHour hour={hour} />
      </main >
    </>
  );
}

export default IndexPage
