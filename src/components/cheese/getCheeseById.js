import {cheeses} from "../../data/cheeses";

export const getCheeseById = (id) => {
  
    return cheeses.find( cheese => cheese.id===id)
}
