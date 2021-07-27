import React from 'react';
import { useHistory } from 'react-router-dom';
import  { StLogo } from 'src/components/Header/Logo/styled';
import { useTranslation } from 'react-i18next';


const Logo = () => {
    const history = useHistory()
    const handleClick = () => {
        const { pathname } = history.location;
        return pathname === '/' || pathname === '/registration' ? history.push('/') : history.push('/main');
    }
    const { t } = useTranslation();
    return (
        <StLogo onClick={handleClick}>
            <img src='./public/assets/images/logo.png' />
            <h1>{t("team")}</h1>
        </StLogo>
    )
}

export default Logo;
