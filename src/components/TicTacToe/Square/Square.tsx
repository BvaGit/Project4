import React from 'react';
import { SquareStyled } from './styled';

const Square = ({ id, square, setStep, doTicStep, getStepG, setSquares, getField }: any) => {
    setSquares( prevState => {
        const newState = [...prevState]
        getField.forEach((element, i) => {
            newState[i] = element
        });
        return newState
    })
    const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStep(e.target.id)
        doTicStep()

    }
    return (
        <SquareStyled id={id} onClick={handleClick}>
            {square}
        </SquareStyled>
    )
}

export default Square;