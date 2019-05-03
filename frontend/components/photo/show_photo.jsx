import React from 'react';
import { Link } from 'react-router-dom';

class ShowPhoto extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        debugger;
        this.props.fetchPhoto(this.props.id);
    }

    render() {
        if (this.props.photo === undefined){
            return(
            <h1> LOADING</h1>
            )
        }
        return (
            <div>
                <img className="postPic" src={`${this.props.photo.picUrl}`} alt="" />
            </div>
        );
    }
};


export default ShowPhoto;    