import React, {useEffect} from 'react';
import { Wrapper, HeaderStyle, TitleStyled } from './styled';
import BtnAddGame from '../BtnAddGame'

const Main = ({ isUserName, connectWS }: any) => {

    useEffect(() => {
        isUserName();
        connectWS();
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