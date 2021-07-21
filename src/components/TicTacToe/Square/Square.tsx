import React from 'react';
import { SquareStyled } from './styled';

const Square = ({ id, square, squares, setSquares, xO, setXo, setStep, setTime }: any) => {
    
    const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = e.target.id;
        setStep(id);
        setTime(Date.now());
        setSquares( prevState => {
            const newState = [...prevState]
            if(newState[id] === null) {
                newState[id] = xO ? "X" : "0";
                setXo( prev => !prev)
            }
            return newState
          })
    }

    return (
        <SquareStyled id={id} onClick={handleClick}>
            {square}
        </SquareStyled>
    )
}

export default Square;