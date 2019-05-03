
import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginContainer from './session/login_form_container';
import SignupContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute, GateKeeperRoute } from '../util/route_util';
import NavBarContainer from './nav/nav_bar_container';
import CurrentUserContainer from './current_user/current_user_container';

const App = () => (
    <>
        <header>
        </header> 
        <GateKeeperRoute component={NavBarContainer} />

        <Switch>
            <AuthRoute exact path="/login" component={LoginContainer} />
            <AuthRoute exact path="/signup" component={SignupContainer} />
            <ProtectedRoute exact path="/users/:id" component={CurrentUserContainer} />
        </Switch>
    </>
);

export default App;