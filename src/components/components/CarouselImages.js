import React from 'react';



import home from "../../images/floes y queso.jpeg";
import azul from "../../images/azul higos.jpeg";
import comino from "../../images/queso tarro ueces.jpeg";
import stand from "../../images/estantería de queso.jpeg";

export const CarouselImages = () => {
    return (
<div className="carousel">
			<ul className="carousel__box">
			    <li><img src={home} alt="home"/></li>
				<li><img src={azul}alt="azul"/></li>
			  	<li><img src={stand} alt="home"/></li>
			  	<li><img src={comino} alt="azul"/></li>
			</ul>
</div>
    )
}
