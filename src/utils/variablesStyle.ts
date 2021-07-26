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
        font-family: Arial, Helvetica, sans-serif;
        position: relative;
    }
`

export const CenterStyleRegAuth = styled.div`
    width: 400px;
    margin: 12% auto;
` 

export const DefaultDark = styled.div `
    color: ${color.textLight};
`

export const TitleRegAuth = styled.h2 `
    font-family: system-ui;
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