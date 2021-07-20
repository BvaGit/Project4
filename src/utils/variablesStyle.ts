import styled, { createGlobalStyle } from 'styled-components';
import * as color from './colors';

export const GlobalStyle = createGlobalStyle `
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }
    body {
        background: ${color.bgGradient};
        font-family: Arial, Helvetica, sans-serif;
        position: relative;
    }
`

export const CenterStyleRegAuth = styled.div`
    width: 400px;
    margin: 0 auto;
` 

export const DefaultDark = styled.div `
    height: 100vh;
    background: ${color.bgGradient};
    color: ${color.textLight};
`

export const TitleRegAuth = styled.h2 `
    font-family: Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    text-align: center;
`

export const Sign = styled.p<{colorFont: boolean}> `
    text-align: right;
    margin-top: 5px;
    color: ${props => (props.colorFont ? "#1D3246" : "#fff")};

    &:hover {
        text-decoration: underline;
    }
`