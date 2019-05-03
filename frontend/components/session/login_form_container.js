import { connect } from 'react-redux';
import { login, logout, clearErrors } from '../../actions/session_actions';
import LoginForm from './login_form';


const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
    };
};

const mapDispatchToProps = dispatch => ({
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);