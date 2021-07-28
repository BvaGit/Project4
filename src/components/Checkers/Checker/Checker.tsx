import React from 'react';
import { useDrag } from 'react-dnd';
import { StCellBlack, StCellWhite, StOpacity } from './styled';

interface IProps {
    isBlack: boolean
}

const Checker: React.FC <IProps> = ({ isBlack }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'checker',
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <StOpacity ref={drag} isDragging={isDragging}>
            {
                isBlack
                    ? <StCellBlack />
                    : <StCellWhite />
            }
        </StOpacity>
    );
};
export default Checker;
