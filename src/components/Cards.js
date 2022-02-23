import React from "react";
import Card from "./Card";

const Cards = (props) => {
  const Data = [
    {
      name: ".COM",
      price: "$5.99/yr",
      description: "Instand of $10.99/yr",
    },
    {
      name: ".AL",
      price: "$55.99/yr",
      description: "Instand of $10.99/yr",
    },
    {
      name: ".NET",
      price: "$7.99/yr",
      description: "Instand of $10.99/yr",
    },
    {
      name: ".HEALTH",
      price: "$7.99/yr",
      description: "Instand of $10.99/yr",
    },
    {
      name: ".CO.UK",
      price: "$3.99/yr",
      description: "Instand of $10.99/yr",
    },
    {
      name: ".ORG",
      price: "$15.99/yr",
      description: "Instand of $10.99/yr",
    },
    {
      name: ".CO",
      price: "$26.33/yr",
      description: "Instand of $10.99/yr",
    },
    {
      name: ".SEA",
      price: "$26.33/yr",
      description: "Instand of $10.99/yr",
    },
  ];
  return (
    <>
      {Data.map((card) => (
        <div className="card">
          <Card
            name={card.name}
            price={card.price}
            description={card.description}
          />
        </div>
      ))}
    </>
  );
};
export default Cards;
