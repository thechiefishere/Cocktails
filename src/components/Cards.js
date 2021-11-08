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

          <h2>Cocktails</h2>
          {drinks.map((drink) => {
            return <Card key={drink.idDrink} drink={drink} />;
          })}
        </div>
      )}
    </>
  );
};

export default Cards;
