import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class CommentOptions extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        // this.state = { confirmation: false };
        // this.showDelete = this.showDelete.bind(this);
    // }

    // handleDelete() {
    //     this.setState({ confirmation: true })
    }

    submitDelete() {
        this.props.deleteComment(this.props.comment.id)
            .then(() => {
                this.props.fetchPhoto(this.props.comment.photo_id);
                this.props.closeModal();
            });
    }

    // showDelete() {
    //     if (this.props.photo.poster_id !== this.props.currentUser) {
    //         return;
    //     }
    //     else {
    //         return (
    //             <div className="optionsMiddle" onClick={this.handleDelete.bind(this)}>
    //                 Remove Photo
    //             </div>
    //         )
    //     }

    // }

    render() {
            return (
                <>
                    <Link className="optionsHead" to={`/users/${this.props.comment.author_id}`} onClick={this.props.closeModal}>Go to user profile</Link>
                    <div className="optionsMiddle" onClick={this.submitDelete.bind(this)}>
                        Delete Comment
                    </div>
                    <div className="optionsFoot" onClick={this.props.closeModal}>
                        Cancel
                    </div>
                </>
            )
        }
    //     if (this.state.confirmation === true) {
    //         return (
    //             <>
    //                 <div className="optionsDeleteHead">
    //                     <img src={`${this.props.photo.picUrl}`} className="deletePreview" />
    //                     <br></br>
    //                     Delete this post? </div>
    //                 <div className="optionsMiddle" onClick={this.submitDelete.bind(this)}>
    //                     Delete
    //             </div>
    //                 <div className="optionsFoot" onClick={this.props.closeModal}>
    //                     Cancel
    //             </div>
    //             </>
    //         )
    //     }
}

export default withRouter(CommentOptions);