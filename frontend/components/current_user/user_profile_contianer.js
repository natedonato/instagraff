import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import {fetchUser} from '../../actions/user_actions';
import UserProfile from './user_profile';
import { createFollow, deleteFollow } from '../../actions/follow_actions';
import ThumbnailPhotoContainer from './thumbnail_photos_container';

const mapStateToProps = ( state, ownProps) => {
    let id = ownProps.match.params.id;
    let photoCount = 0;

    return {
        id: parseInt(id),
        currentUser: state.session,
        users: state.entities.users,
        photos: state.entities.photos
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchUser: (id) => dispatch(fetchUser(id)),
    openModal: (id) => dispatch(openModal('userOptions', id)),
    createFollow: (leader_id) => dispatch(createFollow(leader_id)),
    deleteFollow: (leader_id) => dispatch(deleteFollow(leader_id)),
});

class UserBox extends React.Component {

    componentDidMount() {
        fetchUser(this.props.id);
    }

    render() {
        const { id, photos, createFollow, deleteFollow, currentUser, users, fetchUser, logout, openModal} = this.props;
        return (<>
            <UserProfile
                id={id}
                currentUser={currentUser}
                users={users}
                fetchUser={fetchUser}
                logout={logout}
                photos={photos}
                openModal={openModal}
                createFollow={createFollow}
                deleteFollow={deleteFollow}
                />
            <ThumbnailPhotoContainer id={id} />
            </>
        );
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserBox);