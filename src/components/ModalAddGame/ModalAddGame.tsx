import React from 'react';
import Portal from '../Portal/';
import { ModalStyle, ModalTitleStyle, SelectStyle, BtnsBlockStyle, BtnStyle } from './styled'

const ModalAddGame = ({ handleCloseModal }) => {
    return (
        <Portal>
            <ModalStyle>
                <ModalTitleStyle>Создание игры</ModalTitleStyle>
                <SelectStyle>
                    <option value='checkers'>Шашки</option>
                    <option value='tic-tac-toe'>Крестики-нолики</option>
                </SelectStyle>
                <BtnsBlockStyle>
                    <BtnStyle>Подтвердить</BtnStyle>
                    <BtnStyle onClick={handleCloseModal}>Отмена</BtnStyle>
                </BtnsBlockStyle>
            </ModalStyle>
        </Portal>
    )
}

export default ModalAddGame;