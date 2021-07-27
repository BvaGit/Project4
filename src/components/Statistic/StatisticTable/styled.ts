import styled from 'styled-components';
import { IStyled } from 'common/types/styledTypes';
import { changeTheme } from 'src/helpers/changeTheme';

export const StWrapper = styled.div <IStyled>`
  width: 47%;
  height: 75%;
  border-radius: 12px;
  overflow: hidden;
`;
export const StHeaderWrapper = styled.div <IStyled>`
  width: 100%;
  height: 40px;
  margin: 10px 0;
  
  & h1 {
    padding: 5px 0;
    text-align: center;
  }

  & div {
    display: flex;
    justify-content: space-between;
    width: 90%;
    height: 30px;
    margin: 10px auto;

    & span {
      width: 100%;
      text-align: center;
    }
  }
`;
export const StResultsWrapper = styled.div <IStyled>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: 455px;
  margin-top: 40px;
  overflow-y: scroll;

  & div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 90%;
    min-height: 20px;
    height: auto;
    margin: 5px 0;
    padding: 15px 0;
    & span {
      width: 100%;
      text-align: center;
    }
  }
`;
