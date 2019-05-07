import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class PhotoOptions extends React.Component {
    constructor(props){
        super(props);
        this.state={ confirmation: false};
        this.showDelete = this.showDelete.bind(this);
    }

    handleDelete(){
        this.setState({ confirmation: true })
    }

    submitDelete(){
        this.props.removePhoto(this.props.photo.id)
            .then(()=>{
                this.props.closeModal();
                this.props.history.push(`/users/${this.props.currentUser}`);
            });
        }

    showDelete(){
        if(this.props.photo.poster_id !== this.props.currentUser){
            return;
        }
        else{
            return (
                <div className="optionsMiddle" onClick={this.handleDelete.bind(this)}>
                    Remove Photo
                </div>
            )
        }

        }

    render(){
        if(this.state.confirmation === false){
            return(
                <>
                    <Link className="optionsHead" to={`/photos/${this.props.photo.id}`} onClick={this.props.closeModal}>Go to post</Link>
                    {this.showDelete()}
                    <div className="optionsFoot" onClick={this.props.closeModal}>
                        Cancel
                    </div>
                </>
            )
        }
        if (this.state.confirmation === true) {
            return(
                <>
                <div className="optionsDeleteHead"> 
                <img src={`${this.props.photo.picUrl}`} className="deletePreview"/>
                <br></br>
                Delete this post? </div>
                <div className="optionsMiddle" onClick={this.submitDelete.bind(this)}>
                    Delete
                </div>
                <div className="optionsFoot" onClick={this.props.closeModal}>
                    Cancel
                </div>
                </>
            )
        }
    }        
}

export default withRouter(PhotoOptions);