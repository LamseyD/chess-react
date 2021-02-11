import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Auth from '../Auth/Auth';
import ChessResult from '../ChessResult/ChessResult';
import NotFound from '../NotFound/NotFound';

const Navigation = () => {
    return (    
        <Switch>
            <Route exact path ="/" component = {Home} />
            <Route path = "/auth" component = {Auth} />
            <Route path = "/results/:username" component={ChessResult}/>
            <Route path = "/notFound" component={NotFound} />
        </Switch>
    )

}

export default Navigation;