import React from 'react';
import { CELL } from '../../constants/constantsChess';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { CHESS_DESK } from '../../constants/constantsChess';
import { StContainer, StTable } from './styled';
import Cell from './Cell';


const Checkers: React.FC = ({ field }) => {
    const rows = CHESS_DESK.ROWS;
    const cols = CHESS_DESK.COLS;

    return (
        <DndProvider backend={HTML5Backend}>
            <StContainer>
                <StTable>
                    {
                        rows.map((row) => {
                            return cols.map((col) => {
                                const cell = field[row - 1][col - 1];
                                return (
                                    <Cell
                                        col={col}
                                        key={`row_${row}_col_${col}`}
                                        row={row}
                                        cell={cell}
                                    />
                                );
                            });
                        })
                    }
                </StTable>
            </StContainer>
        </DndProvider>
    );
};
export default Checkers;
