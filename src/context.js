import React, { useContext, useEffect, useState } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("a");

  const fetchData = React.useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchText}`);
      const data = await response.json();
      setDrinks(data.drinks);
      setLoading(false);
    } catch (err) {
      console.log("The error is ", err);
    }
  }, [searchText]);

  useEffect(() => {
    fetchData();
  }, [searchText, fetchData]);

  return (
    <AppContext.Provider value={{ drinks, loading, searchText, setSearchText }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
