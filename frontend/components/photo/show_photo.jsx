import React from 'react';
import { Link } from 'react-router-dom';
import PhotoFormContainer from './photo_form_container';

class ShowPhoto extends React.Component {
    constructor(props) {
        super(props);
        
    }
    componentDidMount(){
            if (this.props.photo === undefined) {
                this.props.fetchPhoto(this.props.id);
            }
    }

    componentDidUpdate(){
        if(this.props.photo === undefined){
        this.props.fetchPhoto(this.props.id);
    }
    }

    render() {
        if (this.props.photo === undefined){
            return(
                <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            )
        }
        return (
            <div className="photoShow">
                <img className="postPic" src={`${this.props.photo.picUrl}`} alt="" />

                <div className="sideBarHeader">
                    <Link className="userInfoPic" to={`/users/${this.props.user.id}`}>
                        <img src={`${this.props.user.picUrl}`} className='postProfilePic' alt="" />
                    </Link>
                    <Link className="userInfo" to={`/users/${this.props.user.id}`}>
                        <div className="posterUsername">{this.props.user.username}</div>
                    </Link>
                </div>
            </div>
        );
    }
};


export default ShowPhoto;    