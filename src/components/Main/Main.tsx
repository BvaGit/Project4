import React, {useEffect} from 'react';
import SockJS from 'sockjs-client';
import Statistic from '../Statistic';
import { Wrapper, HeaderStyle, TitleStyled } from './styled';
import BtnAddGame from '../BtnAddGame'
import { DefaultDark } from '../../utils/variablesStyle';

const Main = ({ isUserName }: any) => {

    useEffect(() => {
        isUserName();
    }, [])

    return (
        <>
            <Wrapper>
                <HeaderStyle>
                    <TitleStyled>Доступные комнаты</TitleStyled>
                    <BtnAddGame/>
                </HeaderStyle>
            </Wrapper>
        </>
    )
}

export default Main;