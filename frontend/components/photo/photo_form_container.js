import { connect } from 'react-redux';
import PhotoForm from '../photo/photo_form';
import { postPhoto } from '../../actions/photo_actions';
import { closeModal} from '../../actions/modal_actions';

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    postPhoto: (formData, id) => dispatch(postPhoto(formData, id)),
    closeModal: () => dispatch(closeModal())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotoForm);