import React from "react";
import { NavLink } from "react-router-dom";

export const Cookies = () => {
  const handleCookies = () => {
    const cookies = document.querySelector(".cookies");
    cookies.style.visibility = "hidden";
  };
  return (
    <div className="cookies">
      <p>
        Este sitio utiliza cookies propias y de terceros. Si continúa navegando
        consideramos que acepta el uso de estas.
      </p>
      <NavLink className="cookies__link" to="politicaCookies">
        Ver política
      </NavLink>
      <button className="cookies__button" onClick={handleCookies}>
        Aceptar
      </button>
    </div>
  );
};
