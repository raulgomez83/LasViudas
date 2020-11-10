import React from 'react'
import { Link } from 'react-router-dom'

export const Delivery = () => {
    return (
        <div className="delivery">
          <Link className="delivery__button" to="/contact"><button>Pedidos</button></Link>
       </div>
    )
}
