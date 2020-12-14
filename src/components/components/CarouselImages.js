import React from 'react';



import carousel1 from "../../images/carousel1.jpg"
import carousel2 from "../../images/carousel2.jpg"
import carousel3 from "../../images/carousel3.jpg"
import carousel4 from "../../images/carousel4.jpg"

export const CarouselImages = () => {
    return (
<div className="carousel">
			<ul className="carousel__box">
			    <li><img src={carousel1} alt="home"/></li>
				<li><img src={carousel2}alt="azul"/></li>
			  	<li><img src={carousel3} alt="home"/></li>
			  	<li><img src={carousel4} alt="azul"/></li>
			</ul>
</div>
    )
}
