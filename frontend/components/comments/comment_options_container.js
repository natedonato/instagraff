import { connect } from 'react-redux';
import CommentOptions from '../comments/comment_options';
import { deleteComment } from '../../actions/comment_actions';
import { fetchPhoto } from '../../actions/photo_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, {data}) => {
    return {
        comment: data,
        currentUser: state.session.id,
        photo: state.entities.photos[data.photo_id]
    };
};

const mapDispatchToProps = dispatch => ({
    deleteComment: (id) => dispatch(deleteComment(id)),
    closeModal: () => dispatch(closeModal()),
    fetchPhoto: (id) => dispatch(fetchPhoto(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentOptions);