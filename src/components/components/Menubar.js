import { Icon } from '@material-ui/core';
import React, {useState} from 'react'
import { Modal } from './Modal'


export const Menubar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleModal =()=>{
        return setIsOpen(!isOpen)
    }

    return (
        <div className="__menubar">
              <h3>LasViudas</h3>
              <Icon onClick={handleModal} style={{ fontSize: 50 }} className="modal__icon__open">menu</Icon>
              <Modal open={isOpen}
              handleModal={handleModal}>
              </Modal>
        </div>
    )
}
