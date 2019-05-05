
import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import {fetchUser} from '../../actions/user_actions';
import UserProfile from './user_profile';

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
    fetchUser: (id) => dispatch(fetchUser(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfile);