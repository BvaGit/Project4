import styled from 'styled-components';

export const RoomsContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    border-right: 1px solid #fff;
    max-height: 100%;
    overflow: scroll;
    font-family: "Roboto Light";
    color: white;
  ::-webkit-scrollbar { width: 3px; height: 3px;}
  ::-webkit-scrollbar-button {  background-color: #666; }
  ::-webkit-scrollbar-track {  background-color: #999; }
  ::-webkit-scrollbar-track-piece { background-color: #ffffff;}
  ::-webkit-scrollbar-thumb { height: 50px; background-color: #666; border-radius: 3px;}
  ::-webkit-scrollbar-corner { background-color: #999; }
  ::-webkit-resizer { background-color: #666; }
`