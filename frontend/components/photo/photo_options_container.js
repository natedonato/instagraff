import { connect } from 'react-redux';
import PhotoOptions from '../photo/photo_options';
import { removePhoto } from '../../actions/photo_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = ( state ) => {
    return {
        currentUser: state.session.id,
    };
};

const mapDispatchToProps = dispatch => ({
    removePhoto: (id) => dispatch(removePhoto(id)),
    closeModal: () => dispatch(closeModal())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotoOptions);