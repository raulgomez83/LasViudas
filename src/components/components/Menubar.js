import React from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo.png";

export const Menubar = () => {
  return (
    <div className="menubar">
      <Link to="/">
        <img src={logo} alt="logo queso" className="menubar__logo" />
      </Link>
    </div>
  );
};
