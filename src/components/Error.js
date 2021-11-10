import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error">
      <h2 className="heading">Oops! It's A Dead End</h2>
      <Link className="link" to="/">
        Back Home
      </Link>
    </section>
  );
};

export default Error;
