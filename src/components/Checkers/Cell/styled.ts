import { IStyled } from '../Checker/types';
import styled from 'styled-components';

interface IStCellStyled extends IStyled {
    background: string;
}

export const StCell = styled.div <IStCellStyled>`
  width: 80px;
  height: 80px;
  margin: 1px;
  background: grey;
  border: 2px solid white;
  transform: rotate(180deg);

  & div {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: grab;
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 25px;
      height: 25px;
      border-radius: 50%;
    }
  }
`;
