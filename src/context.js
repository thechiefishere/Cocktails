import React, { useContext, useEffect, useState } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inHome, setInHome] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const data = await fetch(url);
    const cocktails = await data.json();
    setDrinks(cocktails.drinks);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ drinks, loading, inHome, setInHome }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
