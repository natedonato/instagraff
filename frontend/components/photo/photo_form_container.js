import { connect } from 'react-redux';
import PhotoForm from '../photo/photo_form';
import { postPhoto } from '../../actions/photo_actions';

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    postPhoto: (formData, id) => dispatch(postPhoto(formData, id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotoForm);