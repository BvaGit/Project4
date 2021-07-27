import styled from 'styled-components';

export const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  height: 90%;
  & h1 {
    padding: 5px 0;
    text-align: center;
  }
`;

export const StWrapper = styled.div <IStyled>`
  width: 47%;
  height: 75%;
  border-radius: 12px;
  overflow: hidden;
  font-size: 20px;
  
`;
export const StHeaderWrapper = styled.div `
  width: 100%;
  height: 40px;
  margin: 10px 0;
  border-bottom: 1px solid;
  
  & div {
    display: flex;
    justify-content: space-between;
    width: 90%;
    height: 30px;
    margin: 10px auto;

    & span {
      width: 100%;
      text-align: center;
      font-family: "Roboto Thin";
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
  overflow: scroll;

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
