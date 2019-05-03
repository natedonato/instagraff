import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

//from app academy benchBNB project:


const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to="/" />
            )
    )} />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to="/login" />
            )
    )} />
);


const GateKeeper = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
               null
            )
    )} />
);





const mapStateToProps = state => (
    { loggedIn: Boolean(state.session.id) }
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const GateKeeperRoute = withRouter(connect(mapStateToProps)(GateKeeper));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));