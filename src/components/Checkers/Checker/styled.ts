import { VIEW_OPTIONS } from '../../../constants/constantsChess';
import { IStyled } from './types';
import styled from 'styled-components';

interface IOpacity {
    isDragging: boolean
}

export const StCellWhite = styled.div <IStyled>`
  border: 2px solid black;
  box-shadow: 0 0 2px 2px black;
  background: white;
  &::after {
    border: black;
    background: white;
  }
`;
export const StCellBlack = styled.div <IStyled>`
  border: 2px solid #ffffff;
  box-shadow: 0 0 2px 2px black;
  background: black;

  &::after {
    border: 2px solid black;
    background: black;
  }
`;
export const StOpacity = styled.div <IOpacity>`
  opacity: ${({ isDragging }) => (isDragging ? VIEW_OPTIONS.DRAGGIN_OPACITY.IS_DRAGGING : VIEW_OPTIONS.DRAGGIN_OPACITY.NOT_DRAGGING)};
`;
