import React from 'react';
import { ContainerGame } from './styled';
import TicTacToe from '../TicTacToe';

const GameContainer = () => {
    return (
        <ContainerGame>
            <TicTacToe/>
        </ContainerGame>
    )
}

export default GameContainer;