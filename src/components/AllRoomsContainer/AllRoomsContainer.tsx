import React from 'react';
import { RoomsContainer } from './styled';
import RoomItemGame from '../RoomItemGame/';
import { useTranslation } from 'react-i18next';

const AllRoomsContainer = ({ userName, rooms }: any) => {
    const { t } = useTranslation()
    return (
        <RoomsContainer>
            <h1>{t("title_rooms")}</h1>
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