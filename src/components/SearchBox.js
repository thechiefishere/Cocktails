import React, { useRef } from "react";
import { useGlobalContext } from "../context";

const SearchBox = () => {
  const { setSearchText } = useGlobalContext();
  const searchValue = useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const getSearchVal = () => {
    setSearchText(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <article className="searchbox">
      <h2>Search Your Favorite Cocktail</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={searchValue} onChange={getSearchVal} />
      </form>
    </article>
  );
};

export default SearchBox;
