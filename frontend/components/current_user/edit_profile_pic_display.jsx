import React from 'react';

class EditProfilePicDisplay extends React.Component {
    constructor(props) {
        super(props);
    this.state=this.props.currentUser;
    }

    handleFile(e){
        this.setState({photoFile: e.currentTarget.files[0]});
        const formData = new FormData();
        formData.append('user[profile_pic]', this.state.photoFile);
        this.props.updateUserPhoto(formData, this.props.currentUser.id);
    }

    // handleSubmit(e){
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('user[profile_pic]', this.state.photoFile);
    //     this.props.updateUserPhoto(formData, this.props.currentUser.id);
    // };

    render() {
        return (
            <div>
               <form action="">
                    <label htmlFor="newProfilePic" title='Change Profile Photo' alt='Change Profile Photo'>
                        <img className="profilePicEdit" src={`${this.props.currentUser.picUrl}`} alt="Change Profile Photo" />
                    </label>

                    <input type="file" id="newProfilePic" onChange={this.handleFile.bind(this)}/>
                    {/* <input type="submit" value="submit" onClick={this.handleSubmit.bind(this)}/> */}
               </form>
            </div>
        );
    }
};


export default EditProfilePicDisplay;    