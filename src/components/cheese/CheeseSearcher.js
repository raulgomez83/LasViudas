import React from "react";
import PropTypes from "prop-types";

export const CheeseSearcher = ({ filteredCheese, handleFilterChange }) => {
  return (
    <div className="cheese__searcher">
      <form>
        <input
          type="search"
          placeholder="Busca tu queso favorito entre..."
          value={filteredCheese}
          onChange={handleFilterChange}
        />
      </form>
    </div>
  );
};
CheeseSearcher.propTypes = {
  filteredCheese: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};
