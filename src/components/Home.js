import React from "react";
import SearchBox from "./SearchBox";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <SearchBox />
      <Outlet />
    </section>
  );
};

export default Home;
