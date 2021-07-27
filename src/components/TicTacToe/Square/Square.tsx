import React from 'react';
import { SquareStyled } from './styled';

const Square = ({ id, square, setStep, doTicStep, getStepG, setSquares, getField, bot }: any) => {
    setSquares( prevState => {
        const newState = [...prevState]
        getField.forEach((element, i) => {
            newState[i] = element
        });
        return newState
    })

    let handleClick;

    bot
    ?
    handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("bot")
        setStep(e.target.id)
        doTicStep()
    }
    :
    handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
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