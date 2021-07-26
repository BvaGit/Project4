import React from 'react';
import { RoomStyle } from './styled';
import Button from '../UI/Button';

const RoomItemGame = ({ creatorLogin, userName, gameType, setIdGAme, id, subscribeRoom, joinRoom, setGameTypeRoom, getStepOrder }) => {

    const roomOwner: string = creatorLogin === userName ? 'your_room' : creatorLogin;
    const onClickDistributor = (creatorLogin: string, userLogin: string) => {
        return creatorLogin === userLogin
            ? {
                content: 'play_with_bot',
                id: setIdGAme(id),
               // subRoom: subscribeRoom(),
                setGTR: setGameTypeRoom(gameType),
                onClickFunc: e => playWithBot(e.target.id),
            }
            : {
                content: 'join',
                onClickFunc: (e) => {
                   localStorage.setItem('idGame', id);
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
            <p>Имя: {roomOwner} </p>
            <p>Игра: {gameType} </p>
            <Button 
                type="button"
                textId={content}
                onClick={onClickFunc}
            />
        </RoomStyle>
    )
}

export default RoomItemGame;