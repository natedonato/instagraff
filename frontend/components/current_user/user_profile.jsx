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
                <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>      
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
                    </div>
                )
            }
        }

        renderUserInfo = renderUserInfo.bind(this)
        
 
        return(
            <div className="wholeProfileContainer">   
                <div className="profilePicContainer">
                {renderUserInfo()}
                </div>            
                <div className="ProfileInfo">
                <div className="profileHead">
                {this.props.users[this.props.id].username}
                </div>
                <div className="profileStats">
                    485 posts 351 followers 560 following
                </div>
                <div className="profileBio">
                Full Name
                <br></br>
                Bio
                {this.props.users[this.props.id].full_name}
                {this.props.users[this.props.id].bio}
                </div> 
                </div>
            </div>
        );
    }
};


export default UserProfile;    