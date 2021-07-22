import React from 'react';
import { SquareStyled } from './styled';

const Square = ({ id, square, squares, setSquares, xO, setXo }: any) => {
    
    const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = e.target.id;
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