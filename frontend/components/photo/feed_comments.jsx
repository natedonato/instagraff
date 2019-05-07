import React from 'react';


class FeedComments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            photo_id: this.props.photo_id,
        };
    }


    update(field) {
        return (
            (e) => this.setState({ [field]: e.target.value })
        );
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment(this.state);
    }

    render() {
        return (
            <>
                <div className="commentList">
                    {this.props.comment_ids.map((id) => (
                        <div key={id}>
                            {this.props.users[this.props.comments[id].author_id].username}
                            {this.props.comments[id].body}
                        </div>
                    ))}

                </div>
                <textarea rows="1" className="commentField"
                    value={`${this.state.body}`}
                    onChange={this.update("body")}
                    placeholder="Add a comment..." 
                />
                <div onClick={this.handleSubmit.bind(this)} className="postButton">Post</div>
            </>
        );
    }
};


export default FeedComments;