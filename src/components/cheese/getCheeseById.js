import { cheeses } from "../../data/cheeses";
import PropTypes from "prop-types";

export const getCheeseById = (id) => {
  return cheeses.find((cheese) => cheese.id === id);
};
getCheeseById.propTypes = {
  id: PropTypes.string.isRequired,
};
