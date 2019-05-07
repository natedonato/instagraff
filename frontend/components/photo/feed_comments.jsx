import React from 'react';


class FeedComments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            photo_id: this.props.photo_id,
        };
        const date = new Date(this.props.date).toString().slice(0, 10).toUpperCase();
        this.state={date: date};
    }


    update(field) {
        return (
            (e) => this.setState({ [field]: e.target.value })
        );
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment(this.state);
        this.setState({ body: "" });
    }

    render() {

        const postButton = () =>{
            if(this.state.body === ""){
                return(<div style={ {opacity: 0.6} }    
                        className = "postButton" > Post</div >
                )
                }
            return(
                <div onClick={this.handleSubmit.bind(this)} className="postButton">Post</div>
            )
        }
        return (
            <div className="postFooterComments"> 
                <div className="commentList">
                    {this.props.comment_ids.map((id) => (
                        <div className="comment" key={id}>
                            <span className="posterUsername">
                                {this.props.users[this.props.comments[id].author_id].username}</span>
                            {this.props.comments[id].body}
                        </div>
                    ))}
                    <div className="date">{this.state.date}</div>
                </div> 

                <div className="commentFieldBox">
                    <textarea rows='1' className="commentField"
                        value={`${this.state.body}`}
                        onChange={this.update("body")}
                        placeholder="Add a comment..." 
                    />
                    {postButton()}
                </div>
            </div>
        );
    }
};


export default FeedComments;