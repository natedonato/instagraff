import { connect } from 'react-redux';
import UserOptions from '../current_user/user_options';
import { closeModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, { data }) => {
    return {
        data: data,
    };
};

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    logout: () => dispatch(logout()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserOptions);