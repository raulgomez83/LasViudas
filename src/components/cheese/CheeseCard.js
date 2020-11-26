import React from 'react';
import { Link } from 'react-router-dom'




export const CheeseCard = ({nombre,id,image}) => {
    return (<>
            <div className="cheese__card">
                <Link to={`./queso/${ id }`} > 
                    <img className="cheese__card_img animate__animated animate__zoomIn" src={image} alt={nombre}/>
                    <h2>{nombre}</h2>
                </Link>
            </div>
            </>

    )
} 




