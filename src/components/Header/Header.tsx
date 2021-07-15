import React from 'react';
import { StHeader } from 'src/components/Header/styled';
import Logo from 'src/components/Header/Logo/Logo';
import HeaderControlPanel from 'src/components/Header/HeaderControlPanel/HeaderControlPanel';

const Header = () => {
    return(
        <StHeader>
            <Logo />
            <HeaderControlPanel/>
        </StHeader>
    )
}

export default Header;
