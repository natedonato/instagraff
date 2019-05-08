import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class UserOptions extends React.Component {
    constructor(props) {
        super(props);
    }

    handleLogout(){
        this.props.logout();
        this.props.closeModal();
    }

    render() {
        return (
            <>                 
                <Link className="optionsHead" to="/users/edit" onClick={this.props.closeModal} >Edit Profile</Link>  
                <div className="optionsMiddle" onClick={this.handleLogout.bind(this)}>Log Out</div>
                <div className="optionsFoot" onClick={this.props.closeModal}>
                    Cancel
                </div>
            </>
        )
    }
}

export default withRouter(UserOptions);