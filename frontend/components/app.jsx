
import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginContainer from './session/login_form_container';
import SignupContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav/nav_bar_container';

const App = () => (
    <>
        <header>
                {/* <h1>
                   <marquee>WELCOME TO INSTAGRAFF BABY</marquee> 
                </h1> */}
        </header> 

        
        <Switch>
            <AuthRoute exact path="/login" component={LoginContainer} />
            <AuthRoute exact path="/signup" component={SignupContainer} />

            <ProtectedRoute exact path="/" component={NavBarContainer} />
            {/* <ProtectedRoute exact path="/" component={CurrentUserContainer} /> */}
            {/* <Route path="/benches/:benchId" component={BenchShowContainer} /> */}
        </Switch>


    </>
);

export default App;