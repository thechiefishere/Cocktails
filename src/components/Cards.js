import React from "react";
import Card from "./Card";
import SearchBox from "./SearchBox";
import { useGlobalContext } from "../context";

const Cards = () => {
  const { drinks, loading } = useGlobalContext();

  return (
    <>
      {loading ? (
        <SearchBox />
      ) : (
        <div>
          <SearchBox />

          <h2 className="card-heading">Cocktails</h2>
          <div className="cards">
            {drinks.map((drink) => {
              return <Card key={drink.idDrink} drink={drink} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;
