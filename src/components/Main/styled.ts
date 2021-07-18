import styled from 'styled-components';
import * as color from '../../utils/colors';

export const Wrapper = styled.div `
    width: 1000px;
    margin: 0 auto;

`
export const HeaderStyle = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    position: relative;
`

export const TitleStyled = styled.h2 `
    text-transform: uppercase;
    color: ${color.textLight};
`