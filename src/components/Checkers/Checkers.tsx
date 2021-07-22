import React from 'react';

import SingleCell from './SingleCell';

import { StChessPlate } from './styled';

const Checkers = () => {
    const items = [];
    for (let i = 63; i > -1; i--) {
        items.push(i);
    }
    return (
        <StChessPlate>
            {items.map((item) => <SingleCell id={item} key={item} />,
            )}
        </StChessPlate>
    );
};

export default Checkers;
