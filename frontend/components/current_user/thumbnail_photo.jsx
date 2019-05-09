import React from 'react';


class ThumbnailPhoto extends React.Component {

    componentDidMount(){
        this.props.fetchPhotos();
    }


    render(){
        if (Object.keys(this.props.photos).length === 0){
            return(<h1> Loading </h1>)
        }
        let photos = Object.values(this.props.photos).filter(photo => photo.poster_id === this.props.id)
        return(<div className="thumbnails">
            {photos.map(photo => (
                <div key={`${photo.id}`}>
                    <img alt='View photo' src={`${photo.picUrl}`} 
                    onClick={() => this.props.openModal(photo.id)} /> 
                    <div className="thumbOverlay" id="profile" onClick={() => this.props.openModal(photo.id)}>
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



export default ThumbnailPhoto;    