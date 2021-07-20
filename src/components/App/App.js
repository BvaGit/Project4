import React from 'react';
import Main from '../Main';
import Registration from '../Registration'
import Auth from '../Auth';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import { GlobalStyle } from '../../utils/variablesStyle';
import { useTranslation } from 'react-i18next';
import {StAppDiv} from "./styled";

const App = () => {
    const { i18n } = useTranslation()
    return (
        <StAppDiv lang={i18n.language}>
            <GlobalStyle />
            <Header />
            <Switch>
                <Route exact path='/' component={Auth} />
                <Route path='/main' component={Main}/>
                <Route path='/registration' component={Registration}/>
            </Switch>
        </StAppDiv>
    )
}

export default App;
