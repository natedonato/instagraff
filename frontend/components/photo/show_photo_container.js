import { connect } from 'react-redux';
import ShowPhoto from './show_photo';
import { createComment, deleteComment } from '../../actions/comment_actions';
import { fetchPhoto } from '../../actions/photo_actions';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.photoId;
    let user = {};
    if(state.entities.photos[id]){
        let userId = state.entities.photos[id].poster_id;
        user = state.entities.users[userId];
    }
    return {
        id: id,
        currentUser: state.session.id,
        photo: state.entities.photos[id],
        users: state.entities.users,
        comments: state.entities.comments,
        errors: state.errors.photo
    };

};

const mapDispatchToProps = dispatch => ({
    fetchPhoto: (id) => (dispatch(fetchPhoto(id))),
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (id) => dispatch(deleteComment(id)),
    openModal: (id) => dispatch(openModal('photoOptions', id)),

});

export default connect(mapStateToProps, mapDispatchToProps)(ShowPhoto);