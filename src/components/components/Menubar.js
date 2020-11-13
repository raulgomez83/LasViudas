import { Icon } from '@material-ui/core';
import React, {useState} from 'react'
import { Modal } from './Modal'
import logo from "../../images/logo.png"


export const Menubar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleModal =()=>{
        return setIsOpen(!isOpen)
    }

    return (
        <>
        <div className="__menubar">
              <img src={logo} alt="logo queso" className="menubar__logo"/>
              <Icon onClick={handleModal} style={{ fontSize: 50 }} className="modal__icon__open">menu</Icon>
        </div>
        <Modal open={isOpen}
              handleModal={handleModal}>
              </Modal>
        </>
    )
}
