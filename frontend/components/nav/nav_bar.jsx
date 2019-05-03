import React from 'react';
import CurrentUserContainer from '../current_user/current_user_container';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="navbar">
                    <i className="fab fa-instagram"></i>


                    Hey i'm a nav NavBar
                </div>
                <CurrentUserContainer />
            </>
        );
    }
};


export default NavBar;    