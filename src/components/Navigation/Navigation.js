import React from 'react';

import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Auth from '../Auth/Auth'
import ChessResult from '../ChessResult/ChessResult';

const Navigation = () => {
    return (    
        <Switch>
            <Route exact path="/" component = {Home} />
            <Route path = "/auth" component = {Auth} />
            <Route path="/results/:username" component={ChessResult}/>
        </Switch>
    )

}

export default Navigation;