import React from "react";
import Card from "./Card";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const Cards = () => {
  const { drinks, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (!drinks) {
    return <h2 className="no-cocktail">No Cocktail To Display</h2>;
  }

  return (
    <section>
      <h2 className="card-heading">Cocktails</h2>
      <div className="cards">
        {drinks.map((drink) => {
          return <Card key={drink.idDrink} drink={drink} />;
        })}
      </div>
    </section>
  );
};

export default Cards;
