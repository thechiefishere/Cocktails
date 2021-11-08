import React from "react";
import SearchBox from "./SearchBox";
import Loading from "./Loading";
import { useGlobalContext } from "../context";
import { Outlet } from "react-router-dom";

const Home = () => {
  const { loading } = useGlobalContext();

  return (
    <section>
      <Outlet />
      {loading && <Loading />}
    </section>
  );
};

export default Home;
