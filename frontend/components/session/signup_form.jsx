import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            full_name: ""
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
        this.props.signup(user);
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
                <div className='animatedLogo'>
                <img className="loginimage" src='/loginimage.png'/>
                <img className="loginimage" src='/loginimage1.png'/>
                <img className="loginimage" src='/loginimage2.png'/>
                <img className="loginimage" src='/loginimage3.png'/>
                </div>
                <div className="loginwrapper">
                    <div className="loginform">
                        <form onSubmit={this.handleSubmit}>
                            <h1 className="instagraff">Instagraff</h1>
                            <input className="inputfields"
                                type="text"
                                value={`${this.state.email}`}
                                onChange={this.update("email")}
                                placeholder="Mobile Number or Email" />
                            <input className="inputfields"
                                type="text"
                                value={`${this.state.full_name}`}
                                onChange={this.update("full_name")}
                                placeholder="Full Name" />
                            <input className="inputfields"
                                type="text"
                                value={`${this.state.username}`}
                                onChange={this.update("username")}
                                placeholder="Username" />
                            <input className="inputfields"
                                type="password"
                                value={`${this.state.password}`}
                                onChange={this.update("password")}
                                placeholder="Password" />                                
                            <br />
                            <input type="submit" value="Sign up" className="submitbutton" />
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

export default SignupForm;