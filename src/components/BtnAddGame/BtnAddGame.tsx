import React, { useState } from 'react';
import { BtnAddGameStyle } from './styled';
import ModalAddGame from '../ModalAddGame/';

const BtnAddGame = () => {
    const [opneModal, setOpneModal] = useState(true)
    const handelClick = () => setOpneModal(prev => !prev)
    return (
        <>
        <BtnAddGameStyle onClick={handelClick}>Создать игру</BtnAddGameStyle>
        {opneModal && <ModalAddGame handleCloseModal={handelClick}/>}
        </>
    )
}

export default BtnAddGame;