import React from 'react'

export const CheeseModal = ({open,handleCheeseModal,descripcion}) => {
    if (!open) return null;
    console.log(descripcion,open);
    return (
        <div className="modal__container__cheese">
            <div className="modal__box__cheese">
            <h6>{descripcion}</h6>
            <button onClick={handleCheeseModal}>volver</button>
            </div>
        </div>
    )
}
