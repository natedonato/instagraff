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
            full_name: this.props.currentUser.full_name
        };
        this.handleSubmit = this.handleSubmit.bind(this);
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




    render() {
        return (
            <div className="wholelogin">
                <div className="loginwrapper">
                    <div className="loginform">
                        <form onSubmit={this.handleSubmit}>
                            <h1>Edit Profile</h1>
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
                            <input type="submit" value="Save Changes" className="submitbutton" />
                        </form>
                        {this.renderErrors()}
                    </div>
                    <div className="loginformfooter">
                        <span>Have an account?</span>
                        <Link className="signuplink" to="/login"> Log in </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(EditProfile);