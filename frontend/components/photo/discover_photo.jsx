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
                <img alt='View photo' src={`${photo.picUrl}`} key={`${photo.id}`}
                    onClick={() => this.props.openModal(photo.id)} />
            ))
            }
        </div>
        )
    }
}



export default DiscoverPhoto;    