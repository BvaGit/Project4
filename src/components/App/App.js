import React from 'react';
import Main from '../Main';
import Registration from '../Registration'
import { Route, Switch } from 'react-router-dom';
import Header from "../Header/Header";

const App = () => {
    return (
        <div>
        <Header />
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/registration' component={Registration}/>
        </Switch>
        </div>
    )
}

export default App;