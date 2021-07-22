import React from 'react';
import { RoomsContainer } from './styled';
import RoomItemGame from '../RoomItemGame/';

const AllRoomsContainer = ({ userName, rooms }: any) => {

    return (
        <RoomsContainer>
            <h1>Игровые комнаты</h1>
            {rooms.map((room) => {
                return (
                    <RoomItemGame
                        key={room.id}
                        id={room.id}
                        creatorLogin={room.creatorLogin}
                        userName={userName}
                        gameType={room.gameType}
                    />
                );
            })}
        </RoomsContainer>
    )
}

export default AllRoomsContainer;