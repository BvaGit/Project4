import React from 'react';
import { StHeaderWrapper, StWrapper } from './styled';

interface IProps {
    creatorLogin: string,
    gameType: string,
    guestLogin: string,
    winnerLogin: string,
}

const StatisticTable = ({creatorLogin, gameType, guestLogin, winnerLogin  }: IProps) => (
        <StWrapper>
            <StHeaderWrapper>
                    <span>{creatorLogin}</span>
                    <span>{gameType}</span>
                    <span>{guestLogin}</span>
                    <span>{winnerLogin}</span>
            </StHeaderWrapper>
        </StWrapper>
);  


export default StatisticTable;
