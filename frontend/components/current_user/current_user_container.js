
import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import CurrentUser from './current_user';

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrentUser);