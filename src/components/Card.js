import React from "react";
import { Link } from "react-router-dom";

const Card = ({ drink }) => {
  return (
    <article className="card">
      <img
        className="card-img"
        src={drink.strDrinkThumb}
        alt={drink.strDrink}
      />
      <div className="card-details">
        <h1>{drink.strDrink}</h1>
        <h3>{drink.strGlass}</h3>
        <p>{drink.strAlcoholic}</p>
        <Link className="card-link" to={`/home/${drink.idDrink}`}>
          DETAILS
        </Link>
      </div>
    </article>
  );
};

export default Card;
