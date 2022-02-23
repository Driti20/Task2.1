import React from "react";
import Card3 from "./Card3";

const Cards3 = (props) => {
  const Data = [
    {
      name: "Standard",
      price: "$59.99/mo",
      cpu: "4 core @ 2.3 GHz",
      storage: "500GB (Mirrored) Storage",
      ram: "4 GB RAM",
      bandwith: "5 TB Bandwith",
      ip: "3 IP Address"
    },
    {
        name: "Medium",
        price: "$79.99/mo",
        cpu: "4 core @ 2.5 GHz",
        storage: "1TB (Mirrored) Storage",
        ram: "8 GB RAM",
        bandwith: "10 TB Bandwith",
        ip: "4 IP Address"
      },
      {
        name: "Premium",
        price: "$99.99/mo",
        cpu: "4 core @ 3.3 GHz",
        storage: "1.5TB (Mirrored) Storage",
        ram: "12 GB RAM",
        bandwith: "15 TB Bandwith",
        ip: "5 IP Address"
      },
      {
        name: "PremiumPRO",
        price: "$119.99/mo",
        cpu: "4 core @ 3.7 GHz",
        storage: "2GB (Mirrored) Storage",
        ram: "16 GB RAM",
        bandwith: "20 TB Bandwith",
        ip: "6 IP Address"
      },
  ];
  return (
    <>
      {Data.map((card3) => (
        <div className="card3">
          <Card3
            name={card3.name}
            price={card3.price}
            cpu={card3.cpu}
            storage={card3.storage}
            ram={card3.ram}
            bandwith={card3.bandwith}
            ip={card3.ip}
          />
        </div>
      ))}
    </>
  );
};
export default Cards3;
