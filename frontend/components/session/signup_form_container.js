import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session
    };
};

const mapDispatchToProps = dispatch => ({
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupForm);