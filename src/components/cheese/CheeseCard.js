import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const CheeseCard = ({ nombre, id, image }) => {
  return (
    <>
      <div className="cheese__card">
        <Link to={`./queso/${id}`}>
          <img className="cheese__card_img" src={image} alt={nombre} />
          <h2>{nombre}</h2>
        </Link>
      </div>
    </>
  );
};
CheeseCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
