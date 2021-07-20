import React, {useEffect} from 'react';
import { Wrapper, HeaderStyle, TitleStyled, WrapperGame } from './styled';
import BtnAddGame from '../BtnAddGame'
import TicTacToe from '../TicTacToe/';
import AllRoomsContainer from '../AllRoomsContainer/';
import GameContainer from '../GameContainer/';

const Main = ({ isUserName, connectWS }: any) => {

    useEffect(() => {
        isUserName();
        connectWS();
    }, [])

    return (
            <Wrapper>
                <HeaderStyle>
                    <BtnAddGame/>
                </HeaderStyle>
                <WrapperGame>
                    <AllRoomsContainer />
                    <GameContainer/>
                </WrapperGame>
            </Wrapper>
    )
}

export default Main;