import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class EditProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.currentUser.id,
            username: this.props.currentUser.username,
            email: this.props.currentUser.email,
            full_name: this.props.currentUser.full_name,
            bio: this.props.currentUser.bio
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.submitButton = this.submitButton.bind(this);
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    update(field) {
        return (
            (e) => this.setState({ [field]: e.target.value })
        );
    }

    handleSubmit(e) {
        debugger;
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.updateUser(user).then(() => {
            this.props.history.push(`/users/${this.props.currentUser.id}`);
        });
    }

    renderErrors() {
        return (
            <ul className="loginerrors">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    submitButton(){
        if (this.state.username === this.props.currentUser.username &&
            this.state.email === this.props.currentUser.email &&
            this.state.bio === this.props.currentUser.bio
        ) {
            return (<div style={{ opacity: 0.6 }}
                className="postButton" >Submit Changes</div >
            )
        }
        return (
            <div onClick={this.handleSubmit.bind(this)} className="postButton">Submit Changes</div>
        )
    }


    render() {
        return (
            <div className="wholelogin">
                <div className="loginwrapper">
                    <div className="loginform" style={{display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                        <form onSubmit={this.handleSubmit}>
                            <h1 style={{textAlign: 'center'}}>Edit Profile</h1>
                            Email:
                            <input className="inputfields"
                                type="text"
                                value={`${this.state.email}`}
                                onChange={this.update("email")}
                                placeholder="Mobile Number or Email" />
                            Name:
                            <input className="inputfields"
                                type="text"
                                value={`${this.state.full_name}`}
                                onChange={this.update("full_name")}
                                placeholder="Full Name" />
                            Username:
                            <input className="inputfields"
                                type="text"
                                value={`${this.state.username}`}
                                onChange={this.update("username")}
                                placeholder="Username" />
                            Bio:
                            <input className="inputfields"
                                type="text"
                                value={`${this.state.bio}`}
                                onChange={this.update("bio")}
                                placeholder="Add bio" />
                            {this.submitButton()}
                        </form>
                        {this.renderErrors()}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(EditProfile);