import React from 'react';
import { RoomStyle } from './styled';
import Button from '../UI/Button';

const RoomItemGame = ({ creatorLogin, userName, gameType }) => {

    const roomOwner: string = creatorLogin === userName ? 'your_room' : creatorLogin;
    const onClickDistributor = (creatorLogin: string, userLogin: string) => {
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