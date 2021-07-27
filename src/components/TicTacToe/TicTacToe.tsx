import React, {useState} from 'react';
import { Board } from './styled';
import Square from './Square';

const TicTacToe = () => {
    const [squares, setSquares]:any = useState([1,1,1,1,1,1,1,1,1])
    const [xO , setXo]: any = useState(true);
       
    return (
        <Board>
            {squares.map( (square, i) => <Square 
                key={i} 
                id={i}
                square={square}
                setSquares={setSquares}
                xO={xO}
                setXo={setXo}
                />)}
        </Board>
    )
}

export default TicTacToe;