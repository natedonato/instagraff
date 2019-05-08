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

    editProfileModal(){
        this.props.openModal(this.props.id);
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
                </div>)
            } else {
                let user = this.props.users[this.props.id]
                return(
                    <div>
                        <img className="profilePic" style={{ objectFit: "cover"}}src={`${user.picUrl}`} alt="" />
                    </div>
                )
            }
        }

        let renderUserOptions = () => {
            if (this.props.id === this.props.currentUser.id){
                return(
            <i className="fas fa-cog" onClick={this.editProfileModal.bind(this)} style={{ float: "right", cursor: "pointer" }}></i>
            )}
        }

        renderUserInfo = renderUserInfo.bind(this)
        renderUserOptions = renderUserOptions.bind(this)
 
        return(
            <div className="wholeProfileContainer">   
                <div className="profilePicContainer">
                {renderUserInfo()}
                </div>            
                <div className="ProfileInfo">
                <div className="profileHead">
                {this.props.users[this.props.id].username}
                {renderUserOptions()}
                </div>
                <div className="profileStats">
                    485 posts 351 followers 560 following
                </div>
                <div className="profileBio">
                        <div>{this.props.users[this.props.id].full_name}</div>
                <div>{this.props.users[this.props.id].bio}</div>
                </div> 
                </div>
            </div>
        );
    }
};


export default UserProfile;    