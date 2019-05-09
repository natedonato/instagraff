import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import {fetchUser} from '../../actions/user_actions';
import UserProfile from './user_profile';
import ThumbnailPhotoContainer from './thumbnail_photos_container'

const mapStateToProps = ( state, ownProps) => {
    let id = ownProps.match.params.id;
    return {
        id: parseInt(id),
        currentUser: state.session,
        users: state.entities.users
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchUser: (id) => dispatch(fetchUser(id)),
    openModal: (id) => dispatch(openModal('userOptions', id)),
});

class UserBox extends React.Component {

    componentDidMount() {
        fetchUser(this.props.id);
    }

    render() {
        const { id, currentUser, users, fetchUser, logout, openModal} = this.props;
        return (<>
            <UserProfile
                id={id}
                currentUser={currentUser}
                users={users}
                fetchUser={fetchUser}
                logout={logout}
                openModal={openModal}
                />
            <ThumbnailPhotoContainer />
            </>
        );
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserBox);