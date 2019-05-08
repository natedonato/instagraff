import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class ShowPhoto extends React.Component {
    constructor(props) {
        super(props);
        this.displayComment = this.displayComment.bind(this);
        if (this.props.photo){
        const date = new Date(this.props.photo.created_at).toString().slice(0, 10).toUpperCase();
        this.state = {
            body: "",
            photo_id: this.props.photo_id,
            date: date
        };
        }
        
        else{
            this.state = {
                body: "",
                photo_id: "",
                date: ""
            };
        }
        this.handleCommentOptions = this.handleCommentOptions.bind(this);
    }
    componentDidMount(){
            if (this.props.photo === undefined) {
                this.props.fetchPhoto(this.props.id);
            }
    } 

    componentDidUpdate(){
        if(this.props.photo === undefined){
        this.props.fetchPhoto(this.props.id);}
    }

    update(field) {
        return (
            (e) => this.setState({ [field]: e.target.value })
        );
    }

    handleKeyPress(e) {
        if (event.key === 'Enter' && !event.shiftKey) {
            this.handleSubmit(e);
        }

    }
    handleOptions(e) {
        e.preventDefault();
        this.props.openModal(
            this.props.photo
        );
    }

    handleCommentOptions(id){
        this.props.openCommentModal(
            this.props.comments[id]
        );
    }


    handleSubmit(e) {
        e.preventDefault();
        const comment = { body: this.state.body, photo_id: this.props.photo.id};
        this.props.createComment(comment);
        this.setState({ body: "" });
    }

    displayComment(id) {
        if (this.props.users[this.props.comments[id].author_id] === undefined) {
            this.props.fetchUser(this.props.comments[id].author_id);
        }
        else {
            return (
                <div className="comment" key={id}>
                    <Link to={`/users/${this.props.comments[id].author_id}`} className="posterUsername">
                        {this.props.users[this.props.comments[id].author_id].username} </Link>
                    {this.props.comments[id].body}
                    <i className="fas fa-ellipsis-h" style={{ float: "right" }} onClick={() => this.handleCommentOptions(id)} />
                </div>)
        }
    }

    render() {
        const postButton = () => {
            if (this.state.body === "") {
                return (<div style={{ opacity: 0.6 }}
                    className="postButton" > Post</div >
                )
            }
            return (
                <div onClick={this.handleSubmit.bind(this)} className="postButton">Post</div>
            )
        }

        if (this.props.photo === undefined){
            return(
                <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            )
        }
        return (
            <div className="photoShow">
                <img className="postPic" src={`${this.props.photo.picUrl}`} alt="" />
                
                <div className="sidebarMain">
                <div className="sideBarHeader">

                    <Link className="userInfoPic" to={`/users/${this.props.currentUser}`}>
                            <img src={`${this.props.users[this.props.currentUser].picUrl}`} className='postProfilePic' alt="" />
                    </Link>
                    <Link className="userInfo" to={`/users/${this.props.currentUser}`}>
                            <div className="posterUsername">{this.props.users[this.props.currentUser].username}</div>
                    </Link>

                    <i className="fas fa-ellipsis-h" onClick={this.handleOptions.bind(this)} />

                </div>  
                <div className="showComments">
                <div className="commentList">
                    {this.props.photo.comment_ids.map((id) => (
                        this.displayComment(id)
                    ))}
                    <div className="date" ><Link to={`/photos/${this.props.photo_id}`}>{this.state.date}</Link></div>
                </div>

                <div className="commentFieldBox">
                    <textarea rows='1' className="commentField"
                        value={`${this.state.body}`}
                        onChange={this.update("body")}
                        placeholder="Add a comment..."
                        onKeyPress={this.handleKeyPress.bind(this)}
                    />
                    {postButton()}
                    </div>
                </div>
                </div>
            </div>
        );
    }
};


export default withRouter(ShowPhoto);    