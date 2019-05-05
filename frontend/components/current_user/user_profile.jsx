import React from 'react';
import EditProfilePicContainer from './edit_profile_pic_container';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(){
        if(this.props.users[this.props.id] === undefined){
        this.props.fetchUser(this.props.id);
        }
    }

    componentDidMount(){
        this.props.fetchUser(this.props.id);
    }


    render (){
        if (this.props.users[this.props.id] === undefined) {
            return (
                <h1> LOADING</h1>            
            )
        }
        let renderUserInfo = () => {
            if (this.props.id === this.props.currentUser.id){
                return(
                <div>
                    <EditProfilePicContainer currentUser={this.props.currentUser} />
                    <button className="header-button" onClick={this.props.logout}>Log Out</button>
                </div>)
            } else {
                let user = this.props.users[this.props.id]
                return(
                    <div>
                        <img className="profilePic" src={`${user.picUrl}`} alt="" />
                        {user.username}
                    </div>
                )
            }
        }

        renderUserInfo = renderUserInfo.bind(this)
        
 
        return(
            <div className="wholeProfileContainer">
                {renderUserInfo()}
            </div>
        );
    }
};


export default UserProfile;    