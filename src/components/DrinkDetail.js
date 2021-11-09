import React from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const DrinkDetail = () => {
  const { idDrink } = useParams();
  const { drinks } = useGlobalContext();
  const drink = drinks.find((drink) => drink.idDrink === idDrink);

  const ingredients = () => {
    let allIngredients = "";
    allIngredients += ` ${drink.strIngredient1}`;
    allIngredients += ` ${drink.strIngredient2}`;
    allIngredients += ` ${drink.strIngredient3}`;
    allIngredients += ` ${drink.strIngredient4}`;

    return allIngredients;
  };

  return (
    <article className="detail">
      <Link className="link" to="/home">
        Back Home
      </Link>
      <h1 className="detail-drink">{drink.strDrink}</h1>
      <div className="drink">
        <img
          className="detail-img"
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
        />
        <div className="all-categories">
          <div className="detail-category">
            <h3 className="detail-category-key">Name:</h3>
            <h3 className="detail-category-val">{drink.strDrink}</h3>
          </div>
          <div className="detail-category">
            <h3 className="detail-category-key">Category:</h3>
            <h3 className="detail-category-val">{drink.strCategory}</h3>
          </div>
          <div className="detail-category">
            <h3 className="detail-category-key">Info:</h3>
            <h3 className="detail-category-val">{drink.strAlcoholic}</h3>
          </div>
          <div className="detail-category">
            <h3 className="detail-category-key">Glass:</h3>
            <h3 className="detail-category-val">{drink.strGlass}</h3>
          </div>
          <div className="detail-category">
            <h3 className="detail-category-key">Instructions:</h3>
            <h3 className="detail-category-val">{drink.strInstructions}</h3>
          </div>
          <div className="detail-category">
            <h3 className="detail-category-key">Ingredients:</h3>
            <h3 className="detail-category-val">{ingredients()}</h3>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DrinkDetail;
