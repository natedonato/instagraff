import React from 'react';

class ProfileForm extends React.Component {
    constructor(props) {
        super(props);
    this.state=this.props.currentUser;
    }

    handleFile(e){
        this.setState({photoFile: e.currentTarget.files[0]});
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[profile_pic]', this.state.photoFile);
        this.props.updateUserPhoto(formData, this.props.currentUser.id);
    };

    render() {
        return (
            <div>
               <form action="">
                    <input type="file" onChange={this.handleFile.bind(this)}/>
                    <input type="submit" value="submit" onClick={this.handleSubmit.bind(this)}/>
               </form>
            </div>
        );
    }
};


export default ProfileForm;    