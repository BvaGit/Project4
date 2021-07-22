import React from 'react';
import { ContainerGame } from './styled';
import TicTacToe from '../TicTacToe';
import Checkers from 'src/components/Checkers';

const GameContainer = () => {
    return (
        <ContainerGame>
            <Checkers />
            <TicTacToe />
        </ContainerGame>
    )
}

export default GameContainer;