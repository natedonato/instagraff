import React from 'react';


class DiscoverPhoto extends React.Component {

    componentDidMount() {
        this.props.fetchPhotos();
    }


    render() {
        if (Object.keys(this.props.photos).length === 0) {
            return (<h1> Loading </h1>)
        }
        let photos = Object.values(this.props.photos).sort(() => Math.random() - 0.5);

        return (<div className="thumbnails-discover">
            {photos.map(photo => (
                <div key={`${photo.id}`}>
                    <img alt='View photo' src={`${photo.picUrl}`}
                        onClick={() => this.props.openModal(photo.id)} />
                    <div className="thumbOverlay" onClick={() => this.props.openModal(photo.id)}>
                        <p style={{ zIndex: 8 }}>{photo.like_count} <i className="fas fa-heart" />   {photo.comment_ids.length}  <i className="fas fa-comment"></i>

                        </p>
                    </div>
                </div>
            ))        
            }
        </div>
        )
    }
}



export default DiscoverPhoto;    