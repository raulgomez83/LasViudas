import React from 'react';



import home from "../../images/floes y queso.jpeg";
import azul from "../../images/azul higos.jpeg"

export const CarouselImages = () => {
    return (
      <div className="carousel">
			<ul>
				<li>
  <img src={home} alt="home"/>
 </li>
				<li>
  <img src={azul}alt="azul"/>
</li>
				<li>
  <img src={home} alt="home"/>
</li>
				<li>
  <img src={azul} alt="azul"/>
</li>
			</ul>
		</div>
    )
}
