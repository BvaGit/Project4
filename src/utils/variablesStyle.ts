import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }
`

export const CenterStyleRegAuth = styled.div`
    width: 400px;
    margin: 0 auto;
` 

export const DefaultDark = styled.div<{colorFont: boolean, background:boolean}> `
    height: 100vh;
    background: ${props => (props.background ? "#fff" : "linear-gradient(45deg, #21303F, #1D3246)")} ;
    color: ${props => (props.colorFont ? "#1D3246" : "#fff")};
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