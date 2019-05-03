import React from 'react';
import ProfileModalContainer from './profile_modal_container';
import { Link } from 'react-router-dom';

class CurrentUser extends React.Component {
    constructor(props) {
        super(props);
    }

    render (){
        return(
            <div>
                <img className="profilePic" src={`${this.props.currentUser.picUrl}`} alt=""/>
                {this.props.currentUser.username}
                <button className="header-button" onClick={this.props.logout}>Log Out</button>
                <ProfileModalContainer currentUser={this.props.currentUser} />
            </div>
        );
    }
};


export default CurrentUser;    