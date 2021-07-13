import React from 'react';
import Main from '../Main';
import Registration from '../Registration'
import { Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/registration' component={Registration}/>
        </Switch>
    )
}

export default App;