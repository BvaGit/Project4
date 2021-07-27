import React from 'react';
import { useDrop } from 'react-dnd';
import { ICell } from 'src/constants/types';
import { VIEW_OPTIONS } from 'src/constants/constantsChess';
import Checker from 'src/components/Checkers/Checker';
import { StCell } from './styled';

interface IProps {
    col: number,
    row: number,
    cell: ICell
}

const Cell: React.FC <IProps> = ({ col, row, cell }) => {
    const [, drop] = useDrop(
        () => ({
            accept: 'checker',
            drop: () => {
                console.log(`drop ${row} ${col}`);
            },
        }),
        [row, col],
    );

    const getCellBackground = (row: number, col: number) => {
        const cellBg = VIEW_OPTIONS.CELL_BACKGROUND;
        console.log(cellBg)
        return row % 2 === 1
            ? (col % 2 === 1 ? cellBg.GRAY : cellBg.WHITE)
            : (col % 2 === 0 ? cellBg.GRAY : cellBg.WHITE);
    };

    return (
        <StCell
            ref={drop}
            background={getCellBackground(row, col)}
        >
            {
                (cell.hasItem)
                    ? (cell.color === 'black')
                    ? <Checker isBlack />
                    : <Checker isBlack={false} />
                    : null
            }
        </StCell>
    );
};

export default Cell;
