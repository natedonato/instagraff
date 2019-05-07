import React from 'react';
import { Link } from 'react-router-dom';

class FeedComments extends React.Component {
    constructor(props) {
        super(props);
        const date = new Date(this.props.date).toString().slice(0, 10).toUpperCase();
        this.state = {
            body: "",
            photo_id: this.props.photo_id,
            date: date
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

                    <div className="date" ><Link to={`/photos/${this.props.photo_id}`}>{this.state.date}</Link></div>
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