import React, {useEffect} from 'react';
import { Wrapper, HeaderStyle, TitleStyled } from './styled';
import BtnAddGame from '../BtnAddGame'
import TicTacToe from '../TicTacToe/';
import AllRoomsContainer from '../AllRoomsContainer/';

const Main = ({ isUserName, connectWS }: any) => {

    useEffect(() => {
        isUserName();
        connectWS();
    }, [])

    return (
            <Wrapper>
                <HeaderStyle>
                    <TitleStyled>Доступные комнаты</TitleStyled>
                    <BtnAddGame/>
                </HeaderStyle>
                < AllRoomsContainer />
                <TicTacToe/>
            </Wrapper>
    )
}

export default Main;