import React from 'react';
import { RoomStyle } from './styled';

const RoomItemGame = ({ creatorLogin, userName, gameType }) => {

    const roomOwner: string = creatorLogin === userName ? 'your_room' : creatorLogin;
    const onClickDistributor = (creatorLogin: string, userLogin: string) : TDistResult => {
        return creatorLogin === userLogin
            ? {
                content: 'play_with_bot',
                onClickFunc: e => playWithBot(e.target.id),
            }
            : {
                content: 'join',
                onClickFunc: e => joinRoom(e.target.id),
            };
    };

    return (
        <RoomStyle>
            <p>Имя: {roomOwner} </p>
            <p>Игра: {gameType} </p>
        </RoomStyle>
    )
}

export default RoomItemGame;