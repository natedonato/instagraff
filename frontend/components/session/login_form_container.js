import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
    };
};

const mapDispatchToProps = dispatch => ({
    login: (user) => dispatch(login(user)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);