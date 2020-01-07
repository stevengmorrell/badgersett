import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home'
import NotFound from './NotFound';
import Availability from './Availability';
import Lineup from './Lineup';
import Settings from './Settings';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route exact path="/availability" component={Availability} />
            <Route exact path="/lineups" component={Lineup} />
            <Route exact path="/settings" component={Settings} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router;
