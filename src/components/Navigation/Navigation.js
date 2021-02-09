import React from 'react';

import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Auth from '../Auth/Auth'

const Navigation = () => {
    return (    
        <Switch>
            <Route exact path="/" component = {Home} />
            <Route path = "/auth" component = {Auth} /> 
        </Switch>
    )

}

export default Navigation;