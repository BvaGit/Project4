import styled from 'styled-components';
import * as color from '../../utils/colors';

export const ModalStyle = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    padding: 20px 10px;
    background-color: #fff;
    border-radius: 20px;
    border: 1px solid #1D3246;
    margin: 0 auto;
    box-shadow: 0 0 20px rgba(0,0,0, .2);
    position: fixed;
    top: 120px;
    left: 50%;
    transform: translateX(-50%);
`

export const ModalTitleStyle = styled.p `
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    color: #1D3246;
    text-align: center;
`

export const SelectStyle = styled.select `
    width: 80%;
    padding: 5px;
    border: 1px solid #1D3246;
    margin-top: 15px;
`

export const BtnsBlockStyle = styled.div `
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
`

export const BtnStyle = styled.div `
    width: 110px;
    padding: 5px;
    background-color: ${color.btnDark};
    color: ${color.textLight};
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
`