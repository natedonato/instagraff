import React from 'react';
import { withRouter } from 'react-router-dom';


class PhotoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photoFile: null,
            comment: ""
        };
    }

    handleFile(e) {
        this.setState({ 
            photoFile: e.currentTarget.files[0],
        });
    }

    update(field) {
        return (
            (e) => this.setState({ [field]: e.target.value })
        );
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.photoFile === null){
            alert("Upload Failed - No Photo File Detected! \n \t Please make sure you have attached a photo and try again. \t");}
        const formData = new FormData();
        formData.append('photo[pic]', this.state.photoFile);
        this.props.postPhoto(formData).then((result) => this.props.history.push(`/photos/${result.data.photo.id}`
        ));
    }

    handleCancel(e){
        e.preventDefault();
        this.setState({
            photoFile: null,
            comment: ""
        });

    }

    render() {

        return (
            <div className="photoFormContainer">
                <div className="buttonContainer">
                    <button className="cancelButton" onClick={this.handleCancel.bind(this)}>Cancel</button>
                    <div className="photoFormHeader">New Photo Post</div>
                    <input className="postButton" type="submit" value="Share" onClick={this.handleSubmit.bind(this)} />
                </div>

                <form className="photoForm" action="">
                    <input type="file" onChange={this.handleFile.bind(this)} />

                </form> 
                <div className="captionBox">
                    <img className="postProfilePic" src={`${this.props.currentUser.picUrl}`} alt="" />
            
                    <textarea className="captionField" 
                       value={`${this.state.comment}`}
                       onChange={this.update("comment")}
                        placeholder="Write a caption... (optional)" />
                </div>
            </div>

        );
    }
};


export default withRouter(PhotoForm);