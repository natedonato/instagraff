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
            return (
                <h1> LOADING</h1>
            )
        }
        return (
            <div>
                <ul>
                    {Object.values(this.props.photos).map(photo => (
                        <PhotoIndexItem photo={photo} key={photo.id} />

                    ))}
                </ul>
            </div>
        );
    }
};


export default PhotoIndex;    