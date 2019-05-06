import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

import PhotoIndex from './photo_index';
import { fetchPhotos } from '../../actions/photo_actions';


const mapStateToProps = (state) => {
    return {
        currentUser: state.session.id,
        photos: state.entities.photos,
        users: state.entities.users
    };
};

const mapDispatchToProps = dispatch => ({
    openModal: (id) => dispatch(openModal('photoOptions', id)),
    fetchPhotos: () => (dispatch(fetchPhotos()))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);