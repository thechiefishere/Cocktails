import React from "react";
import { Link } from "react-router-dom";
import DrinkDetail from "./DrinkDetail";

const Card = ({ drink }) => {
  return (
    <article>
      <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      <div>
        <h2>{drink.strDrink}</h2>
        <h3>{drink.strGlass}</h3>
        <p>{drink.strAlcoholic}</p>
        <Link to={`/home/${drink.idDrink}`}>DETAILS</Link>
      </div>
    </article>
  );
};

export default Card;
