import { connect } from 'react-redux';
import PhotoIndex from './photo_index';
import { fetchPhotos } from '../../actions/photo_actions';


const mapStateToProps = (state) => {
    return {
        photos: state.entities.photos,
        users: state.entities.users
    };
};

const mapDispatchToProps = dispatch => ({
    fetchPhotos: () => (dispatch(fetchPhotos()))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);