import React from 'react';


class ThumbnailPhoto extends React.Component {

    componentDidMount(){
        this.props.fetchPhotos();
    }


    render(){
        return(<div className="thumbnails">
            {Object.values(this.props.photos).reverse().map(photo => (
                <img src={`${photo.picUrl}`} key={`${photo.id}`}/>
            ))        
            }
            </div>
        )
    }
}



export default ThumbnailPhoto;    