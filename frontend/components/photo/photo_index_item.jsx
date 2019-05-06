import React from 'react';
import { Link } from 'react-router-dom';

class PhotoIndexItem extends React.Component {

    render(){
        return(
            <>
            <div className="postHeader">
                <div>
                <Link className="userInfoPic" to={`/users/${this.props.user.id}`}>
                    <img src={`${this.props.user.picUrl}`} className='postProfilePic' alt=""/>
                </Link>
                <Link className="userInfo" to={`/users/${this.props.user.id}`}>
                    <div className="posterUsername">{this.props.user.username}</div>
                </Link>
                </div>
                <i className="fas fa-ellipsis-h" />
            </div>
            <img className="postPic" src={`${this.props.photo.picUrl}`} alt="" />

            </>
        )
    }
};

export default PhotoIndexItem;


