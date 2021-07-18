import styled from 'styled-components';
import * as color from '../../utils/colors';

export const BtnAddGameStyle = styled.div `
    color: ${color.textLight};
    background-color: ${color.btnDark};
    border: 1px solid #fff;
    border-radius: 50px;
    padding: 10px;
    cursor: pointer;
    transition: all .3s;
    position: absolute;
    right: 50px;
    &:hover {
        background-color: ${color.btnHover};
    }
`