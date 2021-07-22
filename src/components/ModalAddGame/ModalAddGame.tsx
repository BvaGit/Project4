import React from 'react';
import Portal from '../Portal/';
import { ModalStyle, ModalTitleStyle, SelectStyle, BtnsBlockStyle, BtnStyle } from './styled'

const ModalAddGame = ({ handleCloseModal, gameType, createGame }: any) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        gameType(e.target.value);
    }
    const handleClick = () => {
        createGame();
    }

    return (
        <Portal>
            <ModalStyle>
                <ModalTitleStyle>Создание игры</ModalTitleStyle>
                <SelectStyle onChange={handleChange}>
                    <option value='Checkers'>Шашки</option>
                    <option value='Tic-tac-toe'>Крестики-нолики</option>
                </SelectStyle>
                <BtnsBlockStyle>
                    <BtnStyle onClick={handleClick}>Подтвердить</BtnStyle>
                    <BtnStyle onClick={handleCloseModal}>Отмена</BtnStyle>
                </BtnsBlockStyle>
            </ModalStyle>
        </Portal>
    )
}

export default ModalAddGame;