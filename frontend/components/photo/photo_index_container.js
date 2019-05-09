import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

import PhotoIndex from './photo_index';
import { fetchPhotos } from '../../actions/photo_actions';
import { createLike, deleteLike } from '../../actions/like_actions';


const mapStateToProps = (state) => {
    return {
        currentUser: state.session.id,
        photos: state.entities.photos,
        users: state.entities.users
    };
};

const mapDispatchToProps = dispatch => ({
    openModal: (id) => dispatch(openModal('photoOptions', id)),
    fetchPhotos: () => (dispatch(fetchPhotos())),
    createLike: (photo_id) => dispatch(createLike(photo_id)),
    deleteLike: (photo_id) => dispatch(deleteLike(photo_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);