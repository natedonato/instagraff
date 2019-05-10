import React from 'react';
import EditProfilePicContainer from './edit_profile_pic_container';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.deleteFollow = this.deleteFollow.bind(this);
        this.createFollow = this.createFollow.bind(this);
    }


    deleteFollow() {
        this.props.deleteFollow(this.props.id);
    }

    createFollow(){
        this.props.createFollow(this.props.id);
    }


    follows() {
        if (this.props.users[this.props.id].followed_by_current_user === false) {
            return (<>
                <div className="submitbutton" style={{width: "auto", height: "auto", marginRight: "20px", marginTop: "0px", marginBottom: "0px"}}onClick={this.createFollow} > Follow </div>
            </>)
        }
        else {
            return (<>
                <span onClick={this.deleteFollow} style={{
                    color: "#ED4956", cursor: "pointer"
                }}> Unfollow
                </span>
            </>)
        }
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
        let photoCount = 0;
        if (this.props.photos !== undefined) {
            photoCount = Object.values(this.props.photos).filter(photo => photo.poster_id === this.props.id).length;
        }


        if (this.props.users[this.props.id] === undefined) {
            return (
                <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>      
            )
        }
        let followerCount = this.props.users[this.props.id].follower_count
        let followingCount = this.props.users[this.props.id].following_count
        
        let SphotoCount;
        let SfollowerCount;


        if (photoCount === 1) { SphotoCount = `${photoCount} photo   ` }
        else {
            SphotoCount = `${photoCount} photos   `
        }


        if (followerCount === 1) { SfollowerCount = `${followerCount} follower   ` }
        else {
            SfollowerCount = `${followerCount} followers   `
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
                    <i className="fas fa-cog" style={{ float: "right", cursor: "pointer"
            } }onClick={this.editProfileModal.bind(this)} ></i>
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


                        <div style={{ float: "right", cursor: "pointer" , display: "flex", justifyContent: "flex-end", alignItems: "center"}}
                        
                        
                        
                        
                        
                        >
                {this.follows()}
                {renderUserOptions()}
                        </div>
                </div>
                <div className="profileStats">
                        {/* {`${this.props.users[this.props.id].followed_by_current_user}`} */}
                    {SphotoCount}  {SfollowerCount}  {followingCount} following 
                </div>
                <div className="profileBio">
                        <div className="posterUsername" style={{pointer: "default"}} >{this.props.users[this.props.id].full_name}</div>
                <div>{this.props.users[this.props.id].bio}</div>
                </div> 
                </div>
            </div>
        );
    }
};


export default UserProfile;    