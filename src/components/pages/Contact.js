import React from "react";

import phone from "../../images/phone.png";

export const Contact = () => {
  return (
    <section className="home__contact">
      <h2 id="contact" className="contact__phone mt-5 mb-5">
        LLámanos y haz tu pedido: <br />
        <img className="phone" src={phone} alt="icono teléfono" />
        <b> 881 92 61 28</b>
      </h2>
      <div className="home__contact__data">
        <p>
          Rúa Nicaragua 2,
          <br />
          15005 A Coruña.
        </p>
        <p>
          De lunes a sábado:
          <br />{" "}
          <strong>
            10:00 - 15:00 <br /> 19:00 - 23:30
          </strong>
        </p>
      </div>
      <div className="map">
        <iframe
          className="mapaSize"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11602.829085278707!2d-8.4081238!3d43.3622334!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x18ca5d5d6dde7dcc!2sLas%20Viudas%20Cheese%20Bar!5e0!3m2!1ses!2ses!4v1604227332231!5m2!1ses!2ses"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          title="map"
        ></iframe>
      </div>
    </section>
  );
};
