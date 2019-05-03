import { connect } from 'react-redux';
import ShowPhoto from './show_photo';
import { fetchPhoto } from '../../actions/photo_actions';


const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.photoId;
    return {
        id: id,
        photo: state.entities.photos[id]
    };
};

const mapDispatchToProps = dispatch => ({
    fetchPhoto: (id) => (dispatch(fetchPhoto(id)))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowPhoto);