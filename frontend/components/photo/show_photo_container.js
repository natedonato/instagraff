import { connect } from 'react-redux';
import ShowPhoto from './show_photo';
import { fetchPhoto } from '../../actions/photo_actions';


const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.photoId;
    let user = {};
    if(state.entities.photos[id]){
        let userId = state.entities.photos[id].poster_id;
        user = state.entities.users[userId];
    }
    return {
        id: id,
        photo: state.entities.photos[id],
        user: user
    };

};

const mapDispatchToProps = dispatch => ({
    fetchPhoto: (id) => (dispatch(fetchPhoto(id)))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowPhoto);