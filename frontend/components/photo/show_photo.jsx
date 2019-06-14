import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class ShowPhoto extends React.Component {
    constructor(props) {
        super(props);
        this.displayComment = this.displayComment.bind(this);
        this.deleteLike = this.deleteLike.bind(this);

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


    deleteLike() {
        this.props.deleteLike(this.props.photo.id)
    }

    likes() {
        let count;
        if (this.props.photo.like_count === 1) { count = `${this.props.photo.like_count} like` }
        else {
            count = `${this.props.photo.like_count} likes`
        }
        if (this.props.photo.liked_by_current_user === false) {
            return (<>
                <i className="far fa-heart" id="likeIcon" style={{ cursor: "pointer" }} onClick={() => this.props.createLike(this.props.photo.id)}></i>
                <div className="comment"> <div style={{ cursor: "default" }} className="posterUsername">{count}</div></div>
            </>)
        }
        else {
            return (<>
                <i className="fas fa-heart" id="likeIcon" onClick={this.deleteLike} style={{
                    color: "#ED4956", cursor: "pointer"
                }}></i>
                <div className="comment"> <div style={{ cursor: "default" }} className="posterUsername">{count}</div>
                </div>
            </>)
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
        const date = new Date(this.props.photo.created_at).toString().slice(0, 10).toUpperCase();

        return (
            <div className="photoShow">
                <img className="postPic" style={ {maxWidth: "calc(100vw - 290px)"}} src={`${this.props.photo.picUrl}`} alt="" />
                
                <div className="sidebarMain">
                <div className="sideBarHeader"> 
                        <div style={{
                            display: "flex",
                            alignItems: "center"}}>
                    <Link className="userInfoPic" to={`/users/${this.props.photo.poster_id}`}>
                            <img src={`${this.props.users[this.props.photo.poster_id].picUrl}`} className='postProfilePic' alt="" />
                    </Link>
                    <Link className="userInfo" to={`/users/${this.props.photo.poster_id}`}>
                            <div className="posterUsername">{this.props.users[this.props.photo.poster_id].username}</div>
                    </Link>
                    </div>
                    <i className="fas fa-ellipsis-h" style={{cursor: "pointer"}} onClick={this.handleOptions.bind(this)} />

                </div>  
                <div className="showComments">
                        <div className="commentList" style={{maxWidth: "262px", overflow: "auto"}}>
                    {this.props.photo.comment_ids.map((id) => (
                        this.displayComment(id)
                    ))}
                
                
                </div>
                <div style={{width: '100%', borderTop: '1px solid #e6e6e6'}}>
                    {this.likes()}
                <div className="date" ><Link to={`/photos/${this.props.photo.id}`}>{date}</Link></div>
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