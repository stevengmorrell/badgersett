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
            <Route exact path="/" component={Home} />
            <Route path="/availability" component={Availability} />
            <Route path="/lineups" component={Lineup} />
            <Route path="/settings" component={Settings} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router;
