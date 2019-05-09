import { connect } from 'react-redux';
import ShowPhoto from './show_photo';
import { createComment, deleteComment } from '../../actions/comment_actions';
import { fetchPhoto } from '../../actions/photo_actions';
import { fetchUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
    let id;
    if(ownProps.id)
    {id = ownProps.id;}
    else{
    id = ownProps.match.params.photoId;}

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
    fetchUser: (id) => (dispatch(fetchUser(id))),
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (id) => dispatch(deleteComment(id)),
    openModal: (id) => dispatch(openModal('photoOptions', id)),
    openCommentModal: (id) => dispatch(openModal('commentOptions', id)),

});

export default connect(mapStateToProps, mapDispatchToProps)(ShowPhoto);