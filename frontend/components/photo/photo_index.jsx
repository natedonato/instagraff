import React from 'react';
import { Link } from 'react-router-dom';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {
    constructor(props) {
        super(props);
        this.feedSelector = this.feedSelector.bind(this);
    }

    feedSelector () {
        return(
        Object.values(this.props.photos).reverse().map(photo => {
        if (this.props.users[photo.poster_id].followed_by_current_user) {
            return(
                <PhotoIndexItem createLike={this.props.createLike} deleteLike={this.props.deleteLike} photo={photo} key={photo.id} openModal={this.props.openModal} currentUser={this.props.currentUser} user={this.props.users[photo.poster_id]} />
            )
        }
    })
    );

    }

    componentDidMount() {
        this.props.fetchPhotos();
    }

    render() {
        if (Object.keys(this.props.photos).length === 0) {
            return (<h1> Loading </h1>)
        }
        return (
            <>
              {this.feedSelector()}
            </>
        );
    }
};


export default PhotoIndex;    