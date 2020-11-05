import React, {useState} from 'react'
import menuIcon from "../images/menu.png"
import { Modal } from './Modal'


export const Menubar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleModal =()=>{
        return setIsOpen(!isOpen)
    }

    return (
        <div className="__menubar mt-1 mb-5">
              <h3>LasViudas</h3>
              <img src={menuIcon} 
              alt="icono de menu" 
              onClick={handleModal}
               />
              <Modal open={isOpen}
              handleModal={handleModal}>
              </Modal>
        </div>
    )
}
