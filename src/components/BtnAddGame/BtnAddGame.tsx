import React, { useState } from 'react';
import { BtnAddGameStyle } from './styled';
import ModalAddGame from '../ModalAddGame/';
import { useTranslation } from 'react-i18next';

const BtnAddGame = () => {
    const { t } = useTranslation();
    const [opneModal, setOpneModal] = useState(false)
    const handelClick = () => setOpneModal(prev => !prev)
    return (
        <>
        <BtnAddGameStyle onClick={handelClick}>{t('create_game')}</BtnAddGameStyle>
        {opneModal && <ModalAddGame handleCloseModal={handelClick}/>}
        </>
    )
}

export default BtnAddGame;