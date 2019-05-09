import React from 'react';
import { Link } from 'react-router-dom';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPhotos();
    }

    render() {
        if (this.props.photos === {}) {
            return (<>
                <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
           </> )
        }
        return (
            <>
                {Object.values(this.props.photos).map(photo => (
                    <PhotoIndexItem createLike = {this.props.createLike} deleteLike={this.props.deleteLike} photo={photo} key={photo.id} openModal={this.props.openModal} currentUser={this.props.currentUser} user={this.props.users[photo.poster_id]}/>
                ))}
            </>
        );
    }
};


export default PhotoIndex;    