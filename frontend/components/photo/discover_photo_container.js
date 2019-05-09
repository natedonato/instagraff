import { connect } from 'react-redux';
import React from 'react';

import { openModal } from '../../actions/modal_actions';
import DiscoverPhoto from './discover_photo';
import { fetchPhotos } from '../../actions/photo_actions';


const mapStateToProps = (state) => {
    return {
        photos: state.entities.photos,
    };
};

const mapDispatchToProps = () => ({
    openModal: (id) => (dispatch(openModal('photoShow', id))),
    fetchPhotos: () => (dispatch(fetchPhotos())),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DiscoverPhoto);