
import { Icon} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom'




export const CheeseCard = ({nombre,id,image}) => {
    return (
        
<div className="cheese__card__container" >
    <div className="cheese__card  ">
        <div className="card-front">
            <figure>
                <div className="img-bg"></div>
                    <img className="cheese__card_img animate__animated animate__zoomIn" src={image} alt={nombre}/>
                    <figcaption>{nombre}</figcaption>
            </figure>
        </div>
        <div className="card-back">
            <figure>
                <div className="img-bg"></div>
                <img className="cheese__card_img" src={image} alt={nombre}/> 
                 </figure>
                <Link to={`./queso/${ id }`} ><Icon className="cheese__card__icon"style={{ fontSize: 50 }}>info</Icon> </Link>
        </div>
    </div>
</div>

    )
} 




