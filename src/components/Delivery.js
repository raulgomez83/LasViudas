import React from 'react'
import { Link } from 'react-router-dom'

export const Delivery = () => {
    return (
        <div className="delivery">
            <button><Link className="link" to="/contact">Haz tu pedido</Link></button> 
       </div>
    )
}
