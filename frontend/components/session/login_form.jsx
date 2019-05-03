import React from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUser = this.demoUser.bind(this);
    }

    componentWillUnmount(){
        this.props.clearErrors();
    }

    update(field){
        return(
            (e) => this.setState({[field]: e.target.value})
        );
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user);
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
    
    demoUser(e) {
        // types in demo user, thanks to Sean for helping me get this going!
        e.preventDefault();

        let username = {
            strings: ["demo_user93"],
            typeSpeed: 25
        };

        let password = {
            strings: ["password93"],
            typeSpeed: 25
        };

        this.setState({
            username: "",
            password: ""
        }, () => {
            new Typed("#username", username);

            setTimeout(() => {
                new Typed("#password", password);
            }, 500);

            setTimeout(() => {
                this.props.login({
                    username: "demo_user93",
                    password: "password93"
                });
            }, 990
            );
        });
    }

    render(){
        return(
        <div className="wholelogin">
            <div >
                <img className="loginimage" src='/loginimage.png' />
            </div>
            <div className="loginwrapper">
                <div className="loginform">
                    <form onSubmit={this.handleSubmit}>
                        <h1 className="instagraff">Instagraff</h1>
                        <input className="inputfields"
                        id="username"
                        type="text" 
                        value={`${this.state.username}`} 
                        onChange={this.update("username")} 
                        placeholder="Username" />
                        <input className="inputfields"
                        id="password"
                        type="password" 
                        value={`${this.state.password}`} 
                        onChange={this.update("password")} 
                        placeholder="Password" />
                        <br/>
                        <input type="submit" value="Login" className="submitbutton"/>
                        
                        <p className="or"> OR </p>
                        <div className="orline">
                        </div>
                        
                        
                        <button onClick={this.demoUser} className="demobutton">Demo User</button>

                    </form>
                    {/* <div className="loginerrorsdiv"> */}
                        {this.renderErrors()}
                    {/* </div> */}

                </div>
                <div className="loginformfooter">
                    <span>Don't have an account?</span>
                    <Link className="signuplink" to="/signup"> Sign Up </Link>
                </div>
            </div>
        </div>
        )
    }
}

export default LoginForm;