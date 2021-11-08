import React from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";

const DrinkDetail = () => {
  const { idDrink } = useParams();
  const { drinks } = useGlobalContext();
  const drink = drinks.find((drink) => drink.idDrink === idDrink);

  const ingredients = () => {
    let allIngredients = "Hel";
    allIngredients += ` ${drink.strIngredient1}`;
    allIngredients += ` ${drink.strIngredient2}`;
    allIngredients += ` ${drink.strIngredient3}`;
    allIngredients += ` ${drink.strIngredient4}`;

    return allIngredients;
  };

  return (
    <article>
      <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      <div>
        <h3>Name:</h3>
        <h3>{drink.strDrink}</h3>
      </div>
      <div>
        <h3>Category:</h3>
        <h3>{drink.strCategory}</h3>
      </div>
      <div>
        <h3>Info:</h3>
        <h3>{drink.strAlcoholic}</h3>
      </div>
      <div>
        <h3>Glass:</h3>
        <h3>{drink.strGlass}</h3>
      </div>
      <div>
        <h3>Instructions:</h3>
        <h3>{drink.strInstructions}</h3>
      </div>
      <div>
        <h3>Ingredients:</h3>
        {console.log("ingredient are ", ingredients())}
        <h3>{ingredients()}</h3>
      </div>
    </article>
  );
};

export default DrinkDetail;
