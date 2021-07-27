import React, {useState} from 'react';
import { ContainerGame } from './styled';
import TicTacToe from '../TicTacToe';
import Checkers from 'src/components/Checkers';
import Welcome from 'src/components/Welcome';

const GameContainer = ({ getGameTypeContainer }: any) => {
  
    return (
        <ContainerGame>
           {(getGameTypeContainer === '')
           ?
           <Welcome />
           :
           (getGameTypeContainer === 'Checkers')
           ?
           <Checkers/>
           :
           <TicTacToe />}
        </ContainerGame>
    )
}

export default GameContainer;