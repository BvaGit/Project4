import React from 'react';
import { ButtonStyle } from './styled';

type TButtonProps = {
    type: "submit" | "button",
    textId: string,
    onClick: void
}

const Button = ({type, textId, onClick}: TButtonProps) => {
    return (
        <ButtonStyle 
            type={type}
            onClick={onClick}
        >
            {textId}
        </ButtonStyle>
    )
}


export default Button;