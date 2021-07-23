import styled from 'styled-components';
import { InputHTMLAttributes } from 'react';


export const InputStyle = styled.input<InputHTMLAttributes<HTMLInputElement>> `
    width: 100%;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 50px;
    margin-top: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    background: transparent;
    color: white;
    font-style: italic;
  ::placeholder {
    color: white;
    font-size: 1em;
  }
`

export const LabelStyle = styled.label<any> `
   display: flex;
   flex-direction: column;
   margin-bottom: 20px;
`