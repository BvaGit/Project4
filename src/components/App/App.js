import React from 'react';
import Main from '../Main';
import Registration from '../Registration'
import Auth from '../Auth';
import { Route, Switch } from 'react-router-dom';
import { GlobalStyle } from '../../utils/variablesStyle';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Switch>
                <Route exact path='/' component={Auth} />
                <Route path='/main' component={Main}/>
                <Route path='/registration' component={Registration}/>
            </Switch>
        </>

        

    )
}

export default App;