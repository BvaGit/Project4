import React from 'react';
import { RoomStyle } from './styled';
import Button from '../UI/Button';
import { useTranslation } from 'react-i18next';

const RoomItemGame = ({ creatorLogin, userName, gameType }) => {
    const { t } = useTranslation()

    const roomOwner: string = creatorLogin === userName ? t('your_room') : creatorLogin;
    const onClickDistributor = (creatorLogin: string, userLogin: string) => {
        return creatorLogin === userLogin
            ? {
                content: t('play_with_bot'),
                onClickFunc: e => playWithBot(e.target.id),
            }
            : {
                content: t('join'),
                onClickFunc: e => joinRoom(e.target.id),
            };
    };

    const {content, onClickFunc} = onClickDistributor(creatorLogin, userName);

    return (
        <RoomStyle>
            <p>{t('name_user')}: {roomOwner} </p>
            <p>{t('game')}: {gameType} </p>
            <Button 
                type="button"
                textId={content}
                onClick={onClickFunc}
            />
        </RoomStyle>
    )
}

export default RoomItemGame;