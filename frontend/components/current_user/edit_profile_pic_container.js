import { connect } from 'react-redux';
import EditProfilePicDisplay from './edit_profile_pic_display';
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
)(EditProfilePicDisplay);
