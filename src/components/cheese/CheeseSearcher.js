import React from 'react'

export const CheeseSearcher = ({filteredCheese,handleFilterChange}) => {
    return (
        <div className="cheese__searcher">
            <form>
                <input
                type="search"
                placeholder="Busca tu queso favorito entre..."
                value={filteredCheese}
                onChange={handleFilterChange}/>
            </form>
        </div>
    )
}
