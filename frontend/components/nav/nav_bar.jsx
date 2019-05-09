import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    handleFile(e) {
        this.props.openModal({
            photoFile: e.currentTarget.files[0],
        });
    }    
 
    render() {
        return (
            <>
                
                <div className="navbar">
                    <Link to='/'>
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <div></div>
                    
                    <div className="navbar-righticons">
                        <Link to='/discover'>
                        <i className="far fa-compass"></i>
                        </Link>
                        <form action="">
                            <label htmlFor="uploadPhoto" title='Upload New Photo' alt='Upload New Photo'>
                                <i className="fa fa-plus" />

                            </label>

                            <input type="file" id="uploadPhoto" onChange={this.handleFile.bind(this)} />
                        </form>

    
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