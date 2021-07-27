import React from 'react';
import { RoomStyle } from './styled';
import Button from '../UI/Button';
import { useTranslation } from 'react-i18next';

const RoomItemGame = ({ creatorLogin, userName, gameType, setIdGAme, id, subscribeRoom, joinRoom, setGameTypeRoom, getStepOrder, joinRoomBot, gameBot, subscribeRoomBot, gameTypeContainer }) => {

    const { t } = useTranslation()

    const roomOwner: string = creatorLogin === userName ? t('your_room') : creatorLogin;
    const onClickDistributor = (creatorLogin: string, userLogin: string) => {
        return creatorLogin === userLogin
            ? {
                content: 'play_with_bot',
                id: setIdGAme(id),
                setGTR: setGameTypeRoom(gameType),
                onClickFunc: (e) => {
                    gameTypeContainer(gameType)
                    gameBot();
                    subscribeRoomBot();
                    joinRoomBot();
                    getStepOrder()
                }
            }
            : {
                content: 'join',
                onClickFunc: (e) => {
                   localStorage.setItem('idGame', id);
                   gameTypeContainer(gameType)
                   setIdGAme(id)
                   subscribeRoom()
                   joinRoom()
                   setGameTypeRoom(gameType)
                   getStepOrder()
                } 
            };
    };

    const {content, onClickFunc} = onClickDistributor(creatorLogin, userName);

    return (
        <RoomStyle>
            <p>{t('name_user')}: {roomOwner} </p>
            <br/>
            <p>{t('game')}: {gameType} </p>
            <br/>
            <Button 
                type="button"
                textId={content}
                onClick={onClickFunc}
            />
        </RoomStyle>
    )
}

export default RoomItemGame;