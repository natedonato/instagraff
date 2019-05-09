import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import CommentOptionsContainer from './comments/comment_options_container';

// import SignupFormContainer from '../session_form/signup_form_container';

import PhotoFormContainer from './photo/photo_form_container';
import PhotoOptionsContainer from './photo/photo_options_container';
import UserOptionsModalContainer from './current_user/user_options_modal_container';
import ShowPhotoContainer from './photo/show_photo_container';


function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal.name) {
        case 'photoForm':
            component = <PhotoFormContainer data={modal.data} />;
            break;
        case 'photoOptions':
            component = <PhotoOptionsContainer photo={modal.data} />;
            break;
        case 'commentOptions':
            component = <CommentOptionsContainer data={modal.data} />
            break;
        case 'userOptions':
            component = <UserOptionsModalContainer data={modal.data} />
            break;
        case 'photoShow':
            component = <ShowPhotoContainer id={modal.data} />
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);