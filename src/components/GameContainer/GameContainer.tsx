import React, {useState} from 'react';
import { ContainerGame, StepOrderStyled } from './styled';
import TicTacToe from '../TicTacToe';
import Checkers from 'src/components/Checkers';
import Welcome from 'src/components/Welcome';
import { useTranslation } from 'react-i18next';
import Winner from '../Winner';

const GameContainer = ({ getGameTypeContainer, getStepOrder }: any) => {
    const { t } = useTranslation()
    return (
        <ContainerGame>
            { getStepOrder
                ?
                <StepOrderStyled>{t('stepOrder')} {getStepOrder}</StepOrderStyled>
                :
                null
            }
            
            {(getGameTypeContainer === '')
            ?
            <Welcome />
            :
            (getGameTypeContainer === 'Checkers')
            ?
            <Checkers/>
            :
            (getGameTypeContainer === 'Tic-tac-toe')
            ?
            <TicTacToe />
            :
            (getGameTypeContainer === 'winner')
            ?
            <Winner/>
            :
            null
            }
        </ContainerGame>
    )
}

export default GameContainer;