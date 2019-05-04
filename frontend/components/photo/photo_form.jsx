import React from 'react';
import { withRouter } from 'react-router-dom';


class PhotoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.currentUser;
    }

    handleFile(e) {
        this.setState({ photoFile: e.currentTarget.files[0] });
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo[pic]', this.state.photoFile);
        this.props.postPhoto(formData).then((data) => this.props.history.push(`/photos/${data.photo.id}`));
    }

    render() {
        return (
            <div>
                <form action="">
                    <input type="file" onChange={this.handleFile.bind(this)} />
                    <input type="submit" value="submit" onClick={this.handleSubmit.bind(this)} />
                </form>
            </div>
        );
    }
};


export default withRouter(PhotoForm);