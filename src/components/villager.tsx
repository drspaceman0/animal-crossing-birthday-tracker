import React, { useState, useEffect } from "react";


const Villager = ({ v }) => {
  // const Villager = (propVillager: VillagerType | undefined) => {
  const [villager, setVillager] = useState(v);

  useEffect(() => {
    setVillager(v);
  }, [v])

  if (!villager) {
    return null;
  };

  return (
    <section className="w-full p-2 ">
      <div className="bg-coralPink p-2 rounded-lg m-2 max-w-md mx-auto shadow-md">
        <div className="py-8 rounded-lg bg-whiteSmoke">
          <h1 className="w-5/6 max-w-lg mx-auto mb-6 md:mb-12   px-2 py-2  rounded-full font-bold text-center text-2xl leading-normal md:text-3xl lg:text-4xl md:!leading-tight bg-coralPink acFont text-whiteSmoke" >Happy Birthday<br />{villager["name"]["name-USen"]}!</h1>
          <div className="grid grid-cols-1 gap-6">
            <div className="rounded-full glow-villager w-fit mx-auto  ">
              <img className="rounded-full w-32 h-32 md:w-42 md:h-42 " src={villager["image_uri"]} alt={villager["name"]["name-USen"]} />
            </div>
            <div className="bg-bubblePink w-fit py-2 mx-auto">
              <h3 className="leading-normal w-auto p-2 px-6 rounded-full font-normal text-center text-md md:text-3xl lg:text-4xl acFont text-msgTextColor" >"{villager["catch-phrase"]}"</h3>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
export default Villager;