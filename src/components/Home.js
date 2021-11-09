import React from "react";
import Loading from "./Loading";
import { useGlobalContext } from "../context";
import { Outlet } from "react-router-dom";

const Home = () => {
  const { loading } = useGlobalContext();

  return (
    <section className="home">
      <Outlet />
      {loading && <Loading />}
    </section>
  );
};

export default Home;
