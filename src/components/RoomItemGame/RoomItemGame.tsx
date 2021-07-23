import React from 'react';
import { RoomStyle } from './styled';
import Button from '../UI/Button';

const RoomItemGame = ({ creatorLogin, userName, gameType, id, setIdGame, connectBot, creatorGame }) => {

    const roomOwner: string = creatorLogin === userName ? 'Ваша комната' : creatorLogin;
    const onClickDistributor = (creatorLogin: string, userLogin: string) => {
        return creatorLogin === userLogin
            ? {
                content: 'Играть с ботом',
                onClickFunc: (e: React.ChangeEvent<HTMLInputElement>) => {
                    setIdGame(id);
                    connectBot()
                },
            }
            : {
                content: 'join',
                onClickFunc:(e: React.ChangeEvent<HTMLInputElement>) => {
                    console.log('JOIN')
                    setIdGame(id)
                    creatorGame(userName)
                    connectBot()
                },
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