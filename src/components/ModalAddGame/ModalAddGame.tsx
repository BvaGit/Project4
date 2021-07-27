import React from 'react';
import Portal from '../Portal/';
import { ModalStyle, ModalTitleStyle, SelectStyle, BtnsBlockStyle, BtnStyle } from './styled'
import { useTranslation } from 'react-i18next';

const ModalAddGame = ({ handleCloseModal, gameType, createGame, typeGame, gameTypeContainer }: any) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        gameType(e.target.value);
    }
    const handleClick = () => {
        createGame();
        gameTypeContainer(typeGame);
        handleCloseModal();
    }
    const { t } = useTranslation()

    return (
        <Portal>
            <ModalStyle>
                <ModalTitleStyle>{t("create_game_modal")}</ModalTitleStyle>
                <SelectStyle onChange={handleChange}>
                    <option value='Checkers'>{t("checkers_modal")}</option>
                    <option value='Tic-tac-toe'>{t("tic-tac-toe_modal")}</option>
                </SelectStyle>
                <BtnsBlockStyle>
                    <BtnStyle onClick={handleClick}>{t("confirm_modal")}</BtnStyle>
                    <BtnStyle onClick={handleCloseModal}>{t("cancel_modal")}</BtnStyle>
                </BtnsBlockStyle>
            </ModalStyle>
        </Portal>
    )
}

export default ModalAddGame;