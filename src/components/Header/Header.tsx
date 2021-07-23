import React from 'react';
import { StHeader } from 'src/components/Header/styled';
import Logo from 'src/components/Header/Logo/Logo';
import HeaderControlPanel from 'src/components/Header/HeaderControlPanel/HeaderControlPanel';
import { useTheme } from '../Hook/useTheme';


const Header = () => {
    const { colors, theme } = useTheme();
    return (
        <StHeader colors={colors} theme={theme}>
            <Logo />
            <HeaderControlPanel />
        </StHeader>
    )
}

export default Header;
