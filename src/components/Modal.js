import React from 'react'
import { Link } from 'react-router-dom';


export const Modal = ({open,handleModal}) => {
    if (!open) return null;

    return (
        <div className="modal__container">
            <nav className="modal__box">
                <header>
                    <p>Las viudas</p>
                    <button onClick={handleModal}>Close modal</button>
                </header>
                <ul>
                    <li><Link className="link"to="/">Home</Link></li>
                    <li><Link className="link"to="/about">About</Link></li>
                    <li><Link className="link"to="/oferta">Oferta</Link></li>
                    <li><Link className="link"to="/quesos">Quesos</Link></li>
                    <li><Link className="link"to="/contact">Contact</Link></li>
                </ul>
              </nav>
        </div>
    )
}
