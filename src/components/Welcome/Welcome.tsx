import React from 'react';
import { WelcomeStyled } from './styled';
import { useTranslation } from 'react-i18next';

const Welcome = ({ getUserName }) => {
    const { t } = useTranslation()
    return (
        <WelcomeStyled>{t('welcome')} {getUserName}</WelcomeStyled>
    )
}

export default Welcome