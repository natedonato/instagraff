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
            comment: ""
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

    render() {
        return (
            <div>
                <form action="">
                    <input type="file" onChange={this.handleFile.bind(this)} />
                    <input className="inputfields"
                        type="text"
                        value={`${this.state.comment}`}
                        onChange={this.update("comment")}
                        placeholder="Add Caption (optional)" />
                    <input type="submit" value="submit" onClick={this.handleSubmit.bind(this)} />
                </form>
            </div>
        );
    }
};


export default withRouter(PhotoForm);