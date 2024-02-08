import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h2>Oppss!</h2>
      <NavLink to="/">Go Home</NavLink>
    </div>
  );
};

export default ErrorPage;
