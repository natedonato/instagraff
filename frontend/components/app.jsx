
import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import LoginContainer from './session/login_form_container';
import SignupContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute, GateKeeperRoute } from '../util/route_util';
import NavBarContainer from './nav/nav_bar_container';
import ShowPhotoContainer from './photo/show_photo_container';
import PhotoIndexContainer from './photo/photo_index_container';
import PhotoFormContainer from './photo/photo_form_container';
import UserProfileContainer from './current_user/user_profile_contianer';

const App = () => (
    <>
        <header>
        </header> 
        <GateKeeperRoute component={NavBarContainer} />

        <Switch>
            <AuthRoute exact path="/login" component={LoginContainer} />
            <AuthRoute exact path="/signup" component={SignupContainer} />
            <ProtectedRoute exact path="/users/:id" component={UserProfileContainer} />
            <ProtectedRoute exact path="/photos/new" component={PhotoFormContainer} />
            <ProtectedRoute exact path="/photos/:photoId" component={ShowPhotoContainer} />
            <ProtectedRoute exact path="/" component={PhotoIndexContainer}/>

            <Route component={() => (<><h1>Sorry, this page isn't available.</h1><br/> <h3>
                Return to <Link to="/">Instagraff</Link>??</h3></>)} />
        </Switch>
    </>
);


export default App;