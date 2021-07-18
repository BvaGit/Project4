import React, {useEffect} from 'react';
import { Wrapper, HeaderStyle, TitleStyled } from './styled';
import BtnAddGame from '../BtnAddGame'

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