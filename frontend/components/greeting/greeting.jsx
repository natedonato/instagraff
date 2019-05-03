import React from 'react';
import { Link } from 'react-router-dom';

//temporary component from BenchBNB
const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav >
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign up!</Link>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;    