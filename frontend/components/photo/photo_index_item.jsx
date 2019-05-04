import React from 'react';

class PhotoIndexItem extends React.Component {
    


    render(){
        return(
            <img className="postPic" src={`${this.props.photo.picUrl}`} alt="" />
        )
    }
};

export default PhotoIndexItem;


