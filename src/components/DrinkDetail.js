import React, { useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const DrinkDetail = () => {
  const { idDrink } = useParams();
  const [drink, setDrink] = React.useState({});
  const [loading, setLoading] = useState(true);

  const fetchDrink = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${idDrink}`);
      const data = await response.json();
      if (data.drinks) {
        const {
          strDrink: name,
          strCategory: category,
          strAlcoholic: info,
          strGlass: glass,
          strInstructions: instruction,
          strDrinkThumb: image,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
        } = data.drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
        ];
        const newDrink = {
          name,
          category,
          info,
          glass,
          instruction,
          image,
          ingredients,
        };

        setDrink(newDrink);
      } else {
        setDrink(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [idDrink]);

  React.useEffect(() => {
    fetchDrink();
  }, [idDrink, fetchDrink]);

  if (loading) {
    return <Loading />;
  }

  if (!drink) {
    return <h2>No Cocktail To Display</h2>;
  }

  return (
    <article className="detail">
      <Link className="link" to="/">
        Back Home
      </Link>
      <h1 className="detail-drink">{drink.name}</h1>
      <div className="drink">
        <img className="detail-img" src={drink.image} alt={drink.name} />
        <div className="all-categories">
          <div className="detail-category">
            <h3 className="detail-category-key">Name:</h3>
            <h3 className="detail-category-val">{drink.name}</h3>
          </div>
          <div className="detail-category">
            <h3 className="detail-category-key">Category:</h3>
            <h3 className="detail-category-val">{drink.category}</h3>
          </div>
          <div className="detail-category">
            <h3 className="detail-category-key">Info:</h3>
            <h3 className="detail-category-val">{drink.info}</h3>
          </div>
          <div className="detail-category">
            <h3 className="detail-category-key">Glass:</h3>
            <h3 className="detail-category-val">{drink.glass}</h3>
          </div>
          <div className="detail-category">
            <h3 className="detail-category-key">Instructions:</h3>
            <h3 className="detail-category-val">{drink.instruction}</h3>
          </div>
          <div className="detail-category">
            <h3 className="detail-category-key">Ingredients:</h3>
            <h3 className="detail-category-val">{drink.ingredients}</h3>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DrinkDetail;
