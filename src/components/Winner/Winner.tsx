import React from 'react';
import { H1Styled } from './styled';
import { useTranslation } from 'react-i18next';

const Winner = ({ getWinner }) => {
    const { t } = useTranslation()
    return (
        <H1Styled>{t('winner')}: {getWinner}</H1Styled>
    )
}

export default Winner;