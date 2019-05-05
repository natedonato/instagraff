import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="navbar">
                    <Link to='/'>
                        <i className="fab fa-instagram"></i>
                    </Link>
                    
                    <div className="navbar-righticons">
                    
                        <i className="far fa-compass"></i>
                        <Link to="/photos/new"> 
                            <i className="fa fa-plus"></i>
                        </Link>
                        
                        <Link to={`/users/${this.props.currentUser.id}`}>
                            <i className="far fa-user"></i>
                        </Link>    
                        
                    
                    </div>
                </div>
                <div className="contentpusher">
                </div>
            </>
        );
    }
};


export default NavBar;    