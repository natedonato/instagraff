import { connect } from 'react-redux';
import ProfileForm from '../current_user/profile_form';
import { updateUserPhoto } from '../../actions/user_actions';


const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    updateUserPhoto: (formData, id) => dispatch(updateUserPhoto(formData, id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileForm);