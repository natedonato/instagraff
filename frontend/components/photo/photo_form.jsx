import React from 'react';
import { withRouter } from 'react-router-dom';


class PhotoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photoFile: props.data.photoFile,
            comment: "",
            loading: false,
            style: {opacity: 1.0}
        };

        const file = props.data.photoFile;
        const fileReader = new FileReader();

        fileReader.onloadend = () => {
            this.setState({ previewUrl: fileReader.result });
        };

        fileReader.readAsDataURL(file);
        
    }


    update(field) {
        return (
            (e) => this.setState({ [field]: e.target.value })
        );
    }


    handleKeyPress(e) {
        if (event.key === 'Enter' && !event.shiftKey) {
            this.handleSubmit(e);
        }

    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.photoFile === null){
            this.state.loading = false;
            this.state.style = {opacity: 1};
            alert("Upload Failed - No Photo File Detected! \n \t Please make sure you have attached a photo and try again. \t");}
        else if(!this.state.loading){
        this.setState({loading: true});
        this.setState({style: {opacity: 0.6}});
        const formData = new FormData();
        formData.append('photo[pic]', this.state.photoFile);
        this.props.postPhoto(formData).then((result) => {
            this.props.closeModal();
                if(this.state.comment !== ""){
                    const comment = { body: this.state.comment,
                    photo_id: result.data.photo.id };
                    this.props.createComment(comment);
                }
            this.props.history.push(`/photos/${result.data.photo.id}`);
        });
        }
    }

    handleCancel(e){
        e.preventDefault();
        this.setState({
            photoFile: null,
            comment: ""
        });
        this.props.closeModal();
    }

    render() {

        return (
            <div className="photoFormContainer">
                <div className="buttonContainer">
                    <button className="cancelButton" onClick={this.handleCancel.bind(this)}>Cancel</button>
                    <div className="photoFormHeader">New Photo Post</div>
                    <input className="postButton" type="submit" value="Share" onClick={this.handleSubmit.bind(this)} />
                </div>
                <img className="previewPostImage" src={this.state.previewUrl} style={this.state.style} />
                <div className="captionBox">
                    <img className="postProfilePic" src={`${this.props.currentUser.picUrl}`} alt=""  />
                    <textarea className="captionField" 
                       value={`${this.state.comment}`}
                       onChange={this.update("comment")}
                        onKeyPress={this.handleKeyPress.bind(this)}
                        placeholder="Write a caption... (optional)" />
                </div>
            </div>

        );
    }
};


export default withRouter(PhotoForm);