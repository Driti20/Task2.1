import React from "react";
import Card2 from "./Card2";

const Cards2 = (props) => {
  const Data = [
    {
      name: "BlueHost",
    },
    {
      name: "Hostinger",
    },
    {
      name: "A2 Hosting",
    },
    {
      name: "DreamHost",
    },
    {
      name: "SiteGround",
    },
    {
      name: "GoDaddy Hosting",
    },
    {
      name: "GreenGeeks",
    },
    {
      name: "IONOS (1&1) Hosting",
    },
    {
      name: "HostPapa",
    },
  ];
  return (
    <>
      {Data.map((card2) => (
        <div className="card2">
          <Card2
            name={card2.name}
          />
        </div>
      ))}
    </>
  );
};
export default Cards2;
