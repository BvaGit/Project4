import styled from 'styled-components';

export const ButtonStyle = styled.button<{bgColorBtn: boolean}> `
    width: 100%;
    border-radius: 50px;
    padding: 10px;
    cursor: pointer;
    border: none;
    background-color: ${props => (props.bgColorBtn ? "#1D3246" : "#fff")};
    color: ${props => (props.colorBtn ? "#fff" : "#1D3246")};
    transition: all .3s;

    &:hover {
        background-color: #bfb4ff;
    }
` 