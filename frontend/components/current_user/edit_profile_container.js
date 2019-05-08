import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session_actions';
import { updateUser } from '../../actions/user_actions';
import EditProfile from './edit_profile';

const mapStateToProps = ( state) => {
    return {
        errors: state.errors.user,
        currentUser: state.entities.users[state.session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    updateUser: (user) => dispatch(updateUser(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditProfile);