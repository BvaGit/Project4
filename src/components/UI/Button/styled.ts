import styled from 'styled-components';
import {
    bgColorDefault,
    colorDefault,
    focusColorDefault,
    disabledColor,
    bgColorDisabledDefault,
    disabledBorder,
} from '../baseLayout';
import { IBtn } from 'src/components/UI/Button/types';

export const StButton = styled.button <IBtn>`
  ${({ margin = '0 0 3px 0' }) => margin && `margin: ${margin}`};
  font-family: 'Play', sans-serif;
  padding: ${({ padding = '5px' }) => padding};
  width: 80px;
  height: ${({ height = '35px' }) => height};
  ${({ cursor = 'pointer' }) => cursor && `cursor: ${cursor}`};
  color: ${({ color = colorDefault }) => color};
  background-color: ${({ bgColor = bgColorDefault }) => bgColor};
  border-radius: ${({ borderRadius = '7px' }) => borderRadius}; 
  border: ${({ border = 'none' }) => border};
  outline: ${({ outline = 'none' }) => outline};
  ${({ transition = 'all 300ms ease-in-out' }) => transition && `transition: ${transition}`};
  font-size: ${({ fontSize = '16px' }) => fontSize};
  &:hover {
    color: ${({ focusColor = focusColorDefault }) => focusColor}; 
    border: ${({ border = 'none' }) => border};
    }
  &:focus {
    color: ${({ focusColor = focusColorDefault }) => focusColor};
    }
  &:disabled{ 
    border: ${({ border = disabledBorder }) => border};
    background-color: ${({ bgColorDisabled = bgColorDisabledDefault }) => bgColorDisabled};
    color: ${({ focusColor = disabledColor }) => focusColor};
    }
`;

export const ButtonStyle = styled.button<{bgColorBtn: boolean, colorBtn: boolean}> `
    width: 100%;
    border-radius: 50px;
    padding: 10px;
    cursor: pointer;
    border: none;
    background-color: ${props => (props.bgColorBtn ? "#1D3246" : "#fff")};
    color: ${props => (props.colorBtn ? "#fff" : "#1D3246")};
    transition: all .3s;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    font-family: system-ui;
    font-size: 0.8em;

    &:hover {
        background-color: #bfb4ff;
    }
` 
