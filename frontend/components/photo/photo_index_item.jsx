import React from 'react';

class PhotoIndexItem extends React.Component {

    render(){
        return(
            <>
            <div className="postHeader">
                <img src={`${this.props.user.picUrl}`} className='postProfilePic' alt=""/>
                {this.props.user.username}
                {this.props.photo.poster_id}
            </div>
            {/* <div className="postBox"> */}
                <img className="postPic" src={`${this.props.photo.picUrl}`} alt="" />
            {/* </div> */}
            </>
        )
    }
};

export default PhotoIndexItem;


