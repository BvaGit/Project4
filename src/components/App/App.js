import React from 'react';
import Main from '../Main';
import Registration from '../Registration'
import Auth from '../Auth';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import { GlobalStyle } from '../../utils/variablesStyle';
import { useTranslation } from 'react-i18next';
import { StAppDiv } from './styled';
import { useTheme } from '../Hook/useTheme';
import Statistic from '../Statistic'

const App = () => {
    const { i18n } = useTranslation();
    const { colors, theme } = useTheme();
    return (
        <StAppDiv lang={i18n.language} colors={colors} theme={theme}>
            <GlobalStyle />
            <Header />
            <Switch>
                <Route exact path='/' component={Auth} />
                <Route path='/main' component={Main}/>
                <Route path='/registration' component={Registration}/>
                <Route path='/statistic' component={Statistic}/>
            </Switch>
        </StAppDiv>
    )
}

export default App;
